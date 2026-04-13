import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, AlertCircle, Calendar } from 'lucide-react';

const TriageBot = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 'eating', text: 'Is your pet eating and drinking normally?', options: ['Yes', 'No'] },
    { id: 'lethargy', text: 'Is your pet showing unusual lethargy or weakness?', options: ['Yes', 'No'] },
    { id: 'breathing', text: 'Is your pet having any difficulty breathing?', options: ['Yes', 'No'] }
  ];

  const handleAnswer = (answer) => {
    const currentQ = questions[step];
    setAnswers({ ...answers, [currentQ.id]: answer });
    setStep(step + 1);
  };

  const getResult = () => {
    if (answers.eating === 'No' || answers.lethargy === 'Yes' || answers.breathing === 'Yes') {
      return {
        type: 'emergency',
        title: 'Call Emergency Immediately!',
        text: 'Your pet shows signs that require urgent attention. Please contact us or visit the clinic right away.',
        icon: <AlertCircle className="text-red-500" size={48} />
      };
    }
    return {
      type: 'routine',
      title: 'Book a Routine Visit',
      text: 'Based on your answers, your pet seems stable, but a checkup is always recommended for peace of mind.',
      icon: <Calendar className="text-blue-500" size={48} />
    };
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-white/20"
        >
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <MessageSquare size={80} />
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Activity size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">AI Triage</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">System Analysis</p>
              </div>
            </div>
            <button onClick={onClose} className="hover:bg-white/10 p-2 rounded-lg transition-colors relative z-10">
              <X size={20} />
            </button>
          </div>

          <div className="p-8 min-height-[300px] flex flex-col justify-center">
            {step < questions.length ? (
              <div className="space-y-6">
                <p className="text-xl font-bold text-slate-900 leading-tight tracking-tight">{questions[step].text}</p>
                <div className="grid grid-cols-2 gap-3">
                  {questions[step].options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      className="py-4 px-6 rounded-xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50 font-bold text-base transition-all haptic-btn"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="flex justify-center scale-125 mb-2">{getResult().icon}</div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">{getResult().title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{getResult().text}</p>
                </div>
                <button 
                  onClick={onClose}
                  className={`w-full py-4 rounded-xl text-white font-bold text-base transition-all haptic-btn ${
                    getResult().type === 'emergency' ? 'bg-red-600 shadow-lg' : 'bg-blue-600 shadow-lg'
                  }`}
                >
                  {getResult().type === 'emergency' ? 'Call Specialist' : 'Understood'}
                </button>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-[9px] font-bold uppercase tracking-widest text-slate-400">
            NHV Secure Diagnostics
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TriageBot;
