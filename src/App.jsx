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

  // Logique pour la somme totale du panier
const calculateTotal = () => {
  return cart.reduce((sum, item) => {
    // Nettoyage de la chaîne "125 000" pour le calcul
    const price = parseInt(item.price.replace(/\s/g, '')); 
    return sum + price;
  }, 0);
};

// Affichage des détails et produits similaires
const handleViewDetails = (product) => {
  setSelectedProduct(product);
  // Filtrage des produits similaires par catégorie
  const similar = allProducts.filter(p => p.category === product.category && p.id !== product.id);
  setRelatedProducts(similar);
  setCurrentPage('details');
};

  // --- NAVIGATION ---
  // const handleViewDetails = (product) => {
  //   setSelectedProduct(product);
  //   setCurrentPage('details');
  // };

  // Scroll to top automatique à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const products = [
  { id: 1, name: "Montre Chrono Or", gender: "Homme", category: "Montres", price: "125 000", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Bracelet Luxe", gender: "Homme", category: "Montres", price: "125 000", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Collier Perle Rare", gender: "Femme", category: "Bijoux", price: "85 000", image: "https://images.unsplash.com/photo-1605100804763-247f67b3f416?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Montre Or Rose", gender: "Femme", category: "Bijoux", price: "85 000", image: "https://images.unsplash.com/photo-1542491595-652395d44a27?auto=format&fit=crop&q=80&w=800" },
];

  

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