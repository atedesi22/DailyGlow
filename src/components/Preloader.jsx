import React from 'react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF0F0]">
      {/* Ton Logo (tu peux mettre ton tag image ici) */}
      <div className="mb-8 animate-pulse">
        <img src="/logo.png" alt="DailyGlow Logo" className="w-24 h-24 object-contain" />
      </div>

      {/* Slogan élégant */}
      <div className="text-center mb-8">
        <p className="font-serif text-xl text-[#2B0F1A] tracking-widest uppercase">
          DailyGlow
        </p>
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] mt-2">
          L'Éclat de votre Prestige
        </p>
      </div>

      {/* Barre de chargement */}
      <div className="w-48 h-1 bg-[#FCD7D7] rounded-full overflow-hidden">
        <div className="h-full bg-[#2B0F1A] animate-loading-bar"></div>
      </div>
    </div>
  );
}