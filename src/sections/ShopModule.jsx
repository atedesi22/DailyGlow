import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: "Montre Chrono Or", gender: "Homme", category: "Montres", price: "125 000", image: "watch1.jpg" },
  { id: 2, name: "Collier Perle Rare", gender: "Femme", category: "Bijoux", price: "85 000", image: "jewelry1.jpg" },
];

export default function ShopModule({ onAddToCart }) {
  const [activeGender, setActiveGender] = useState('Femme');

  return (
    <div className="pt-20 px-6">
      <div className="flex justify-center gap-10 mb-10">
        {['Femme', 'Homme'].map(g => (
          <button 
            key={g}
            onClick={() => setActiveGender(g)}
            className={`text-xl font-serif pb-2 ${activeGender === g ? 'text-orange-900 border-b-2 border-orange-900' : 'text-gray-400'}`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {PRODUCTS.filter(p => p.gender === activeGender).map(product => (
          <div key={product.id} className="bg-white p-3 rounded-2xl shadow-sm border border-orange-50">
            <div className="aspect-square bg-orange-50 rounded-xl mb-3 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-sm text-orange-950">{product.name}</h3>
            <p className="text-orange-700 font-bold text-sm mb-3">{product.price} FCFA</p>
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full py-2 bg-orange-950 text-white rounded-lg text-xs flex items-center justify-center gap-2"
            >
              <ShoppingBag size={14} /> Ajouter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}