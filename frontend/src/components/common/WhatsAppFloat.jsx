import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = ({ phone }) => {
  const whatsappNumber = phone?.replace(/[^0-9]/g, '') || '918600584199'; 
  
  const professionalMessage = `Hello New Hope Veterinary Clinic! 👋

I'm interested in your services. Please help me with:
1️⃣ Booking an Appointment 📅
2️⃣ Emergency Medical Support 🚑
3️⃣ Vaccination & Wellness Inquiry 💉
4️⃣ Pet Grooming Services ✂️
5️⃣ Surgery & Advanced Treatment 🏥
6️⃣ Pet Shop Products & Pharmacy 💊

Please let me know how to proceed! Thank you.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(professionalMessage)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float group flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute -left-32 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-gray-100">
        Chat with us!
      </div>
      <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
    </a>
  );
};

export default WhatsAppFloat;
