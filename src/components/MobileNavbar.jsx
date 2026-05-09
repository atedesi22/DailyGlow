import { Home, ShoppingBag, User, LayoutDashboard } from 'lucide-react';

export function MobileNavbar({ onNavigate, cartCount }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-orange-50 px-6 py-3 z-50 flex justify-between items-center md:hidden">
      <button onClick={() => onNavigate('shop')} className="flex flex-col items-center text-orange-950">
        <Home size={24} />
        <span className="text-[10px] mt-1 font-medium">Accueil</span>
      </button>
      
      <button onClick={() => onNavigate('shop')} className="flex flex-col items-center text-gray-400">
        <ShoppingBag size={24} />
        <span className="text-[10px] mt-1 font-medium italic">Catalogue</span>
      </button>

      <button onClick={() => onNavigate('cart')} className="relative flex flex-col items-center text-gray-400">
        <div className="bg-orange-950 text-white p-3 rounded-full -mt-10 shadow-lg border-4 border-[#FFFDFB]">
          <ShoppingBag size={22} />
        </div>
        {cartCount > 0 && (
          <span className="absolute -top-12 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
            {cartCount}
          </span>
        )}
      </button>

      <button onClick={() => onNavigate('profile')} className="flex flex-col items-center text-gray-400">
        <User size={24} />
        <span className="text-[10px] mt-1 font-medium">Profil</span>
      </button>

      <button onClick={() => onNavigate('admin')} className="flex flex-col items-center text-gray-400">
        <LayoutDashboard size={24} />
        <span className="text-[10px] mt-1 font-medium">Admin</span>
      </button>
    </nav>
  );
}