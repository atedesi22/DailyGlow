import React, { useState, useEffect } from 'react';

// Sections & Modules
import LandingPage from './sections/LandingPage';
import ShopModule from './sections/ShopModule';
import ProductDetails from './sections/ProductDetails';
import Contact from './sections/Contact';
import Faq from './sections/Faq';
// import Testimonials from './sections/Testimonials';
// import Newsletter from './sections/Newsletter';
import PackDetails from './sections/PackDetails';


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
  const [page, setPage] = useState('home'); // Gère la page active
  const [cart, setCart] = useState([]);     // Gère ton panier existant
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
    <div className="min-h-screen bg-[#FFF0F0] text-pink-950 font-sans pb-24 md:pb-0 selection:bg-pink-100">
      {/* 1. La Navbar est posée ici une seule fois et gère le mobile + desktop */}
      <Navbar 
        cartCount={cart.length} 
        activePage={page} 
        onChangePage={(newPage) => setPage(newPage)} 
      />

      {/* 2. Affichage conditionnel de tes pages */}
      {/* // Dans ton App.jsx */}
{page === 'home' && (
      <LandingPage 
        onExploreShop={() => setPage('shop')} 
        onViewPack={(lePackClique) => {
          setSelectedProduct(lePackClique); // Utilise setSelectedProduct pour uniformiser
          setPage('pack-details');
        }}
      />
    )}

    {page === 'pack-details' && (
      <PackDetails 
        pack={selectedProduct} 
        onBack={() => setPage('home')} 
      />
    )}   
      {page === 'shop' && (
  <ShopModule 
    onAddToCart={(product) => setCart([...cart, product])} 
    onViewDetails={(product) => {
      setSelectedProduct(product); // On mémorise le produit cliqué
      setPage('details');          // On change la page vers 'details'
    }} 
  />
)}



{/* --- AJOUTE OU VÉRIFIE CE BLOC ICI --- */}
{page === 'details' && (
  <ProductDetails 
    product={selectedProduct} 
    onBack={() => setPage('shop')} 
  />
)}
      
      {page === 'cart' && (
        <Cart 
          cart={cart} 
          onRemoveFromCart={(index) => setCart(cart.filter((_, i) => i !== index))}
          onBackToShop={() => setPage('shop')} 
        />
      )}

      {page === 'contact' && <Contact />}

      {/* Footer (Desktop uniquement)
      <footer className="hidden md:block py-16 text-center border-t border-pink-50 mt-20">
        <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase">
          DailyGlow — Excellence & Prestige
        </p>
      </footer> */}
    </div>
  );
}