import React, { useState, useEffect } from 'react';

// Sections & Modules
import LandingPage from './sections/LandingPage';
import ShopModule from './sections/ShopModule';
import ProductDetails from './sections/ProductDetails';
import Contact from './sections/Contact';
import PackDetails from './sections/PackDetails';

// Composants Globaux
import Navbar from './components/Navbar';
import Cart from './components/Cart';

// Données & Contexte
import { eventData } from './data/eventData';
import { useCart } from './context/CartContext'; 
import Preloader from './components/Preloader';

export default function App() {
  // --- ÉTATS DE NAVIGATION ---
  const [page, setPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPack, setSelectedPack] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // --- CONTEXTE PANIER ---
  // On récupère uniquement ce dont on a besoin depuis le contexte
  const { cart } = useCart();

  // Scroll to top automatique à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
  // Simule un temps de chargement des ressources
  const timer = setTimeout(() => setIsLoading(false), 2500);
  return () => clearTimeout(timer);
}, []);

if (isLoading) {
  return <Preloader />;
}

  return (
    <div className="min-h-screen bg-[#FFF0F0] text-pink-950 font-sans pb-24 md:pb-0 selection:bg-pink-100">
      
      {/* Navbar connectée au contexte via le nombre d'éléments dans le panier */}
      <Navbar 
        cartCount={cart.length} 
        activePage={page} 
        onChangePage={(newPage) => setPage(newPage)} 
      />

      {/* Rendu conditionnel des pages */}
      
      {page === 'home' && (
        <LandingPage 
          packs={eventData.packs} 
          onExploreShop={() => setPage('shop')}
          onViewPack={(pack) => {
            setSelectedPack(pack);
            setPage('pack-details');
          }} 
        />
      )}

      {page === 'pack-details' && (
        <PackDetails 
          pack={selectedPack} 
          onBack={() => setPage('home')} 
        />
      )}
      
      {page === 'shop' && (
        <ShopModule 
          onViewDetails={(product) => {
            setSelectedProduct(product);
            setPage('details');
          }} 
        />
      )}

      {page === 'details' && (
        <ProductDetails 
          product={selectedProduct} 
          onBack={() => setPage('shop')} 
        />
      )}
      
      {page === 'cart' && (
        <Cart 
          onBackToShop={() => setPage('shop')} 
        />
      )}

      {page === 'contact' && <Contact />}
      
    </div>
  );
}