import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Truck, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
// import Navbar from './components/Navbar'; // Si tu as séparé la nav
import Hero from './sections/Hero';     // Si tu as séparé le hero
import ShopModule from './sections/ShopModule'; // <--- LE CODE DU CATALOGUE ET DÉTAILS
// import Footer from './components/Footer';

// --- MOCK DATA ---
const PRODUCTS = [
  { id: 1, name: "Éclat d'Ambre", price: "25 000 FCFA", category: "Parfum", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Collier Divine", price: "15 000 FCFA", category: "Bijoux", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Brume de Nuit", price: "18 500 FCFA", category: "Parfum", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400" },
];

export default function LandingPage() {
  const [cartCount, setCartCount] = useState(0);
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-gray-800 font-sans">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 px-6 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-serif font-bold tracking-widest text-orange-900 cursor-pointer"
          onClick={() => setView('home')}
        >
          DAILY GLOW
        </h1>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setView('shop')}
            className="text-orange-900 font-medium hover:text-orange-700 transition"
          >
            Boutique
          </button>
          {/* Bouton NovaVerse ici */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              <Sparkles size={16} /> Connexion NovaVerse
            </button>
            <div className="relative cursor-pointer">
              <ShoppingBag className="text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}

      {view === 'home' ? (
        <>
          <Hero onExplore={() => setView('shop')} />
          {/* Tes autres sections de la landing page */}

          {/* ARRIVAGE PROCHAIN (FOMO) */}
          <section className="py-12 bg-black text-white overflow-hidden">
            <div className="flex whitespace-nowrap animate-pulse gap-10 justify-center items-center opacity-80">
              <span className="text-xl font-medium tracking-tighter italic">LE PROCHAIN ARRIVAGE ARRIVE TRÈS BIENTÔT...</span>
              <Clock className="text-orange-400" />
              <span className="text-xl font-medium tracking-tighter italic">RESTEZ À L'ÉCOUTE</span>
            </div>
          </section>

          {/* PRODUITS PHARES */}
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h3 className="text-3xl font-serif text-orange-950">Nos Incontournables</h3>
                <p className="text-gray-500">Sélectionnés pour leur fragrance et leur éclat.</p>
              </div>
              <button className="text-orange-800 font-semibold flex items-center gap-1 hover:underline">
                Voir tout <ExternalLink size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <button
                      onClick={() => setCartCount(c => c + 1)}
                      className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur py-3 rounded-xl font-bold translate-y-12 group-hover:translate-y-0 transition duration-300 flex justify-center items-center gap-2 shadow-lg"
                    >
                      <ShoppingBag size={18} /> Ajouter au panier
                    </button>
                  </div>
                  <div className="mt-4 flex justify-between items-start">
                    <div>
                      <p className="text-xs text-orange-600 font-bold uppercase tracking-widest">{product.category}</p>
                      <h4 className="text-xl font-medium text-gray-900">{product.name}</h4>
                    </div>
                    <span className="text-lg font-serif font-semibold">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* RÈGLES & SERVICES (Important pour la boutique) */}
          <section className="py-20 bg-orange-50/50 px-6 border-y border-orange-100">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                  <ShieldCheck className="text-orange-700" size={32} />
                </div>
                <h5 className="font-bold mb-2">Dépôt Obligatoire</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Le dépôt de garantie valide officiellement votre commande.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                  <Truck className="text-orange-700" size={32} />
                </div>
                <h5 className="font-bold mb-2">Livraison Flexible</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Les frais de livraison sont à la charge du client (Tarifs locaux).</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                  <Sparkles className="text-orange-700" size={32} />
                </div>
                <h5 className="font-bold mb-2">Conseils d'Experts</h5>
                <p className="text-sm text-gray-600 leading-relaxed">Nous vous aidons à choisir la fragrance qui vous correspond.</p>
              </div>
            </div>
          </section>

        </>
      ) : (
        <ShopModule />
      )}



      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-orange-100">
        <p className="text-orange-900/50 text-sm font-medium uppercase tracking-widest">© 2026 Daily Glow x NovaVerse</p>
      </footer>
    </div>
  );
}      