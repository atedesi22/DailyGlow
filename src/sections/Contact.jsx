import React from 'react';
import { Phone, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFF0F0] pt-28 px-6 pb-20 text-[#2B0F1A]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Infos du flyer */}
        <div className="flex flex-col justify-between p-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              <Sparkles size={12} /> Service Client Clé
            </div>
            <h1 className="font-serif text-4xl font-bold mb-4">Prendre Contact</h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Une question sur nos bijoux ou sur la personnalisation de vos colis ? Notre équipe à Douala est à votre disposition.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl text-[#C5A059] border border-[#FCD7D7] shadow-sm"><MapPin size={18} /></div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400">Showroom & Retrait</h4>
                <p className="text-sm font-medium">Douala, Cameroun</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl text-[#C5A059] border border-[#FCD7D7] shadow-sm"><Clock size={18} /></div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400">Campagne Fête des mères</h4>
                <p className="text-sm font-medium">Clôture ferme des commandes :</p>
                <p className="text-xs text-[#C5A059] font-bold">Vendredi 29 Mai 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl text-[#C5A059] border border-[#FCD7D7] shadow-sm"><Phone size={18} /></div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400">Canaux Directs</h4>
                <p className="text-xs text-gray-600">WhatsApp: +237 676 871 669</p>
                <p className="text-xs text-gray-600">Instagram: @daily_glow_237</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire stylisé */}
        <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-[#FCD7D7]/60 shadow-md">
          <h3 className="font-serif text-lg font-bold mb-6">Écrivez-nous</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold mb-2 text-gray-400">Nom complet</label>
              <input type="text" className="w-full p-3 rounded-xl bg-[#FFF0F0]/50 border border-[#FCD7D7] text-sm focus:outline-none focus:border-[#C5A059]" placeholder="Ex: Paul Emmanuel" />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold mb-2 text-gray-400">Numéro WhatsApp</label>
              <input type="tel" className="w-full p-3 rounded-xl bg-[#FFF0F0]/50 border border-[#FCD7D7] text-sm focus:outline-none focus:border-[#C5A059]" placeholder="Ex: 676871669" />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold mb-2 text-gray-400">Votre Message</label>
              <textarea rows="4" className="w-full p-3 rounded-xl bg-[#FFF0F0]/50 border border-[#FCD7D7] text-sm focus:outline-none focus:border-[#C5A059]" placeholder="Quelle pièce attire votre attention ?"></textarea>
            </div>
            <button type="submit" className="w-full py-3.5 bg-[#2B0F1A] text-[#C5A059] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-colors duration-300">
              Envoyer la demande
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}