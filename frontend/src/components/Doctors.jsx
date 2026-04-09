import React from 'react';

const Doctors = ({ doctors }) => {
  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Doctors</h2>
          <p>Expert care from passionate veterinary professionals dedicated to your pet's health.</p>
        </div>
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-image-wrapper">
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              </div>
              <div className="doctor-info">
                <div className="doctor-specialty">{doctor.specialty}</div>
                <h3>{doctor.name}</h3>
                <p>{doctor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
