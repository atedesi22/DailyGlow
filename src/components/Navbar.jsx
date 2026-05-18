import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, Layers } from 'lucide-react';

export default function Navbar({ cartCount, activePage, onChangePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'shop', label: 'Boutique' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-[#FCD7D7]/50 z-50 text-[#2B0F1A]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="cursor-pointer flex flex-col" onClick={() => onChangePage('home')}>
          <span className="font-serif text-2xl font-bold tracking-wider text-[#2B0F1A]">DG</span>
          <span className="text-[8px] uppercase tracking-[0.3em] text-[#C5A059] font-bold -mt-1">DailyGlow</span>
        </div>

        {/* NAVIGATION DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onChangePage(item.id)}
              className={`text-xs uppercase tracking-widest font-medium transition-colors ${
                activePage === item.id ? 'text-[#C5A059] font-bold' : 'text-[#2B0F1A]/70 hover:text-[#2B0F1A]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* BOUTONS ACTIONS DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => alert("Connexion via NovaVerse indisponible en phase Seed.")}
            className="p-2.5 bg-[#FFF0F0] text-[#2B0F1A] border border-[#FCD7D7] hover:border-[#C5A059] rounded-xl transition-all"
            title="Connexion NovaVerse"
          >
            <Layers size={16} className="text-[#C5A059]" />
          </button>
          
          <button 
            onClick={() => onChangePage('cart')}
            className="relative p-3 bg-[#2B0F1A] text-[#C5A059] rounded-xl hover:bg-[#C5A059] hover:text-white transition-colors"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center font-sans">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* CONTRÔLES MOBILE */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => onChangePage('cart')}
            className="relative p-2.5 bg-[#2B0F1A] text-[#C5A059] rounded-xl"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {cartCount}
              </span>
            )}
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 text-[#2B0F1A]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVBAR MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-[#FCD7D7] px-6 py-8 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                onChangePage(item.id);
                setIsOpen(false);
              }}
              className={`text-sm uppercase tracking-widest text-left font-medium pb-2 border-b border-[#FFF0F0] ${
                activePage === item.id ? 'text-[#C5A059] font-bold border-[#C5A059]' : 'text-[#2B0F1A]/70'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              alert("Connexion via NovaVerse indisponible en phase Seed.");
              setIsOpen(false);
            }}
            className="w-full py-3 bg-[#FFF0F0] border border-[#FCD7D7] text-[#2B0F1A] rounded-xl flex items-center justify-center gap-2 text-xs font-bold"
          >
            <Layers size={14} className="text-[#C5A059]" /> Se connecter avec NovaVerse
          </button>
        </div>
      )}
    </nav>
  );
}