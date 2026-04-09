import React from 'react';
import { Shield, Activity, Stethoscope, HeartPulse, Sun, Calendar, Scissors, Apple, ShoppingBag, ChevronRight } from 'lucide-react';

const icons = { Shield, Activity, Stethoscope, HeartPulse, Sun, Calendar, Scissors, Apple, ShoppingBag };

const Services = ({ services }) => {
  // Highlight top 3 services
  const featured = services.slice(0, 3);
  const remaining = services.slice(3);

  return (
    <section id="services" className="services" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-title">
          <h2>Service Showcase</h2>
          <p>Comprehensive care tailored to your pet's unique needs with modern technology.</p>
        </div>

        {/* Featured Showcase */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {featured.map((service) => {
            const Icon = icons[service.icon] || Activity;
            return (
              <div key={service.id} className="service-card featured-service" style={{ 
                border: '1px solid #eee', 
                padding: '40px', 
                borderRadius: '20px', 
                textAlign: 'center', 
                transition: 'all 0.3s ease',
                background: 'var(--bg-alt)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'var(--primary)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 25px',
                  boxShadow: '0 10px 20px rgba(0, 102, 204, 0.2)'
                }}>
                  <Icon size={40} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '20px' }}>{service.description}</p>
                <a href="#booking" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  Book Now <ChevronRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

        {/* More Services Grid */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>Other Specialized Care</h3>
        </div>
        
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
          {remaining.map((service) => {
            const Icon = icons[service.icon] || Activity;
            return (
              <div key={service.id} className="service-card" style={{ padding: '25px', background: 'white', border: '1px solid #f0f0f0' }}>
                <div className="service-icon" style={{ background: '#f0f7ff', color: 'var(--primary)' }}>
                  <Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .featured-service:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow);
          border-color: var(--primary) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
