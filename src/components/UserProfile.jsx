import React from 'react';
import { Settings, ShieldCheck, History, Award } from 'lucide-react';

export function UserProfile() {
  return (
    <div className="pt-24 px-6 pb-20 max-w-2xl mx-auto">
      {/* Header Profil */}
      <div className="text-center mb-10">
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-pink-100 rounded-full mx-auto mb-4 border-4 border-white shadow-sm overflow-hidden flex items-center justify-center">
             <span className="text-4xl">✨</span> {/* Ici viendra l'avatar NovaVerse */}
          </div>
          <div className="absolute bottom-4 right-0 bg-black text-white p-1 rounded-full border-2 border-white">
            <ShieldCheck size={14} />
          </div>
        </div>
        <h2 className="text-2xl font-serif text-pink-950">Atedesi Bohole Paul Emmanuel</h2>
        <p className="text-pink-600 text-xs font-medium uppercase tracking-widest mt-1">Membre Platinum NovaVerse</p>
      </div>

      {/* Stats de Fidélité */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-2xl border border-pink-50 shadow-sm text-center">
          <Award className="text-pink-700 mx-auto mb-2" size={20} />
          <p className="text-2xl font-bold text-pink-950">1,250</p>
          <p className="text-[10px] text-gray-400 uppercase">Vibes cumulées</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-pink-50 shadow-sm text-center">
          <History className="text-pink-700 mx-auto mb-2" size={20} />
          <p className="text-2xl font-bold text-pink-950">04</p>
          <p className="text-[10px] text-gray-400 uppercase">Instants partagés</p>
        </div>
      </div>

      {/* Menu Options */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-pink-50 text-sm">
          <span className="flex items-center gap-3"><History size={18} /> Historique des commandes</span>
          <Settings size={16} className="text-gray-300" />
        </button>
        <button className="w-full flex items-center justify-between p-4 bg-black text-white rounded-2xl text-sm">
          <span className="flex items-center gap-3">Gérer mon compte NovaVerse</span>
          <Settings size={16} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}