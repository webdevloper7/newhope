import React from 'react';
import { CheckCircle } from 'lucide-react';
import { INITIAL_WHY_CHOOSE } from '../utils/mockData';

const About = () => {
  return (
    <section id="about" className="about" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <img 
              src="/med1.jpeg" 
              alt="About Us" 
              style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', height: '400px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '20px' }}>
              About New Hope Veterinary Clinic
            </h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '30px', fontSize: '1.1rem' }}>
              New Hope Veterinary Clinic is dedicated to providing high-quality medical care for pets. 
              Compassionate veterinary care, advanced treatment, and quality pet products — all in one place. 
              We believe pets are family and deserve the best possible care to live long, healthy, and happy lives.
            </p>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>Why Choose Us?</h3>
            <ul style={{ display: 'grid', gap: '15px' }}>
              {INITIAL_WHY_CHOOSE.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500' }}>
                  <CheckCircle color="var(--secondary)" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
