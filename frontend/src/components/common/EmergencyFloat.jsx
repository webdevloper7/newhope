import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import { formatTelLink } from '../../utils/phoneUtils';

const EmergencyFloat = ({ numbers }) => {
  const primaryNumber = numbers?.[0] || '8600584199';
  const telLink = formatTelLink(primaryNumber);

  return (
    <a 
      href={telLink} 
      className="emergency-float group flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 animate-pulse-slow hover:animate-none"
      aria-label="Call for Emergency"
    >
      <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform">
        <AlertCircle size={20} className="text-white sm:w-6 sm:h-6" />
      </div>
      <div className="flex flex-col">
        <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] opacity-80 leading-none">Emergency</span>
        <span className="text-sm sm:text-lg font-black leading-tight tracking-tighter flex items-center gap-1">
          <Phone size={14} className="sm:w-4 sm:h-4" fill="white"/> {primaryNumber}
        </span>
      </div>
    </a>
  );
};

export default EmergencyFloat;
