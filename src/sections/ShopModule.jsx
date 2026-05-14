import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingBag, Search, Filter } from 'lucide-react';
import { productsData } from '../data/products';

export default function ShopModule({ onAddToCart, onViewDetails }) {
  const [activeGender, setActiveGender] = useState('Femme');
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [shuffledProducts, setShuffledProducts] = useState([]);

  // 1. Mélange des produits (Algorithm Fisher-Yates) à chaque montage du composant
  useEffect(() => {
    const shuffle = (array) => {
      let shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    setShuffledProducts(shuffle(productsData));
  }, []);

  // 2. Extraction dynamique des catégories en fonction du genre sélectionné
  const categories = useMemo(() => {
    const relevantCats = productsData
      .filter(p => p.gender === activeGender)
      .map(p => p.category);
    return ["Tous", ...new Set(relevantCats)];
  }, [activeGender]);

  // 3. Logique de filtrage combinée
  const filteredProducts = shuffledProducts.filter(p => {
    const matchesGender = p.gender === activeGender;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Tous" || p.category === activeCategory;
    return matchesGender && matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto min-h-screen">
      
      {/* Barre de recherche interactive */}
      <div className="max-w-md mx-auto mb-8 relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-600 transition-colors" size={18} />
        <input 
          type="text"
          placeholder="Rechercher une pièce unique..."
          className="w-full p-4 pl-12 rounded-2xl bg-white border border-pink-100 focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-50/50 transition-all text-sm shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sélecteur de Genre */}
      <div className="flex justify-center gap-10 mb-6">
        {['Homme', 'Femme'].map(g => (
          <button 
            key={g}
            onClick={() => {
              setActiveGender(g);
              setActiveCategory("Tous"); // Reset catégorie au changement de genre
              setSearchTerm("");
            }}
            className={`text-xl font-serif pb-2 transition-all ${
              activeGender === g 
                ? 'text-pink-900 border-b-2 border-pink-900 font-bold scale-105' 
                : 'text-gray-300 hover:text-gray-400'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Barre de Filtre par Catégories */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-medium whitespace-nowrap border transition-all ${
              activeCategory === cat
                ? 'bg-pink-950 text-white border-pink-950 shadow-md scale-105'
                : 'bg-white text-gray-500 border-pink-100 hover:border-pink-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de produits */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 mb-20">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white p-3 rounded-2xl shadow-sm border border-pink-50 group hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="aspect-square bg-pink-50 rounded-xl mb-3 overflow-hidden cursor-pointer"
                onClick={() => onViewDetails(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              <div className="cursor-pointer" onClick={() => onViewDetails(product)}>
                <h3 className="font-serif text-sm text-pink-950 truncate">{product.name}</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
                <p className="text-pink-700 font-bold text-sm mb-3">{product.price} FCFA</p>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
                className="w-full py-2.5 bg-pink-950 text-white rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-black transition-colors active:scale-95"
              >
                <ShoppingBag size={14} /> Ajouter
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-pink-50/30 rounded-3xl border border-dashed border-pink-200">
          <Filter className="mx-auto mb-4 text-pink-200" size={40} />
          <p className="text-gray-400 italic">Aucune pièce trouvée pour cette sélection.</p>
        </div>
      )}
    </div>
  );
}