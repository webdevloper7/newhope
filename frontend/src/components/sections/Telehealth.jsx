import React from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, ShieldCheck, Clock } from 'lucide-react';

const Telehealth = ({ phone }) => {
  const handleTelehealthClick = () => {
    const text = "Hi, I'd like to book a Video Consultation for my pet. Please let me know the available time slots.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const benefits = [
    { icon: <Clock size={20} />, text: "Available 8 AM - 8 PM" },
    { icon: <ShieldCheck size={20} />, text: "Secure & Confidential" },
    { icon: <Video size={20} />, text: "HD Video Support" }
  ];

  return (
    <section id="telehealth" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              NEW: VIRTUAL CARE 2026
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Virtual Care from the <br/>
              <span className="text-blue-600">Comfort of Your Home</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Don't stress your pet with travel. Get professional veterinary advice 
              instantly through our high-speed video consultation service.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                  <div className="text-blue-600">{benefit.icon}</div>
                  {benefit.text}
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTelehealthClick}
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-blue-200 flex items-center gap-4 transition-all hover:bg-blue-700"
            >
              <Video size={28} />
              Book Virtual Visit
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173bdd9962a?auto=format&fit=crop&q=80&w=600" 
                alt="Telehealth consultation" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <Video size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-80 uppercase tracking-wider">Live Consult</p>
                    <p className="text-lg font-bold">Dr. Neha D. Rathod</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Abstract blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Telehealth;
