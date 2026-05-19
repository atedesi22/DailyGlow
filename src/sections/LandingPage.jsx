import React from 'react';
import { Sparkles, ArrowRight, ShoppingBag, Gift, Layers } from 'lucide-react';
import PackDetails from './PackDetails';

export default function LandingPage({ onViewPack, packs, onExploreShop }) {
  
  
  // Les packages issus de ton flyer
  const featuredPacks = [
  { id: 1, name: "Pack Élite", price: "20 000", tag: "🏆 Le Plus Prestigieux", description: "Le summum de l'élégance.", items: ["Montre", "Gourmette", "Collier", "Boucles d'oreilles", "Foulard", "Carte"] },
  { id: 2, name: "Pack Premium", price: "15 000", tag: "✨ Exclusivité", description: "Le raffinement discret.", items: ["Collier", "Boucles d'oreilles", "Manchette", "Foulard", "Bijou", "Carte"] },
  { id: 3, name: "Pack Gold", price: "10 000", tag: "💛 Le Best-Seller", description: "L'essentiel du luxe.", items: ["Foulard", "Manchette", "Boucles", "Collier", "Carte"] },
];

  return (
    <div className="min-h-screen bg-[#FFF0F0] text-[#2B0F1A] font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION AVEC IMAGE DE FOND LUXE IMMERSIVE */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-20 px-6 text-center">
        
        {/* L'image de fond "Prestige" avec overlays de transition */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1920&auto=format&fit=crop" 
            alt="Luxury Gold Jewellery Background" 
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse duration-[8000ms]"
          />
          {/* Couche 1 : Filtre rose poudré translucide pour respecter la charte */}
          <div className="absolute inset-0 bg-[#FFF0F0]/75 mix-blend-multiply" />
          {/* Couche 2 : Dégradé fluide pour estomper l'image vers le bas et le haut */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF0F0]/50 via-transparent to-[#FFF0F0]" />
        </div>

        {/* CONTENU (Positionné au-dessus de l'image grâce au z-10) */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Badge d'accueil */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#FCD7D7] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-6 shadow-sm">
            <Sparkles size={12} className="animate-spin-slow" /> Collection Fête des Mères 2026
          </div>

          {/* Titre Principal Calligraphique à fort impact */}
          <h1 className="font-serif text-4xl md:text-7xl font-bold tracking-wide mb-6 leading-[1.15] text-[#2B0F1A] drop-shadow-sm">
            Offrez l'éclat que vos <br />
            <span className="text-[#C5A059] italic font-normal font-serif">mamans méritent</span>
          </h1>

          <p className="text-sm md:text-base text-gray-700 max-w-xl mb-12 tracking-wide font-medium leading-relaxed">
            Découvrez nos packages d'exception en édition limitée. Des pièces d'orfèvrerie uniques façonnées pour célébrer celles qui nous inspirent chaque jour.
          </p>

          {/* Boutons d'Action Principaux */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <button 
              onClick={onExploreShop}
              className="px-8 py-4 bg-[#2B0F1A] text-[#C5A059] font-bold rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-[#2B0F1A]/20 hover:bg-[#C5A059] hover:text-white transition-all duration-300 transform active:scale-95 group"
            >
              <ShoppingBag size={18} /> 
              Explorer la boutique 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* SE CONNECTER AVEC NOVAVERSE */}
            <button 
              onClick={() => alert("Connexion via NovaVerse indisponible en phase Seed.")}
              className="px-8 py-4 bg-white/90 backdrop-blur-md border border-[#FCD7D7] text-[#2B0F1A] font-medium rounded-2xl flex items-center justify-center gap-3 shadow-sm hover:border-[#C5A059] hover:bg-[#FFF0F0] transition-all duration-300"
            >
              <Layers size={16} className="text-[#C5A059]" />
              Se connecter avec NovaVerse
            </button>
          </div>
        </div>
      </section>

      {/* 2. SECTION PACKS SPÉCIAUX */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide mb-2">
            Nos Packages Spéciaux
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold mt-1">Directement extraits du catalogue</p>
          <div className="h-0.5 w-12 bg-[#C5A059] mx-auto mt-4"></div>
        </div>

        {/* Grille des Packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {packs.map((pack, index) => (
    // <div key={pack.id} className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#FCD7D7] flex flex-col justify-between">

    //   {/* Image du Pack */}
    //       <div className="relative h-[400px] md:h-full">
    //         <img src={pack.image} alt={pack.name} className="w-full h-full object-cover" />
    //         <div className="absolute top-6 left-6 bg-[#2B0F1A] text-[#C5A059] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
    //           Édition Limitée
    //         </div>
    //       </div>
    //           <div>
    //             <span className="text-[10px] font-bold uppercase text-[#C5A059]">{pack.tag}</span>
    //             <h3 className="text-2xl font-bold font-serif mt-2">{pack.name}</h3>
    //             <ul className="mb-6 space-y-2">
    //           {pack.items.map((item, i) => <li key={i} className="flex items-center gap-2 text-[#C5A059]">✦ <span className=' text-black'>{item}</span></li>)}
    //         </ul>
    //             <p className="text-xl font-bold text-[#C5A059] mb-4">{pack.price} FCFA</p>
    //           </div>
              
              // {/* C'est ici le changement : On appelle onViewPack(pack) */}
              // <button 
              //   onClick={() => onViewPack(pack)} 
              //   className="w-full py-4 bg-[#FFF0F0] text-[#2B0F1A] rounded-xl text-xs font-bold hover:bg-[#2B0F1A] hover:text-[#C5A059] transition-all"
              // >
              //   Découvrir ce pack
              // </button>
    //         </div>

    <div 
              key={index} 
              className="bg-white rounded-[2.5rem] border border-[#FCD7D7]/60 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              <Gift size={120} className="absolute -right-6 -bottom-6 text-[#FFF0F0] group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#C5A059] mb-3">
                  {pack.tag}
                </span>
                
                <h3 className="font-serif text-2xl font-bold text-[#2B0F1A] mb-1">{pack.name}</h3>
                <p className="text-xl font-bold text-[#2B0F1A] mb-6">
                  {pack.price} <span className="text-xs text-[#C5A059] font-sans">FCFA</span>
                </p>

                <ul className="space-y-3 mb-8 border-t border-[#FFF0F0] pt-6">
                  {pack.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                      <span className="text-[#C5A059]">✦</span> {item}
                    </li>
                    ))}
                </ul>
              </div>

              {/* C'est ici le changement : On appelle onViewPack(pack) */}
              <button 
                onClick={() => onViewPack(pack)} 
                className="w-full py-4 bg-[#FFF0F0] text-[#2B0F1A] rounded-xl text-xs font-bold hover:bg-[#2B0F1A] hover:text-[#C5A059] transition-all"
              >
                Découvrir ce pack
              </button>
            </div>
  ))}
        </div>
      </section>

      

      {/* 3. FOOTER DES CONTACTS (Bandeau sombre du flyer) */}
      <footer className="bg-black text-white py-12 px-6 mt-20 border-t border-[#C5A059]/20 text-center md:text-left relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-1">📅 Clôture des commandes</p>
            <p className="text-sm font-serif font-semibold text-gray-300">Vendredi 29 Mai 2026</p>
            <p className="text-xs text-gray-400 mt-1">📍 Douala, Cameroun</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300">
            <span className="hover:text-[#C5A059] transition-colors">📞 WhatsApp : +237 676 871 669</span>
            <span className="hover:text-[#C5A059] transition-colors">🎵 TikTok : @dailyglow237</span>
            <span className="hover:text-[#C5A059] transition-colors">📸 Instagram : @daily_glow_237</span>
          </div>
        </div>
      </footer>

    </div>
  );
}