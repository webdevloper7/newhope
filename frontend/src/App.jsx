import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Layout & Common
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import EmergencyFloat from './components/common/EmergencyFloat';

// Lazy Loaded Sections
const Hero = lazy(() => import('./components/layout/Hero'));
const Services = lazy(() => import('./components/sections/Services'));
const About = lazy(() => import('./components/sections/About'));
const Doctors = lazy(() => import('./components/sections/Doctors'));
const Shop = lazy(() => import('./components/sections/Shop'));
const PetHealthBlog = lazy(() => import('./components/sections/PetHealthBlog'));
const Booking = lazy(() => import('./components/sections/Booking'));
const MapSection = lazy(() => import('./components/sections/MapSection'));
const Contact = lazy(() => import('./components/sections/Contact'));

import { INITIAL_CLINIC_INFO, INITIAL_SERVICES, INITIAL_DOCTORS } from './utils/mockData';
import { manageData } from './utils/localStorage';

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  const [clinicInfo, setClinicInfo] = useState(manageData.clinicInfo.get(INITIAL_CLINIC_INFO));
  const [services, setServices] = useState(manageData.services.getAll(INITIAL_SERVICES));
  const [doctors, setDoctors] = useState(manageData.doctors.getAll(INITIAL_DOCTORS));

  if (!clinicInfo || !services || !doctors) {
    return <div className="p-12 text-center text-lg">Loading clinic data...</div>;
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="app min-h-screen bg-gray-50">
          <Helmet>
            <title>{clinicInfo.name} | Best Veterinary Clinic in Pune</title>
            <meta name="description" content={`${clinicInfo.name}: ${clinicInfo.taglines[1]} Located at ${clinicInfo.address}.`} />
            <meta name="keywords" content="veterinary clinic, pune vet, pet care, pet surgery, vaccinations, pet shop, animal hospital" />
          </Helmet>

          <Header 
            clinicName={clinicInfo.name} 
          />
          
          <main>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero clinicName={clinicInfo.name} taglines={clinicInfo.taglines || []} />
                    <Services services={services || []} />
                    <About />
                    <Doctors doctors={doctors || []} />
                    <Shop />
                    <PetHealthBlog />
                    <Booking phone={clinicInfo.contacts?.[0]} />
                    <MapSection address={clinicInfo.address} />
                    <Contact info={clinicInfo} />
                  </>
                } />
              </Routes>
            </Suspense>
          </main>

          <Footer info={clinicInfo} />
          <WhatsAppFloat phone={clinicInfo.contacts[0]} />
          <EmergencyFloat numbers={clinicInfo.contacts} />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
