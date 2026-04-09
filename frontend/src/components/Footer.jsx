import React from 'react';
import { Stethoscope, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = ({ info }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Stethoscope size={32} />
              <span>{info.name}</span>
            </div>
            <p style={{ color: '#9ca3af', marginBottom: '20px' }}>
              {info.taglines[1]}
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Facebook size={20} />
              <Twitter size={20} />
              <Instagram size={20} />
              <Linkedin size={20} />
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#doctors">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <ul className="footer-links" style={{ color: '#9ca3af' }}>
              <li>{info.address}</li>
              {info.contacts.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Emergency</h4>
            <p style={{ color: '#9ca3af', marginBottom: '10px' }}>
              Available 24/7 for critical care.
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)' }}>
              {info.contacts[0]}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {info.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
