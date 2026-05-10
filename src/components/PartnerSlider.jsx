import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// export default function PartnerAds({ type = "horizontal" }) {
  // Exemples de partenaires de l'écosystème NovaVerse
  const PARTNERS = [
  {
    title: "Taxiphone SARL",
    desc: "Voyagez en toute sérénité à travers Yaoundé et Douala.",
    tag: "VTC & Prestige",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200",
    link: "https://taxiphone.cm"
  },
  {
    title: "PilotPro",
    desc: "L'outil ultime pour la gestion de votre PME africaine.",
    tag: "SaaS Management",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    link: "#"
  },
  {
    title: "NovaVerse AI",
    desc: "L'intelligence artificielle au service de vos données.",
    tag: "Innovation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    link: "#"
  }
];

 export default function PartnerSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === PARTNERS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === PARTNERS.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? PARTNERS.length - 1 : current - 1);

  return (
    <div className="my-16 px-6 max-w-7xl mx-auto relative group">
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl">
        {PARTNERS.map((partner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image de fond avec overlay sombre */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] hover:scale-110"
              style={{ backgroundImage: `url(${partner.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            {/* Contenu */}
            <div className="relative h-full flex flex-col justify-center px-8 md:px-16 text-white">
              <span className="text-[10px] uppercase tracking-[0.3em] bg-orange-700/80 w-fit px-3 py-1 rounded-full mb-4">
                {partner.tag}
              </span>
              <h3 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
                {partner.title}
              </h3>
              <p className="text-gray-200 text-sm md:text-base max-w-md mb-8">
                {partner.desc}
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm w-fit flex items-center gap-2 hover:bg-orange-50 transition">
                Découvrir <ExternalLink size={16} />
              </button>
            </div>
          </div>
        ))}

        {/* Contrôles (Flèches) - Visibles seulement au survol sur PC */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicateurs (Points) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {PARTNERS.map((_, i) => (
            <div 
              key={i}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === current ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}