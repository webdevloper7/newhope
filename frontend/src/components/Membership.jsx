import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Check, Zap, Heart, Star } from 'lucide-react';

const Membership = () => {
  const features = [
    "Unlimited General Checkups",
    "All Core Vaccinations Included",
    "20% Discount on Grooming",
    "Priority Emergency Booking",
    "Free Monthly Nutritional Guide",
    "24/7 Telehealth Access"
  ];

  return (
    <section id="membership" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-amber-400 font-bold mb-6">
              <Star size={20} fill="currentColor" />
              <span className="uppercase tracking-widest text-sm">Exclusive Program</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              The Gold Standard <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                of Pet Wellness
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Join the New Hope Gold Membership and give your furry family member 
              the comprehensive care they deserve for one simple monthly payment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full max-w-md"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl relative border border-slate-100">
              <div className="absolute top-0 right-8 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl rotate-12 flex items-center justify-center shadow-lg text-white">
                  <Crown size={32} fill="currentColor" />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-1">Gold Plan</h3>
                <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Premium Wellness Access</p>
              </div>

              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-extrabold text-slate-900 tracking-tighter">₹999</span>
                <span className="text-slate-400 font-bold text-lg">/mo</span>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-between py-4 border-b border-slate-50">
                  <span className="text-slate-600 font-bold flex items-center gap-3 text-xs uppercase tracking-wide">
                    <Zap size={16} className="text-amber-500" /> Instant Activation
                  </span>
                  <span className="text-green-600 font-bold text-xs uppercase">Free</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-slate-50">
                  <span className="text-slate-600 font-bold flex items-center gap-3 text-xs uppercase tracking-wide">
                    <Heart size={16} className="text-red-500" /> Multi-Pet Discount
                  </span>
                  <span className="text-slate-900 font-bold text-xs uppercase">-15%</span>
                </div>
              </div>

              <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-blue-600 transition-all active:scale-95 haptic-btn">
                Start Membership
              </button>
              
              <p className="text-center mt-6 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                Secure Payment • Cancel Anytime
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
