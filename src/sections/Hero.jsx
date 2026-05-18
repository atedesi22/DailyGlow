import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero({ title, subtitle, highlightedText }) {
  return (
    <div className="relative bg-gradient-to-b from-[#FCD7D7]/40 to-transparent pt-32 pb-12 px-6 text-center overflow-hidden">
      {/* Cercle flouté à l'arrière pour l'effet de brillance prestige */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C5A059]/10 rounded-full filter blur-3xl -z-10" />
      
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#FCD7D7] text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-4 shadow-sm">
          <Sparkles size={10} /> Artisan Joaillier
        </div>
        
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#2B0F1A] mb-4 leading-tight">
          {title} <span className="text-[#C5A059] italic font-normal">{highlightedText}</span>
        </h2>
        
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium max-w-lg mx-auto">
          {subtitle}
        </p>
        <div className="h-0.5 w-12 bg-[#C5A059] mx-auto mt-4"></div>
      </div>
    </div>
  );
}