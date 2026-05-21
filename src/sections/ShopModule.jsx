import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingBag, Search, Sparkles } from 'lucide-react';
import { productsData } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ShopModule({ onViewDetails }) {
  const [activeGender, setActiveGender] = useState('Femme');
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [shuffledProducts, setShuffledProducts] = useState([]);
  
  // Utilisation directe du contexte pour le panier
  const { addToCart } = useCart();

  // 1. Mélange initial des produits
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

  // 2. Extraction dynamique des catégories
  const categories = useMemo(() => {
    const relevantCats = productsData
      .filter(p => p.gender === activeGender)
      .map(p => p.category);
    return ["Tous", ...new Set(relevantCats)];
  }, [activeGender]);

  // 3. Logique de filtrage
  const filteredProducts = shuffledProducts.filter(p => {
    const matchesGender = p.gender === activeGender;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Tous" || p.category === activeCategory;
    return matchesGender && matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FFF0F0] pt-20 px-6 max-w-7xl mx-auto text-[#2B0F1A]">
      {/* En-tête */}
      <div className="text-center mb-10">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2B0F1A] tracking-wide mb-2">
          Offrez l'Éclat
        </h1>
        <p className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-semibold">
          DailyGlow Luxury Collection
        </p>
      </div>

      {/* Recherche */}
      <div className="max-w-md mx-auto mb-8 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text"
          placeholder="Rechercher une pièce unique..."
          className="w-full p-4 pl-12 rounded-3xl bg-white border border-[#FCD7D7] focus:border-[#C5A059] focus:outline-none transition-all text-sm shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sélecteur Genre */}
      <div className="flex justify-center gap-12 mb-6">
        {['Homme', 'Femme'].map(g => (
          <button 
            key={g}
            onClick={() => { setActiveGender(g); setActiveCategory("Tous"); setSearchTerm(""); }}
            className={`text-lg font-serif pb-2 transition-all ${
              activeGender === g ? 'text-[#2B0F1A] border-b-2 border-[#C5A059] font-bold' : 'text-gray-400'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Catégories */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-xs font-medium border transition-all ${
              activeCategory === cat ? 'bg-[#2B0F1A] text-[#C5A059] border-[#2B0F1A]' : 'bg-white text-gray-500 border-[#FCD7D7]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 mb-20">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-[2rem] shadow-sm border border-[#FCD7D7]/60 group flex flex-col justify-between">
              <div className="cursor-pointer" onClick={() => onViewDetails(product)}>
                <div className="aspect-square bg-[#FFF0F0] rounded-[1.5rem] mb-4 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div className="px-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block mb-1">✦ {product.category}</span>
                  <h3 className="font-serif text-base text-[#2B0F1A] truncate mb-1">{product.name}</h3>
                  <p className="text-[#2B0F1A] font-bold text-sm mb-4">{product.price} <span className="text-xs text-[#C5A059]">FCFA</span></p>
                </div>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                className="w-full py-3 bg-[#2B0F1A] text-[#C5A059] rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#C5A059] hover:text-white transition-all"
              >
                <ShoppingBag size={14} /> Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-[2rem] border border-dashed border-[#FCD7D7]">
          <Sparkles className="mx-auto mb-4 text-[#C5A059]" size={32} />
          <p className="text-gray-400 italic">Aucune pièce disponible pour le moment.</p>
        </div>
      )}
    </div>
  );
}