import React from 'react';
import { Plus, BarChart3, Package, Users, Eye } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="pt-24 px-6 pb-24 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-serif text-pink-950 font-bold">Gestion DailyGlow</h1>
        <button className="bg-pink-950 text-white p-2 rounded-full">
          <Plus size={24} />
        </button>
      </div>

      {/* Statistiques Rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-pink-50 p-4 rounded-2xl border border-pink-100">
          <BarChart3 size={18} className="text-pink-700 mb-2" />
          <p className="text-xs text-gray-500 uppercase">Clics WhatsApp</p>
          <p className="text-xl font-bold">84</p>
        </div>
        <div className="bg-pink-50 p-4 rounded-2xl border border-pink-100">
          <Package size={18} className="text-pink-700 mb-2" />
          <p className="text-xs text-gray-500 uppercase">Articles</p>
          <p className="text-xl font-bold">32</p>
        </div>
      </div>

      {/* Liste des Articles (Montres & Bijoux) */}
      <h3 className="font-serif text-lg mb-4 flex items-center gap-2">
        <Package size={18} /> Inventaire actuel
      </h3>
      <div className="bg-white rounded-2xl shadow-sm border border-pink-50 overflow-hidden">
        <div className="divide-y divide-pink-50">
          {[
            { name: "Montre Omega Speedmaster", price: "350 000", stock: "En stock" },
            { name: "Bracelet Rivière Or", price: "95 000", stock: "Rupture" }
          ].map((item, idx) => (
            <div key={idx} className="p-4 flex justify-between items-center hover:bg-pink-50/30 transition">
              <div>
                <p className="text-sm font-medium text-pink-950">{item.name}</p>
                <p className="text-xs text-pink-700 font-bold">{item.price} FCFA</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-[10px] uppercase font-bold tracking-tighter ${item.stock === 'En stock' ? 'text-green-600' : 'text-red-400'}`}>
                  {item.stock}
                </span>
                <button className="text-gray-300"><Eye size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note Stratégique */}
      <div className="mt-10 p-4 bg-black rounded-2xl text-white">
        <p className="text-[10px] uppercase tracking-widest text-pink-300 mb-1">Status Écosystème</p>
        <p className="text-xs italic">Connecté à PilotPro pour la gestion comptable automatisée.</p>
      </div>
    </div>
  );
}