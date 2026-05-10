import React, { useState, useEffect } from 'react';

// Sections & Modules
import LandingPage from './sections/LandingPage';
import ShopModule from './sections/ShopModule';
import ProductDetails from './sections/ProductDetails';
import Contact from './sections/Contact';
import Faq from './sections/Faq';

// Composants Globaux
import Navbar from './components/Navbar';
import { MobileNavbar } from './components/MobileNavbar';
import { UserProfile } from './components/UserProfile';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import PartnerSlider from './components/PartnerSlider';
import Cart from './components/Cart';

export default function App() {
  // --- ÉTATS ---
  const [currentPage, setCurrentPage] = useState('landing'); 
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // --- LOGIQUE PANIER ---
  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  // --- NAVIGATION ---
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage('details');
  };

  // Scroll to top automatique à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-pink-950 font-sans pb-24 md:pb-0 selection:bg-pink-100">
      
      {/* Barre de navigation supérieure */}
      <Navbar onNavigate={setCurrentPage} />

      {/* Zone de contenu principale */}
      <main className="transition-all duration-300">
        {currentPage === 'landing' && (
          <>
            <LandingPage onExplore={() => setCurrentPage('shop')} />
            <PartnerSlider />
          </>
        )}

        {currentPage === 'shop' && (
          <>
            <ShopModule 
              onAddToCart={addToCart} 
              onViewDetails={handleViewDetails} 
            />
            <div className="border-t border-pink-50/50 mt-12 pt-12">
               <PartnerSlider />
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

        {currentPage === 'contact' && <Contact />}

        {currentPage === 'profile' && (
          <UserProfile onNavigate={setCurrentPage} />
        )}

        {currentPage === 'admin' && (
          <AdminDashboard onBack={() => setCurrentPage('profile')} />
        )}

        {currentPage === 'user-dashboard' && (
          <UserDashboard onBack={() => setCurrentPage('profile')} />
        )}

        {currentPage === 'faq' && <Faq />}
      </main>

      {/* Overlay du Panier (WhatsApp Ready) */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onRemove={removeFromCart}
      />

      {/* Navigation Mobile (Sans lien admin direct pour plus de pureté) */}
      <MobileNavbar 
        onNavigate={setCurrentPage} 
        cartCount={cart.length}
        activePage={currentPage}
      />

      {/* Overlay du Panier */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onRemove={removeFromCart}
      />

      {/* Barre de navigation mobile fixée en bas */}
      <MobileNavbar 
        onNavigate={setCurrentPage} 
        cartCount={cart.length}
        activePage={currentPage}
      />

      {/* Footer (Desktop uniquement) */}
      <footer className="hidden md:block py-16 text-center border-t border-pink-50 mt-20">
        <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase">
          DailyGlow — Excellence & Prestige
        </p>
      </footer>
    </div>
  );
}