import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = ({ info }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <Heart size={24} fill="white" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                NEW <span className="text-primary">HOPE</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed font-medium">
              Because Every Pet Deserves New Hope. Providing high-quality medical care and compassionate service for over 15 years.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <button key={i} className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-primary hover:text-white transition-all">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-black tracking-tight text-gray-900">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Our Team', 'Shop', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-500 font-bold hover:text-primary transition-colors flex items-center gap-1 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-black tracking-tight text-gray-900">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-primary font-bold">A.</div>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{info.address}</p>
              </li>
              <li className="flex gap-4">
                <div className="text-primary font-bold">P.</div>
                <p className="text-gray-500 font-medium text-sm">+91 {info.contacts[0]}</p>
              </li>
              <li className="flex gap-4">
                <div className="text-primary font-bold">E.</div>
                <p className="text-gray-500 font-medium text-sm break-all">{info.email}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-gray-400">
          <p>© {currentYear} New Hope Veterinary Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
