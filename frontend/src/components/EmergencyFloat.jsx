import React, { useState } from 'react';
import { Phone, AlertCircle, X } from 'lucide-react';

const EmergencyFloat = ({ numbers = ["8600584199", "8055581246"] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '100px', right: '20px', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
      {isOpen && (
        <div style={{ background: '#d32f2f', color: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', width: '280px', animation: 'slideUp 0.3s ease-out' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
              <AlertCircle size={20} /> Emergency Dial
            </h4>
            <X size={20} style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {numbers.map((num, i) => (
              <a 
                key={i}
                href={`tel:${num}`} 
                style={{ background: 'white', color: '#d32f2f', textDecoration: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
              >
                <Phone size={18} /> Call {num}
              </a>
            ))}
          </div>
          <p style={{ fontSize: '0.75rem', margin: '10px 0 0', opacity: 0.9, textAlign: 'center' }}>Available for critical cases only.</p>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="emergency-pulse"
        style={{ 
          background: '#d32f2f', 
          color: 'white', 
          width: '65px', 
          height: '65px', 
          borderRadius: '50%', 
          border: 'none', 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(211, 47, 47, 0.4)',
          position: 'relative'
        }}
        title="Emergency Quick-Dial"
      >
        <Phone size={30} fill="white" />
        <span style={{ 
          position: 'absolute', 
          top: '-5px', 
          right: '-5px', 
          background: 'white', 
          color: '#d32f2f', 
          fontSize: '0.6rem', 
          fontWeight: 'bold', 
          padding: '2px 6px', 
          borderRadius: '10px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}>SOS</span>
      </button>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .emergency-pulse {
          animation: pulse-red 2s infinite;
        }
        @keyframes pulse-red {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(211, 47, 47, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(211, 47, 47, 0); }
        }
      `}</style>
    </div>
  );
};

export default EmergencyFloat;
