import React from 'react';
import { ChevronRight } from 'lucide-react';
import InstallButton from '../components/InstallButton';

export default function LandingPage({ onExplore }) {
  return (
    <div className="relative min-h-screen bg-[#FFFDFB]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20" />
        <div className="relative text-center px-6 z-10">
          <h2 className="text-pink-700 tracking-[0.3em] uppercase text-sm mb-4">L'art de l'éclat</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-pink-950 mb-8 leading-tight">
            DailyGlow <br /> <span className="italic">Bijoux & Montres</span>
          </h1>
          <button 
            onClick={onExplore}
            className="border border-pink-950 text-pink-950 px-10 py-4 rounded-full hover:bg-pink-950 hover:text-white transition-all duration-500 flex items-center gap-3 mx-auto"
          >
            Découvrir la Collection <ChevronRight size={18} />
          </button>
          
          {/* Bouton de téléchargement PWA */}
          <InstallButton/>
        </div>
      </section>

      {/* Univers Masculin & Féminin */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mb-10">
        <div className="relative h-[400px] group cursor-pointer overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/30 flex items-end p-8">
            <h3 className="text-white text-3xl font-serif italic">Univers Homme</h3>
          </div>
        </div>
        <div className="relative h-[400px] group cursor-pointer overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/30 flex items-end p-8">
            <h3 className="text-white text-3xl font-serif italic">Univers Femme</h3>
          </div>
        </div>
      </section>

      {/* Section NovaVerse Connection */}
      <section className="bg-pink-50/50 py-20 text-center px-6 mb-20">
        <h4 className="font-serif text-2xl mb-4">Connectée à votre écosystème</h4>
        <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
          Retrouvez vos avantages et votre historique grâce à la connexion unifiée NovaVerse.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
          Se connecter avec NovaVerse
        </button>
      </section>
    </div>
  );
}