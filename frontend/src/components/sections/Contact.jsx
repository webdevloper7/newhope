import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const Contact = ({ info }) => {
  return (
    <section id="contact" className="py-12 sm:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">
          <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em]">Contact Us</h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-tight">Get in touch with our experts.</h3>
              <p className="text-base sm:text-lg text-gray-600">We're here to help you and your pets. Feel free to reach out via any of these channels.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 text-primary rounded-xl sm:rounded-2xl flex items-center justify-center mb-6">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
                {info.contacts.map((c, i) => (
                  <p key={i} className="text-gray-600 font-medium text-sm sm:text-base">+91 {c}</p>
                ))}
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 text-accent rounded-xl sm:rounded-2xl flex items-center justify-center mb-6">
                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600 font-medium leading-relaxed text-xs sm:text-sm">{info.address}</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-bold text-xs mt-2 hover:underline"
                  >
                    Open in Maps <ArrowUpRight size={12}/>
                  </a>
                </div>
              </div>

              <div className="bg-primary p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:col-span-2 flex flex-col sm:flex-row items-center justify-between text-white gap-6 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    <Clock size={28} className="sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">Working Hours</h4>
                    <p className="text-white/80 text-sm sm:text-base">{info.workingHours}</p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60">Status</div>
                  <div className="flex items-center gap-2 justify-center sm:justify-end">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="font-bold text-sm sm:text-base">Open Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="lg:sticky lg:top-32">
              <div className="bg-white p-2 sm:p-4 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl lg:rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <iframe 
                  title="Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0818360215717!2d73.80556637501655!3d18.66035048246138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b77a1a681335%3A0x6a053f3e9a597a7a!2sMithila%20Heights!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-[1.5rem] sm:rounded-[2rem] grayscale-[0.2] contrast-[1.1]"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
