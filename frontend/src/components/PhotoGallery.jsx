import React from 'react';

const PhotoGallery = () => {
  const photos = [
    { id: 1, src: "/med1.jpeg", alt: "Vet Care 1" },
    { id: 2, src: "/med2.jpeg", alt: "Vet Care 2" },
    { id: 3, src: "/med3.jpeg", alt: "Vet Care 3" },
    { id: 4, src: "/med4.jpeg", alt: "Vet Care 4" }
  ];

  const fallback = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800";

  return (
    <section id="gallery" className="gallery" style={{ padding: '80px 0', background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Our Clinic in Action</h2>
          <p>Peek into our compassionate care and modern facilities.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {photos.map((photo) => (
            <div key={photo.id} style={{ borderRadius: 'var(--radius)', overflow: 'hidden', height: '300px', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s' }} className="gallery-item">
              <img 
                src={photo.src} 
                alt={photo.alt} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = fallback;
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
