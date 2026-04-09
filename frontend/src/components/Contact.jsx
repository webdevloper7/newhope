import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = ({ info }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with us for any inquiries or to book an appointment.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div>
            <div style={{ marginBottom: '30px', display: 'flex', gap: '20px' }}>
              <div className="service-icon" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Location</h4>
                <p style={{ color: 'var(--text-light)' }}>{info.address}</p>
              </div>
            </div>

            <div style={{ marginBottom: '30px', display: 'flex', gap: '20px' }}>
              <div className="service-icon" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Phone</h4>
                {info.contacts.map((c, i) => (
                   <p key={i} style={{ color: 'var(--text-light)' }}>{c}</p>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '30px', display: 'flex', gap: '20px' }}>
              <div className="service-icon" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Email</h4>
                <p style={{ color: 'var(--text-light)' }}>{info.email}</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div className="service-icon" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                <Clock size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Opening Hours</h4>
                <p style={{ color: 'var(--text-light)' }}>{info.workingHours}</p>
              </div>
            </div>
          </div>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', minHeight: '400px', background: '#e5e7eb', position: 'relative' }}>
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              title="Clinic Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.8115%2C18.6675%2C73.8215%2C18.6775&amp;layer=mapnik&amp;marker=18.6725%2C73.8165" 
              style={{ border: 0 }}
            ></iframe>
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'white', padding: '5px 10px', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)', fontSize: '0.8rem' }}>
               <a href="https://www.openstreetmap.org/?mlat=18.6725&amp;mlon=73.8165#map=17/18.6725/73.8165" target="_blank" rel="noopener noreferrer">View Larger Map</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
