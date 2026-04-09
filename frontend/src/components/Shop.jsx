import React from 'react';
import { Utensils, Stethoscope, Pill, Sparkles, Dog, Cat } from 'lucide-react';
import { INITIAL_CATEGORIES } from '../utils/mockData';

const iconMap = {
  Utensils,
  Stethoscope,
  Pill,
  Sparkles,
  Dog,
  Cat
};

const Shop = () => {
  return (
    <section id="shop" className="shop" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Pet Shop & Accessories</h2>
          <p>Find everything your pet needs for a healthy and happy life.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          {INITIAL_CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.icon];
            return (
              <div key={cat.id} className="service-card" style={{ textAlign: 'center', padding: '30px' }}>
                <div className="service-icon" style={{ margin: '0 auto 20px', width: '70px', height: '70px' }}>
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0' }}>{cat.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
