import React from 'react';
import { CheckCircle2, Award, Heart, ShieldCheck } from 'lucide-react';

const About = () => {
  const benefits = [
    { title: "Advanced Diagnostics", icon: <ShieldCheck size={20} className="text-primary"/> },
    { title: "Surgical Excellence", icon: <Award size={20} className="text-accent"/> },
    { title: "Compassionate Care", icon: <Heart size={20} className="text-error"/> },
    { title: "24/7 Support", icon: <CheckCircle2 size={20} className="text-success"/> },
  ];

  return (
    <section id="about" className="py-12 sm:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative w-full">
            <div className="relative z-10 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=800" 
                alt="Vet Clinic" 
                className="w-full h-full object-cover min-h-[300px] sm:min-h-[500px]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-primary text-white p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl z-20 hidden xs:block">
              <div className="text-3xl sm:text-5xl font-black mb-1">15+</div>
              <div className="text-[10px] sm:text-sm font-bold uppercase tracking-widest opacity-80 leading-tight">Years of<br/>Experience</div>
            </div>
            <div className="absolute -top-10 -left-10 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em]">Our Story</h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-tight sm:leading-[1.1]">
                Leading the way in medical excellence.
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                New Hope Veterinary Clinic is dedicated to providing high-quality medical care for pets. Our mission is to enhance the health and well-being of animals through compassionate care and advanced veterinary medicine.
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 pt-4 text-left">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    {b.icon}
                  </div>
                  <span className="font-bold text-gray-800 text-sm sm:text-base">{b.title}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex -space-x-3 sm:-space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-xs sm:text-sm">
                <div className="font-black text-gray-900">Rated 4.9/5 by our clients</div>
                <div className="text-gray-500 font-medium">Join 5,000+ happy pet parents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
