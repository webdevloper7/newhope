import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Shop from './components/Shop';
import Doctors from './components/Doctors';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import PetHealthBlog from './components/PetHealthBlog';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import EmergencyFloat from './components/EmergencyFloat';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { INITIAL_CLINIC_INFO, INITIAL_SERVICES, INITIAL_DOCTORS } from './utils/mockData';
import { manageData } from './utils/localStorage';

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Dynamic Data
  const [clinicInfo, setClinicInfo] = useState(manageData.clinicInfo.get(INITIAL_CLINIC_INFO));
  const [services, setServices] = useState(manageData.services.getAll(INITIAL_SERVICES));
  const [doctors, setDoctors] = useState(manageData.doctors.getAll(INITIAL_DOCTORS));

  const updateClinicInfo = (newInfo) => {
    setClinicInfo(newInfo);
    manageData.clinicInfo.save(newInfo);
  };

  const updateServices = (newServices) => {
    setServices(newServices);
    manageData.services.save(newServices);
  };

  const updateDoctors = (newDoctors) => {
    setDoctors(newDoctors);
    manageData.doctors.save(newDoctors);
  };

  if (!clinicInfo || !services || !doctors) {
    return <div style={{ padding: '50px', textAlign: 'center' }}>Loading clinic data...</div>;
  }

  return (
    <Router>
      <div className="app">
        <Header 
          clinicName={clinicInfo.name} 
          onAdminClick={() => setIsAdminOpen(true)} 
        />
        <main>
          <Routes>
            <Route path="/" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Hero clinicName={clinicInfo.name} taglines={clinicInfo.taglines || []} />
                <Services services={services || []} />
                <About />
                <Doctors doctors={doctors || []} />
                <Shop />
                <PetHealthBlog />
                <Booking phone={clinicInfo.contacts?.[0]} />
                <MapSection address={clinicInfo.address} />
                <Contact info={clinicInfo} />
              </React.Suspense>
            } />
            <Route path="/admin" element={
              isLoggedIn ? (
                <AdminDashboard 
                  clinicInfo={clinicInfo} 
                  services={services} 
                  doctors={doctors}
                  onUpdateClinic={updateClinicInfo}
                  onUpdateServices={updateServices}
                  onUpdateDoctors={updateDoctors}
                />
              ) : (
                <AdminLogin onLogin={() => setIsLoggedIn(true)} />
              )
            } />
          </Routes>
        </main>
        <Footer info={clinicInfo} />
        <WhatsAppFloat phone={clinicInfo.contacts[0]} />
        <EmergencyFloat numbers={clinicInfo.contacts} />
        
        {/* Hidden SEO-friendly div */}
        <div style={{ display: 'none' }} aria-hidden="true">
          New Hope Veterinary Clinic is dedicated to providing high-quality medical care for pets. Compassionate veterinary care, advanced treatment, and quality pet products — all in one place. Best Veterinary Clinic in Pune.
        </div>

        {isAdminOpen && !isLoggedIn && (
          <AdminLogin 
            onClose={() => setIsAdminOpen(false)} 
            onLogin={() => {
              setIsLoggedIn(true);
              setIsAdminOpen(false);
            }} 
          />
        )}
      </div>
    </Router>
  );
}

export default App;
