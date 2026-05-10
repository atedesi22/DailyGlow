import React, { useState } from 'react';
import { ShoppingBag, Search } from 'lucide-react';

const products = [
  { id: 1, name: "Montre Chrono Or", gender: "Homme", category: "Montres", price: "125 000", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Bracelet Luxe", gender: "Homme", category: "Montres", price: "125 000", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Collier Perle Rare", gender: "Femme", category: "Bijoux", price: "85 000", image: "https://images.unsplash.com/photo-1605100804763-247f67b3f416?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Montre Or Rose", gender: "Femme", category: "Bijoux", price: "85 000", image: "https://images.unsplash.com/photo-1542491595-652395d44a27?auto=format&fit=crop&q=80&w=800" },
];

export default function ShopModule({ onAddToCart, onViewDetails }) {
  const [activeGender, setActiveGender] = useState('Femme');
  const [searchTerm, setSearchTerm] = useState(""); // État pour la recherche

  // Logique de filtrage combinée : Genre + Recherche
  const filteredProducts = products.filter(p => 
    p.gender === activeGender && 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto">
      
      {/* Barre de recherche stylisée */}
      <div className="max-w-md mx-auto mb-10 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text"
          placeholder={`Rechercher un article ${activeGender.toLowerCase()}...`}
          className="w-full p-4 pl-12 rounded-2xl bg-white border border-pink-100 focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-50 transition-all text-sm shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sélecteur de Genre */}
      <div className="flex justify-center gap-10 mb-10">
        {['Homme', 'Femme'].map(g => (
          <button 
            key={g}
            onClick={() => {
              setActiveGender(g);
              setSearchTerm(""); // Optionnel : réinitialise la recherche quand on change de genre
            }}
            className={`text-xl font-serif pb-2 transition-colors ${
              activeGender === g 
                ? 'text-pink-900 border-b-2 border-pink-900' 
                : 'text-gray-300 hover:text-gray-400'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Grille de produits */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 mb-20">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white p-3 rounded-2xl shadow-sm border border-pink-50 group hover:shadow-md transition-shadow cursor-pointer"
            >
              <div 
                className="aspect-square bg-pink-50 rounded-xl mb-3 overflow-hidden"
                onClick={() => onViewDetails(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              <div onClick={() => onViewDetails(product)}>
                <h3 className="font-serif text-sm text-pink-950 truncate">{product.name}</h3>
                <p className="text-pink-700 font-bold text-sm mb-3">{product.price} FCFA</p>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Empêche de déclencher onViewDetails du parent
                  onAddToCart(product);
                }}
                className="w-full py-2.5 bg-pink-950 text-white rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-black transition-colors"
              >
                <ShoppingBag size={14} /> Ajouter
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400 italic">Aucun bijou trouvé pour "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}