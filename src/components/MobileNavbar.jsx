import { Home, ShoppingBag, User, MessageSquare, ShoppingCart } from 'lucide-react';

export function MobileNavbar({ onNavigate, cartCount, activePage }) {
  const navItems = [
    { id: 'landing', label: 'Accueil', icon: Home },
    { id: 'shop', label: 'Boutique', icon: ShoppingBag },
    { id: 'cart', label: 'Panier', icon: ShoppingCart },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-pink-50 px-4 py-3 z-50 flex justify-between items-center md:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.03)]">
      {navItems.map((item) => (
        <button 
          key={item.id}
          onClick={() => onNavigate(item.id)} 
          className={`relative flex flex-col items-center transition-all ${activePage === item.id ? 'text-pink-950 scale-110' : 'text-gray-400'}`}
        >
          <item.icon size={20} strokeWidth={activePage === item.id ? 2.5 : 2} />
          <span className="text-[9px] mt-1 font-bold">{item.label}</span>
          
          {/* Badge Panier spécifiqujkkje sur l'icône Panier */}
          {item.id === 'cart' && cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-700 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border border-white">
              {cartCount}
            </span>
          )}
        </button>
      ))}
    </nav>
  );
}