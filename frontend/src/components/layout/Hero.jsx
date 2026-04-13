import React from 'react';
import { ArrowRight, ShieldCheck, HeartPulse, Clock } from 'lucide-react';

const Hero = ({ clinicName, taglines }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 lg:pt-32">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-bold text-sm tracking-wide">
            <ShieldCheck size={18}/> Trusted by 10,000+ Pet Owners in Pune
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
            {taglines[0] || "Because Every Pet Deserves New Hope."}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl border-l-4 border-primary pl-6">
            {taglines[1] || "Compassionate veterinary care, advanced treatment, and quality pet products — all in one place."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="bg-primary text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
              Book Appointment <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-5 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-3">
              Explore Services
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center text-success">
                <HeartPulse size={20}/>
              </div>
              <span className="text-sm font-bold text-gray-700 leading-tight">Expert<br/>Surgeons</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                <Clock size={20}/>
              </div>
              <span className="text-sm font-bold text-gray-700 leading-tight">Emergency<br/>Response</span>
            </div>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 aspect-square lg:aspect-auto">
            <img 
              src="/hero-bg.png" 
              alt="Happy Pet" 
              className="w-full h-full object-cover min-h-[500px]"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="absolute top-12 -right-6 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-gray-50 hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black">4.9</div>
              <div>
                <div className="flex text-accent">★★★★★</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
