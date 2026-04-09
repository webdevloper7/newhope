import React from 'react';
import { BookOpen, Calendar, Clock, ChevronRight } from 'lucide-react';
import { PET_HEALTH_TIPS } from '../utils/mockData';

const PetHealthBlog = () => {
  return (
    <section id="blog" style={{ padding: '80px 0', background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Pet Health Tips & Blog</h2>
          <p>Expert advice to help you give your pet a long, happy, and healthy life.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {PET_HEALTH_TIPS.map((tip) => (
            <div key={tip.id} style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease' }}>
              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '15px' }}>
                  <BookOpen size={16} /> Routine Care
                </div>
                <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>{tip.title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.7', marginBottom: '20px', fontSize: '1rem' }}>
                  {tip.content}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#999', fontSize: '0.8rem' }}>
                    <Calendar size={14} /> New Hope Vet
                  </div>
                  <a href="#booking" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                    Read More <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '50px', background: 'var(--primary)', borderRadius: '20px', padding: '40px', color: 'white', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
          <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '1.8rem' }}>Subscribe for Pet Wellness Tips</h3>
          <p style={{ marginBottom: '25px', opacity: 0.9 }}>Get monthly health updates and clinic reminders directly to your inbox or mobile.</p>
          <form style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input 
              type="tel" 
              placeholder="Enter Mobile Number" 
              style={{ padding: '15px 20px', borderRadius: '10px', border: 'none', flex: 1, minWidth: '250px' }} 
            />
            <button className="btn-primary" style={{ background: 'var(--secondary)', border: 'none', padding: '15px 30px' }}>Notify Me</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PetHealthBlog;
