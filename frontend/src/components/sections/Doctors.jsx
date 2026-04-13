import React from 'react';
import { Mail, Linkedin, Award, GraduationCap } from 'lucide-react';

const Doctors = ({ doctors }) => {
  return (
    <section id="doctors" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em]">Medical Team</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-[1.1]">
              Guided by Compassion, Driven by Excellence.
            </h3>
          </div>
          <p className="text-gray-600 max-w-sm lg:mb-2 italic border-l-2 border-gray-200 pl-4 text-sm">
            Meet our team of experienced veterinarians dedicated to providing the highest quality care for your companions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="group relative">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400&h=500";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                    <GraduationCap size={16}/> {doctor.specialty}
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight">{doctor.name}</h4>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    <p className="text-sm text-gray-300 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      {doctor.description}
                    </p>
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      <button className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"><Mail size={18}/></button>
                      <button className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"><Linkedin size={18}/></button>
                      <button className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"><Award size={18}/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
