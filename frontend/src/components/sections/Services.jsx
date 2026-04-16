import React from 'react';
import * as LucideIcons from 'lucide-react';

const Services = ({ services }) => {
  return (
    <section id="services" className="py-12 sm:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em]">Our Expertise</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-tight">Comprehensive Care for Every Pet</h3>
          <p className="text-base sm:text-lg text-gray-600">From routine checkups to advanced surgical procedures, we offer a full spectrum of veterinary services.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
          {services.map((service) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.HeartPulse;
            return (
              <div 
                key={service.id} 
                className="group bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <IconComponent size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
