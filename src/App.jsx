import React, { useState, useEffect } from 'react';
// Importation des composants et sections
import Navbar from './components/Navbar';
import { MobileNavbar } from './components/MobileNavbar';
import LandingPage from './sections/LandingPage';
import ShopModule from './sections/ShopModule';
import ProductDetails from './sections/ProductDetails';
import { UserProfile } from './components/UserProfile';
import AdminDashboard from './components/AdminDashboard';
import Auth from './components/Auth';
import Cart from './components/Cart';
import Faq from './sections/Faq';
import PartnerSlider from './components/PartnerSlider';

export default function App() {
  // --- ÉTATS GLOBAUX ---
  const [currentPage, setCurrentPage] = useState('landing'); // landing, shop, details, profile, admin, auth, faq
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // --- LOGIQUE DU PANIER ---
  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  // --- LOGIQUE DE NAVIGATION ---
  const navigateToDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage('details');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('profile');
  };

  // Remonter en haut de page à chaque changement de vue
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  return (
    <div className="min-h-screen bg-[#FFFDFB] text-pink-950 font-sans selection:bg-pink-100 pb-20 md:pb-0">
      
      {/* Barre de navigation supérieure (Desktop & Mobile) */}
      <Navbar 
        onNavigate={setCurrentPage} 
        isAuthenticated={isAuthenticated} 
      />

      {/* Rendu dynamique des pages */}
      <main className="transition-all duration-300 pb-32">
        {currentPage === 'landing' && (
          <>
            <LandingPage onExplore={() => setCurrentPage('shop')} />
            {/* Publicité partenaire stratégique sur la Landing Page */}
              <PartnerSlider type="banner" />
          </>
          
        )}

        {currentPage === 'shop' && (
          <>
            <ShopModule 
              onAddToCart={addToCart} 
              onViewDetails={(p) => { setSelectedProduct(p); setCurrentPage('details'); }} 
            />
            {/* Section bento partenaires en bas de catalogue */}
            <div className="border-t border-orange-50 mt-10">
                <PartnerSlider type="horizontal" />
            </div>
          </>
        )}

        {currentPage === 'details' && selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            onBack={() => setCurrentPage('shop')} 
            onAddToCart={addToCart}
          />
        )}

        {currentPage === 'auth' && (
          <Auth onLogin={handleLogin} />
        )}

        {currentPage === 'profile' && (
          isAuthenticated ? <UserProfile /> : <Auth onLogin={handleLogin} />
        )}

        {currentPage === 'admin' && (
          <AdminDashboard />
        )}

        {currentPage === 'faq' && (
          <Faq />
        )}
      </main>

      {/* Composants Overlay (Panier) */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onRemove={removeFromCart}
      />

      {/* Navigation Mobile fixée en bas (Ergonomie smartphone) */}
      <MobileNavbar 
        onNavigate={setCurrentPage} 
        cartCount={cart.length}
        activePage={currentPage}
      />

      {/* Footer minimaliste (visible uniquement sur desktop ou fin de scroll) */}
      <footer className="hidden md:block py-12 text-center border-t border-pink-50 mt-20">
        <p className="text-xs text-gray-400 tracking-widest uppercase">
          DailyGlow — Membre de l'Écosystème NovaVerse
        </p>
      </footer>
    </div>
  );
}