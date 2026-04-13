import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const MapSection = ({ address = "New Hope Veterinary Clinic, Mithila Heights, Chikhali, Pune" }) => {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section id="location" style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <div className="section-title">
          <h2>Find Us Here</h2>
          <p>Located at the heart of Chikhali for your convenience.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '400px', boxShadow: 'var(--shadow)', border: '1px solid #eee' }}>
            <iframe 
              src={mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>
          
          <div style={{ padding: '20px' }}>
            <div style={{ background: 'var(--bg-alt)', padding: '30px', borderRadius: '15px', borderLeft: '5px solid var(--primary)' }}>
              <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin color="var(--primary)" /> Clinic Address
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '25px' }}>
                <strong>New Hope Veterinary Clinic</strong><br />
                Mithila Heights, SN 162/2, More Vasti,<br />
                Near Spine Road, Chikhali,<br />
                Pune, Maharashtra 411062
              </p>
              
              <a 
                href={directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
              >
                <Navigation size={18} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
