import React, { useState, useEffect } from 'react';
import { MessageCircle, PhoneCall, Calendar, User, Dog, Clipboard, CheckCircle, Bell } from 'lucide-react';
import { manageData } from '../utils/localStorage';

const Booking = ({ phone = "+91 8600584199" }) => {
  const [formData, setFormData] = useState({
    name: '',
    petName: '',
    petType: 'Dog',
    phone: '',
    date: '',
    time: '',
    service: 'General Consultation'
  });
  const [isBooked, setIsBooked] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [checkPhone, setCheckPhone] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const whatsappNumber = phone.replace(/[^0-9]/g, '');
  const whatsappMessage = "Hello 👋 I want to book an appointment at New Hope Veterinary Clinic.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    manageData.appointments.add(formData);
    setIsBooked(true);
    setCheckPhone(formData.phone);
    setTimeout(() => setIsBooked(false), 5000);
    setFormData({
      name: '',
      petName: '',
      petType: 'Dog',
      phone: '',
      date: '',
      time: '',
      service: 'General Consultation'
    });
  };

  const handleCheckStatus = (e) => {
    e.preventDefault();
    const userNotes = manageData.notifications.getUserNotifications(checkPhone);
    setNotifications(userNotes);
    setShowStatus(true);
  };

  return (
    <section id="booking" className="booking-section" style={{ background: 'var(--bg-alt)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary)' }}>Book an Appointment</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
            Schedule your visit online or check your appointment status.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Booking Form */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calendar size={20} color="var(--primary)" /> New Appointment
            </h3>
            
            {isBooked ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--success)' }}>
                <CheckCircle size={60} style={{ marginBottom: '20px' }} />
                <h4>Appointment Scheduled!</h4>
                <p>We've received your request. Check status using your phone number below.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div className="form-group">
                    <label><User size={14} /> Owner Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label><Dog size={14} /> Pet Name</label>
                    <input type="text" name="petName" value={formData.petName} onChange={handleChange} required placeholder="Pet's Name" />
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div className="form-group">
                    <label>Pet Type</label>
                    <select name="petType" value={formData.petType} onChange={handleChange}>
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="10-digit number" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Service Required</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option>General Consultation</option>
                    <option>Vaccination</option>
                    <option>Surgery</option>
                    <option>Pet Grooming</option>
                    <option>Emergency</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div className="form-group">
                    <label>Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                  </div>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  Schedule Appointment
                </button>
              </form>
            )}
          </div>

          {/* Status Check & Quick Links */}
          <div>
            <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: 'var(--shadow)', marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Bell size={20} color="var(--secondary)" /> Check Status
              </h3>
              <form onSubmit={handleCheckStatus} style={{ display: 'flex', gap: '10px' }}>
                <input 
                  type="tel" 
                  placeholder="Enter Phone Number" 
                  value={checkPhone}
                  onChange={(e) => setCheckPhone(e.target.value)}
                  style={{ flex: 1 }}
                  required
                />
                <button type="submit" className="btn-primary" style={{ padding: '0 20px', background: 'var(--secondary)' }}>Check</button>
              </form>

              {showStatus && (
                <div style={{ marginTop: '20px', maxHeight: '300px', overflowY: 'auto' }}>
                  {notifications.length > 0 ? (
                    notifications.map(n => (
                      <div key={n.id} style={{ padding: '15px', borderBottom: '1px solid #eee', background: n.read ? 'transparent' : '#f0f7ff' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '5px' }}>{n.title}</div>
                        <p style={{ fontSize: '0.85rem', margin: 0 }}>{n.message}</p>
                        <div style={{ fontSize: '0.7rem', color: '#999', marginTop: '5px' }}>{new Date(n.date).toLocaleString()}</div>
                      </div>
                    ))
                  ) : (
                    <p style={{ textAlign: 'center', padding: '20px', color: '#999' }}>No updates found for this number.</p>
                  )}
                </div>
              )}
            </div>

            <div style={{ background: 'var(--primary)', padding: '30px', borderRadius: '15px', color: 'white' }}>
              <h3 style={{ marginBottom: '20px', color: 'white' }}>Need Help Instantly?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px' }}>
                  <MessageCircle size={24} color="#25d366" /> 
                  <div>
                    <div style={{ fontWeight: 'bold' }}>WhatsApp Us</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Instant reply during hours</div>
                  </div>
                </a>
                <a href={`tel:${whatsappNumber}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px' }}>
                  <PhoneCall size={24} />
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Call Clinic</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{phone}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
