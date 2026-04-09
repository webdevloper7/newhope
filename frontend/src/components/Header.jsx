import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, User } from 'lucide-react';

const Header = ({ clinicName, onAdminClick }) => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <Stethoscope size={32} />
          <span>{clinicName || "New Hope Vet"}</span>
        </Link>
        <nav className="nav">
          <a href="#services" className="nav-link">Services</a>
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#doctors" className="nav-link">Doctors</a>
          <a href="#booking" className="nav-link">Book Now</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button className="btn-primary" onClick={() => window.location.href='#booking'}>
            Appointment
          </button>
          <button 
            onClick={onAdminClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)' }}
            title="Admin Login"
          >
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
