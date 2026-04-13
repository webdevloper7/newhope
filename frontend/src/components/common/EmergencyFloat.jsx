import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';

const EmergencyFloat = ({ numbers }) => {
  const primaryNumber = numbers?.[0] || '8600584199';

  return (
    <a 
      href={`tel:${primaryNumber}`} 
      className="emergency-float group flex items-center gap-3 px-6 py-4 animate-pulse-slow hover:animate-none"
      aria-label="Call for Emergency"
    >
      <div className="bg-white/20 p-2 rounded-xl group-hover:scale-110 transition-transform">
        <AlertCircle size={24} className="text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 leading-none">Emergency</span>
        <span className="text-lg font-black leading-tight tracking-tighter flex items-center gap-1">
          <Phone size={16} fill="white"/> +91 {primaryNumber}
        </span>
      </div>
    </a>
  );
};

export default EmergencyFloat;
