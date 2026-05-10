import React from 'react';
import { Star, Handshake, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 px-6 pb-20 max-w-2xl mx-auto">
      <h2 className="text-3xl font-serif text-pink-950 mb-2">Contact & Avis</h2>
      <p className="text-gray-500 text-sm mb-10 italic">Une suggestion ou une envie de collaborer avec l'écosystème NovaVerse ?</p>

      <div className="grid grid-cols-1 gap-4 mb-10">
        <div className="p-4 bg-pink-50 rounded-2xl border border-pink-100 flex items-center gap-4">
          <div className="p-3 bg-white rounded-xl text-pink-700 shadow-sm"><Star size={20}/></div>
          <div>
            <h4 className="font-bold text-sm">Avis Client</h4>
            <p className="text-[10px] text-gray-500">Partagez votre expérience Glow.</p>
          </div>
        </div>
        <div className="p-4 bg-black text-white rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-xl text-white shadow-sm"><Handshake size={20}/></div>
          <div>
            <h4 className="font-bold text-sm">Partenariat</h4>
            <p className="text-[10px] text-gray-300">Intégrez vos services à NovaVerse.</p>
          </div>
        </div>
      </div>

      <form className="space-y-4">
        <select className="w-full p-4 rounded-2xl bg-white border border-pink-100 focus:outline-none appearance-none">
          <option>Objet de votre demande</option>
          <option>Avis sur un produit</option>
          <option>Demande de partenariat</option>
          <option>Support technique NovaID</option>
        </select>
        <textarea rows="4" placeholder="Votre message..." className="w-full p-4 rounded-2xl bg-white border border-pink-100 focus:outline-none"></textarea>
        <button className="w-full bg-pink-950 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3">
          Envoyer le message <Send size={18} />
        </button>
      </form>
    </div>
  );
}