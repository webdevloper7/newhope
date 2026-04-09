import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Plus, Fingerprint, Activity } from 'lucide-react';
import { manageData } from '../utils/localStorage';

const HealthPass = () => {
  const [records, setRecords] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newPet, setNewPet] = useState({ name: '', type: 'Dog', lastVaccine: '' });

  useEffect(() => {
    setRecords(manageData.healthRecords.get());
  }, []);

  const handleAddPet = (e) => {
    e.preventDefault();
    const updated = manageData.healthRecords.add(newPet);
    setRecords(updated);
    setShowForm(false);
    setNewPet({ name: '', type: 'Dog', lastVaccine: '' });
  };

  return (
    <section id="health-pass" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Digital Wellness Pass</h2>
            <p className="text-slate-600 text-lg">Secure, accessible, and paperless vaccination records for your pets.</p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-125 rotate-12">
              <Fingerprint size={240} className="text-blue-400" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-1/3 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">PetPass™</h3>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm font-medium">
                  Verified digital standard for pet health. Accepted by airlines and premium boarding facilities in Pune.
                </p>
                <button 
                  onClick={() => setShowForm(!showForm)}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all haptic-btn text-white"
                >
                  <Plus size={16} />
                  Register New Pet
                </button>
              </div>

              <div className="lg:w-2/3 space-y-4">
                {records.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-800 rounded-2xl p-12 text-slate-600 bg-slate-900/50">
                    <Activity size={48} className="mb-4 opacity-10" />
                    <p className="text-center font-bold uppercase tracking-widest text-[10px]">Secure Vault Empty</p>
                  </div>
                ) : (
                  records.map(record => (
                    <motion.div 
                      key={record.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-center justify-between group hover:bg-white/[0.08] transition-all"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                          {record.name[0]}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1 tracking-tight">{record.name}</h4>
                          <div className="flex gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            <span className="text-blue-400">{record.type}</span>
                            <span>•</span>
                            <span>Last Vax: {record.lastVaccine || 'None'}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-green-400 font-bold text-[10px] uppercase tracking-widest bg-green-400/10 px-4 py-2 rounded-full border border-green-400/20">
                        <CheckCircle size={14} />
                        VERIFIED
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>

          {showForm && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-slate-50 p-8 rounded-3xl border border-slate-200"
            >
              <form onSubmit={handleAddPet} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Pet Name</label>
                  <input 
                    type="text" 
                    required
                    value={newPet.name}
                    onChange={e => setNewPet({...newPet, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="e.g. Bruno"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Pet Type</label>
                  <select 
                    value={newPet.type}
                    onChange={e => setNewPet({...newPet, type: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Bird</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                    Save Record
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HealthPass;
