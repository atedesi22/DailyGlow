import React, { useState } from 'react';
import { User, Lock, Mail, LayoutDashboard, LogOut, UserPlus } from 'lucide-react';

export function UserProfile({ onNavigate }) {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  // Simulation de connexion (Test Paul Emmanuel)
  const handleAuth = (e) => {
    e.preventDefault();
    setUser({ 
      name: "Atedesi Bohole Paul Emmanuel", 
      role: "admin", 
      email: "paul.emmanuel@dailyglow.com" 
    });
  };

  // --- VUE : FORMULAIRES ---
  if (!user) {
    return (
      <div className="pt-24 px-6 max-w-md mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-pink-950">
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-light">
            {isLogin ? 'Heureux de vous revoir chez DailyGlow' : 'Rejoignez notre univers de prestige'}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-5">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-4 top-4 text-pink-200" size={18} />
              <input type="text" placeholder="Nom complet" className="w-full p-4 pl-12 rounded-2xl bg-white border border-pink-50 focus:border-pink-200 focus:outline-none transition" required />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-pink-200" size={18} />
            <input type="email" placeholder="Adresse email" className="w-full p-4 pl-12 rounded-2xl bg-white border border-pink-50 focus:border-pink-200 focus:outline-none transition" required />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-pink-200" size={18} />
            <input type="password" placeholder="Mot de passe" className="w-full p-4 pl-12 rounded-2xl bg-white border border-pink-50 focus:border-pink-200 focus:outline-none transition" required />
          </div>
          
          <button type="submit" className="w-full bg-pink-950 text-white py-4 rounded-2xl font-bold shadow-lg shadow-pink-900/10 hover:bg-black transition active:scale-95">
            {isLogin ? 'Se connecter' : 'Confirmer l\'inscription'}
          </button>
        </form>

        <button 
          onClick={() => setIsLogin(!isLogin)} 
          className="mt-8 text-sm text-gray-500 hover:text-pink-900 transition underline underline-offset-4 decoration-pink-100"
        >
          {isLogin ? "Nouveau client ? Créer un compte" : "Déjà inscrit ? Connectez-vous ici"}
        </button>
      </div>
    );
  }

  // --- VUE : PROFIL CONNECTÉ ---
  return (
    <div className="pt-24 px-6 max-w-2xl mx-auto pb-32">
      <div className="bg-white rounded-3xl p-8 border border-pink-50 shadow-sm text-center">
        <div className="w-20 h-20 bg-pink-50 rounded-full mx-auto mb-4 flex items-center justify-center text-pink-900 font-serif text-2xl font-bold border border-pink-100">
          {user.name.charAt(0)}
        </div>
        <h2 className="text-2xl font-serif text-pink-950">{user.name}</h2>
        <p className="text-gray-400 text-xs mt-1">{user.email}</p>
        
        <div className="mt-10 grid grid-cols-1 gap-4">
          {user.role === 'admin' && (
            <button 
              onClick={() => onNavigate('admin')}
              className="w-full p-5 bg-black text-white rounded-2xl flex items-center justify-center gap-3 font-medium hover:scale-[1.02] transition"
            >
              <LayoutDashboard size={20} /> Tableau de bord Admin
            </button>
          )}

          {/* Nouveau lien vers le tableau de bord utilisateur */}
          <button 
            onClick={() => onNavigate('user-dashboard')}
            className="w-full p-5 bg-pink-100 text-pink-950 rounded-2xl flex items-center justify-center gap-3 font-medium hover:bg-pink-200 transition"
          >
            <User size={20} /> Mon Tableau de bord Client
          </button>
          
          <div className="h-px bg-pink-50 my-2" />
          
          <button 
            onClick={() => setUser(null)}
            className="w-full p-4 text-red-400 text-sm font-medium flex items-center justify-center gap-2"
          >
            <LogOut size={16} /> Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}