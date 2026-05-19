import React from 'react';
import { ArrowLeft, MessageCircle, CheckCircle, Gift } from 'lucide-react';

export default function PackDetails({ pack, onBack }) {
  
  const generateWhatsAppPackLink = () => {
    const phoneNumber = "237676871669";
    const message = `Bonjour DailyGlow ! ✨\n\nJe suis très intéressé(e) par le *${pack.name}* (${pack.price} FCFA) vu sur le site.\n\nContenu souhaité :\n${pack.items.map(i => `- ${i.label}`).join('\n')}\n\nEst-il possible de le réserver pour une livraison ?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#FFF0F0] pt-24 px-6 pb-20 text-[#2B0F1A]">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="mb-6 p-3 bg-white text-[#2B0F1A] rounded-full shadow-sm hover:bg-[#2B0F1A] hover:text-[#C5A059] transition-all">
          <ArrowLeft size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-[3rem] overflow-hidden shadow-xl border border-[#FCD7D7]/50">
          {/* Image du Pack */}
          <div className="relative h-[400px] md:h-full">
            <img src={pack.image} alt={pack.name} className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 bg-[#2B0F1A] text-[#C5A059] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              Édition Limitée
            </div>
          </div>

          {/* Détails du Contenu */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#C5A059] mb-4">
                <Gift size={20} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Package Spécial</span>
              </div>
              <h1 className="font-serif text-4xl font-bold mb-2">{pack.name}</h1>
              <p className="text-2xl font-bold text-[#C5A059] mb-6">{pack.price} FCFA</p>
              
              <p className="text-gray-600 text-sm mb-8 leading-relaxed italic">
                "{pack.description}"
              </p>

              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <CheckCircle size={14} className="text-[#2B0F1A]" /> Ce que contient ce coffret :
              </h3>
              
              <ul className="grid grid-cols-1 gap-3 mb-10">
                {pack.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm bg-[#FFF0F0]/50 p-3 rounded-xl border border-[#FCD7D7]/30">
                    <span className="text-[#C5A059]">✦</span>
                    <span className="font-medium">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={generateWhatsAppPackLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-lg"
            >
              <MessageCircle size={20} />
              Réserver ce Pack via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}