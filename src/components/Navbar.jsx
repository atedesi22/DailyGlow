import { Bell } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-40 border-b border-pink-50 px-6 flex justify-between items-center">
      <h1 onClick={() => onNavigate('landing')} className="text-2xl font-serif tracking-tighter cursor-pointer">
        Daily<span className="text-pink-700 italic">Glow</span>
      </h1>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
        <button onClick={() => onNavigate('shop')}>Collection</button>
        <button onClick={() => onNavigate('profile')}>Compte</button>
      </div>
      <button className="text-pink-950"><Bell size={20} /></button>
    </header>
  );
}