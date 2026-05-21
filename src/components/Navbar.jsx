import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Home, ShieldCheck, Phone, Layers, Compass } from 'lucide-react';

export default function Navbar({ cartCount, activePage, onChangePage }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'shop', label: 'Boutique', icon: Compass },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  return (
    <>
      {/* ==========================================
          1. BARRE DE NAVIGATION (DESKTOP & HAUT MOBILE)
         ========================================== */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-[#FCD7D7]/50 z-40 text-[#2B0F1A]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="cursor-pointer flex flex-col" onClick={() => onChangePage('home')}>
            <img src='/logo.png' className='w-25 h-25'/>
            {/* <img src="" alt="" /> */}
            {/* <span className="font-serif text-2xl font-bold tracking-wider text-[#2B0F1A]">DG</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#C5A059] font-bold -mt-1">DailyGlow</span> */}
          </div>


          {/* LIENS NAV - DESKTOP */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onChangePage(item.id)}
                className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 relative py-1 group ${
                  activePage === item.id ? 'text-[#C5A059] font-bold' : 'text-[#2B0F1A]/70 hover:text-[#2B0F1A]'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#C5A059] transition-all duration-300 ${
                  activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* ACTIONS - DESKTOP */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => alert("Connexion via NovaVerse indisponible en phase Seed.")}
              className="p-2.5 bg-[#FFF0F0] text-[#2B0F1A] border border-[#FCD7D7] hover:border-[#C5A059] rounded-xl transition-all duration-300 hover:shadow-sm"
              title="Connexion NovaVerse"
            >
              <Layers size={16} className="text-[#C5A059]" />
            </button>
            
            <button 
              onClick={() => onChangePage('cart')}
              className="relative p-3 bg-[#2B0F1A] text-[#C5A059] rounded-xl hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-md shadow-[#2B0F1A]/10"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center font-sans animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* TITRE DE PAGE RAPIDE - MOBILE ONLY (Pour savoir où on se trouve) */}
          <div className="flex md:hidden text-xs uppercase tracking-widest font-bold text-[#C5A059] bg-[#FFF0F0] px-3 py-1 rounded-full border border-[#FCD7D7]">
            {activePage === 'home' ? 'Showroom' : activePage === 'shop' ? 'Boutique' : activePage === 'cart' ? 'Mon Écrin' : 'Contact'}
          </div>
        </div>
      </nav>

      {/* ==========================================
          2. BOTTOM NAVIGATION BAR (FLUIDE POUR MOBILE)
         ========================================== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-[#FCD7D7]/60 z-50 px-4 pb-2 pt-2 shadow-[0_-10px_30px_rgba(43,15,26,0.08)] flex justify-around items-center rounded-t-[1.8rem]">
        {navItems.map(item => {
          const IconComponent = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangePage(item.id)}
              className="flex flex-col items-center justify-center flex-1 py-1 transition-all duration-300 relative"
            >
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                isActive ? 'bg-[#2B0F1A] text-[#C5A059] scale-110 shadow-sm' : 'text-[#2B0F1A]/50'
              }`}>
                <IconComponent size={20} />
              </div>
              <span className={`text-[9px] font-medium tracking-wider mt-1 transition-all duration-300 ${
                isActive ? 'text-[#2B0F1A] font-bold opacity-100' : 'text-gray-400 opacity-80'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}

        {/* BOUTON PANIER MOBILE INTÉGRÉ DANS LA BOTTOM BAR */}
        <button
          onClick={() => onChangePage('cart')}
          className="flex flex-col items-center justify-center flex-1 py-1 relative"
        >
          <div className={`p-2 rounded-xl transition-all duration-300 ${
            activePage === 'cart' ? 'bg-[#2B0F1A] text-[#C5A059] scale-110' : 'text-[#2B0F1A]/50'
          }`}>
            <div className="relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-sans">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
          <span className={`text-[9px] font-medium tracking-wider mt-1 ${activePage === 'cart' ? 'text-[#2B0F1A] font-bold' : 'text-gray-400'}`}>
            Panier
          </span>
        </button>

        {/* MENU COMPLÉMENTAIRE (HAMBURGER MOBILE POUR DRAWER) */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex flex-col items-center justify-center flex-1 py-1 text-[#2B0F1A]/50 hover:text-[#2B0F1A]"
        >
          <div className="p-2">
            <Menu size={20} />
          </div>
          <span className="text-[9px] font-medium tracking-wider text-gray-400">Plus</span>
        </button>
      </div>

      {/* ==========================================
          3. DRAWER LATÉRAL COULISSANT (POUR LE RESTE)
         ========================================== */}
      {/* Overlay sombre */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Panneau coulissant */}
      <div className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 p-6 shadow-2xl border-l border-[#FCD7D7] transition-transform duration-300 ease-out flex flex-col justify-between rounded-l-[2rem] ${
        isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div>
          <div className="flex justify-between items-center mb-8 border-b border-[#FFF0F0] pb-4">
            <h3 className="font-serif text-lg font-bold text-[#2B0F1A]">Menu Privé</h3>
            <button onClick={() => setIsDrawerOpen(false)} className="p-1 text-[#2B0F1A]">
              <X size={20} />
            </button>
          </div>

          {/* Section d'intégration de l'écosystème */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Écosystème Connecté</p>
            <button 
              onClick={() => {
                alert("Connexion via NovaVerse indisponible en phase Seed.");
                setIsDrawerOpen(false);
              }}
              className="w-full p-4 bg-[#FFF0F0] border border-[#FCD7D7] hover:border-[#C5A059] text-[#2B0F1A] rounded-2xl flex items-center gap-3 text-xs font-bold transition-all"
            >
              <Layers size={16} className="text-[#C5A059]" /> 
              Se connecter avec NovaVerse
            </button>
          </div>
        </div>

        {/* Note de bas de menu */}
        <div className="text-[10px] text-gray-400 tracking-wide text-center border-t border-[#FFF0F0] pt-4">
          <p>DailyGlow Jewellery PWA v1.0</p>
          <p className="font-serif text-[#C5A059] mt-1">✦ Prestige & Éclat ✦</p>
        </div>
      </div>
    </>
  );
}