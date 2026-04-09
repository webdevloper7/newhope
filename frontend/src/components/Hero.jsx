import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ clinicName, taglines }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p style={{ fontWeight: '700', color: 'var(--white)', background: 'var(--secondary)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', marginBottom: '20px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Welcome to New Hope
          </p>
          <h1 style={{ marginBottom: '10px' }}>{clinicName}</h1>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', opacity: '0.9' }}>
            {taglines[0]}
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px' }}>
            {taglines[1]}
          </p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
            <button className="btn-primary" onClick={() => window.location.href='#booking'} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 30px', fontSize: '1.1rem' }}>
              Book Now <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: '2px solid var(--white)', padding: '15px 30px', borderRadius: 'var(--radius)', fontWeight: '700', backdropFilter: 'blur(5px)', fontSize: '1.1rem' }} onClick={() => window.location.href='#services'}>
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
