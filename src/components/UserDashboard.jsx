import React from 'react';
import { Package, Heart, Star, ChevronRight, Clock } from 'lucide-react';

export default function UserDashboard({ onBack }) {
  const orders = [
    { id: "DG-8821", date: "10 Mai 2026", status: "En cours de livraison", total: "125 000" },
    { id: "DG-7754", date: "28 Avril 2026", status: "Livré", total: "85 000" }
  ];

  return (
    <div className="pt-24 px-6 pb-32 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-serif text-pink-950">Mon Espace</h2>
        <button onClick={onBack} className="text-sm text-pink-700 underline">Retour</button>
      </div>

      {/* Cartes de statistiques rapides */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-white p-4 rounded-2xl border border-pink-50 text-center">
          <Package className="mx-auto mb-2 text-pink-800" size={20} />
          <p className="text-xl font-bold">2</p>
          <p className="text-[10px] text-gray-400 uppercase">Commandes</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-pink-50 text-center">
          <Star className="mx-auto mb-2 text-pink-800" size={20} />
          <p className="text-xl font-bold">450</p>
          <p className="text-[10px] text-gray-400 uppercase">Points Glow</p>
        </div>
      </div>

      {/* Liste des commandes récentes */}
      <h3 className="font-serif text-lg mb-4 flex items-center gap-2">
        <Clock size={18} /> Historique récent
      </h3>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-5 rounded-2xl border border-pink-50 flex justify-between items-center shadow-sm">
            <div>
              <p className="text-xs font-bold text-pink-900 mb-1">{order.id}</p>
              <p className="text-xs text-gray-400">{order.date}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-pink-50 text-[10px] rounded-full text-pink-700 font-medium italic">
                {order.status}
              </span>
            </div>
            <div className="text-right">
              <p className="font-bold text-sm mb-2">{order.total} FCFA</p>
              <ChevronRight size={18} className="text-gray-300 ml-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}