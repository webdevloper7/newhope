import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle2, PawPrint } from 'lucide-react';
import { manageData } from '../../utils/localStorage';

const Booking = ({ phone }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    petName: '',
    petType: 'Dog',
    service: 'General Consultation',
    date: '',
    time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Appointment Request* \n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Pet:* ${formData.petName} (${formData.petType})\n` +
      `*Service:* ${formData.service}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.time}\n\n` +
      `Please confirm my slot. Thank you!`;

    // WhatsApp Redirect
    const whatsappUrl = `https://wa.me/918600584199?text=${encodeURIComponent(message)}`;
    
    // Save locally for user history if needed
    manageData.appointments.add({
      ...formData,
      id: Date.now(),
      status: 'scheduled',
      createdAt: new Date().toISOString()
    });
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-24 flex items-center justify-center bg-white">
        <div className="text-center space-y-6 animate-fade-in px-6">
          <div className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={64} />
          </div>
          <h3 className="text-4xl font-black text-gray-900 tracking-tight">Booking Received!</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Thank you, <strong>{formData.name}</strong>. We've received your request for <strong>{formData.petName}</strong>. Our team will contact you shortly on <strong>{formData.phone}</strong> to confirm.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-primary rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Info Side */}
          <div className="lg:w-2/5 p-12 lg:p-20 text-white flex flex-col justify-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
              Ready to give your pet the best care?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Book your slot in less than 60 seconds. Our experts are ready to assist you and your furry friend.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold opacity-70 uppercase tracking-widest">Call for Emergency</div>
                  <div className="text-2xl font-black">+91 {phone}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 bg-gray-50 p-8 lg:p-20">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <User size={16} className="text-primary"/> Your Name
                </label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white border border-gray-200 px-5 py-4 rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Phone size={16} className="text-primary"/> Phone Number
                </label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-white border border-gray-200 px-5 py-4 rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  placeholder="10 digit mobile number"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <PawPrint size={16} className="text-primary"/> Pet Name & Type
                </label>
                <div className="flex gap-2">
                  <input 
                    required
                    type="text" 
                    className="flex-1 bg-white border border-gray-200 px-5 py-4 rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    placeholder="Tommy"
                    value={formData.petName}
                    onChange={e => setFormData({...formData, petName: e.target.value})}
                  />
                  <select 
                    className="bg-white border border-gray-200 px-4 py-4 rounded-2xl outline-none"
                    value={formData.petType}
                    onChange={e => setFormData({...formData, petType: e.target.value})}
                  >
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Choose Service</label>
                <select 
                  className="w-full bg-white border border-gray-200 px-5 py-4 rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                >
                  <option>General Consultation</option>
                  <option>Vaccination</option>
                  <option>Surgery</option>
                  <option>Grooming</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Calendar size={16} className="text-primary"/> Preferred Date
                </label>
                <input 
                  required
                  type="date" 
                  className="w-full bg-white border border-gray-200 px-5 py-4 rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Clock size={16} className="text-primary"/> Preferred Time
                </label>
                <input 
                  required
                  type="time" 
                  className="w-full bg-white border border-gray-200 px-5 py-4 rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  value={formData.time}
                  onChange={e => setFormData({...formData, time: e.target.value})}
                />
              </div>
              <button className="md:col-span-2 bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 active:scale-95">
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
