import React from 'react';
import { MessageCircle, Star, ArrowRight, Tag } from 'lucide-react';
import { formatWhatsAppNumber } from '../../utils/phoneUtils';

const Shop = () => {
  const phone = "8600584199";
  const products = [
    { 
      id: 1, 
      name: "Premium Dog Food", 
      price: "₹1,200", 
      tag: "Best Seller", 
      image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 2, 
      name: "Cat Wellness Kit", 
      price: "₹850", 
      tag: "New", 
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 3, 
      name: "Organic Pet Shampoo", 
      price: "₹450", 
      tag: "Eco-Friendly", 
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 4, 
      name: "Advanced Joint Care", 
      price: "₹2,100", 
      tag: "Medical", 
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=400" 
    },
  ];

  const handleInquiry = (product) => {
    const message = `Hello New Hope Vet! I am interested in buying: *${product.name}* (${product.price}). Is it available?`;
    const whatsappNumber = formatWhatsAppNumber(phone);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="shop" className="py-12 sm:py-24 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 sm:mb-16 gap-6 sm:gap-8 text-center lg:text-left">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em]">Our Pet Store</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
              Available Products<br/>to Buy.
            </h3>
          </div>
          <a 
            href={`https://wa.me/${formatWhatsAppNumber(phone)}?text=${encodeURIComponent("Hello! I'd like to see more products available at your clinic.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-4 rounded-xl sm:rounded-2xl font-black hover:bg-primary hover:text-white transition-all group text-sm sm:text-base"
          >
            Check More on WhatsApp <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((p) => (
            <div key={p.id} className="group bg-gray-800/50 rounded-[1.5rem] sm:rounded-[2rem] p-4 border border-white/5 hover:border-primary/30 transition-all duration-500">
              <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-6">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400";
                  }}
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-white text-[8px] sm:text-[10px] font-black uppercase tracking-widest px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Tag size={10}/> {p.tag}
                </div>
              </div>
              <div className="px-2 space-y-3">
                <div className="flex text-accent text-[10px] sm:text-xs">
                  <Star size={10} className="sm:w-3 sm:h-3" fill="currentColor"/>
                  <Star size={10} className="sm:w-3 sm:h-3" fill="currentColor"/>
                  <Star size={10} className="sm:w-3 sm:h-3" fill="currentColor"/>
                  <Star size={10} className="sm:w-3 sm:h-3" fill="currentColor"/>
                  <Star size={10} className="sm:w-3 sm:h-3" fill="currentColor"/>
                </div>
                <h4 className="text-lg sm:text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{p.name}</h4>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl sm:text-2xl font-black text-primary">{p.price}</span>
                  <button 
                    onClick={() => handleInquiry(p)}
                    className="p-2.5 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl hover:bg-success transition-colors flex items-center gap-2 group/btn"
                    title="Inquiry on WhatsApp"
                  >
                    <MessageCircle size={18} className="sm:w-5 sm:h-5 text-success group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
