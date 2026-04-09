import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = ({ phone }) => {
  const whatsappNumber = phone?.replace(/[^0-9]/g, '') || '918600584199'; 
  const message = "Hello 👋 Welcome to New Hope Veterinary Clinic. Please tell us how we can help you today: 1️⃣ Appointment Booking, 2️⃣ Emergency Help, 3️⃣ Vaccination Inquiry, 4️⃣ Grooming Service, 5️⃣ Pet Products Information";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppFloat;
