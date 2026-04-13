import React from 'react';
import { BookOpen, Calendar, ChevronRight } from 'lucide-react';
import { PET_HEALTH_TIPS } from '../../utils/mockData';

const PetHealthBlog = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em]">Pet Wellness</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">Expert Advice for Pet Parents</h3>
          <p className="text-lg text-gray-600">Discover essential tips and guides to ensure your furry companions live their healthiest, happiest lives.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PET_HEALTH_TIPS.map((tip) => (
            <div key={tip.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="p-8 lg:p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                  <BookOpen size={16} /> Routine Care
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                  {tip.content}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                    <Calendar size={14} /> New Hope Vet
                  </div>
                  <a href="#booking" className="text-primary font-black text-sm flex items-center gap-1 group/btn">
                    Read More <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetHealthBlog;
