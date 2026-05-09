import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: "Montre Chrono Or", gender: "Homme", category: "Montres", price: "125 000", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Bracelet Luxe", gender: "Homme", category: "Montres", price: "125 000", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Collier Perle Rare", gender: "Femme", category: "Bijoux", price: "85 000", image: "https://images.unsplash.com/photo-1605100804763-247f67b3f416?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Montre Or Rose", gender: "Femme", category: "Bijoux", price: "85 000", image: "https://images.unsplash.com/photo-1542491595-652395d44a27?auto=format&fit=crop&q=80&w=800" },
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