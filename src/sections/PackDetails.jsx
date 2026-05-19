import React from 'react';
import { ArrowLeft, MessageCircle, Gift } from 'lucide-react';

export default function PackDetails({ pack, onBack }) {
  if (!pack) return null;

  const whatsappLink = `https://wa.me/237676871669?text=${encodeURIComponent(
    `Bonjour DailyGlow ! ✨\n\n` +
  `Je souhaite réserver le *${pack.name}* (${pack.price} FCFA).\n\n` +
  `Voici le modèle que je regarde :\n${pack.image}\n\n` +
  `Est-il disponible pour une livraison ?`
  )}`;

  return (
    <div className="min-h-screen bg-[#FFF0F0] pt-24 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="mb-6 p-3 bg-white rounded-full"><ArrowLeft /></button>
        <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-3xl shadow-lg">
          <img src={pack.image} className="w-full h-80 object-cover rounded-2xl" />
          <div>
            <h1 className="text-3xl font-bold mb-2">{pack.name}</h1>
            <p className="text-xl text-[#C5A059] font-bold mb-4">{pack.price} FCFA</p>
            <p className="mb-6">{pack.description}</p>
            <ul className="mb-6 space-y-2">
              {pack.items.map((item, i) => <li key={i} className="flex items-center gap-2">✦ {item}</li>)}
            </ul>
            <a href={whatsappLink} target="_blank" className="bg-green-500 text-white p-4 rounded-xl flex items-center justify-center gap-2 font-bold">
              <MessageCircle /> Réserver sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}