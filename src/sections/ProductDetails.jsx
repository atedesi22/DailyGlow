import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, ShieldCheck } from 'lucide-react';

export default function ProductDetails({ product, onBack }) {
  // Garde tes fonctions intactes : L'image active réagit aux clics
  const [activeImage, setActiveImage] = useState(product.image);
  const imagesGallery = product.images && product.images.length > 0 ? product.images : [product.image];


  const generateWhatsAppMessage = () => {
    const phoneNumber = "23760000000";
    const currentImageUrl = activeImage.startsWith('http') 
      ? activeImage 
      : `https://daily-glow-eta.vercel.app${activeImage}`;

    let message = `Bonjour DailyGlow ! ✨\n\nJe souhaite commander cet article :\n`;
    message += `- *${product.name}*\n`;
    message += `- *Prix : ${product.price} FCFA*\n`;
    message += `- Collection : ${product.gender}\n\n`;
    message += `Voir la variante sélectionnée : ${currentImageUrl}\n\n`;
    message += `Est-elle toujours disponible ? Merci !`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#FFF0F0] pt-20 px-6 pb-32 text-[#2B0F1A]">
      <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl shadow-[#2B0F1A]/5 border border-[#FCD7D7]/40 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Bouton Retour haut de gamme */}
        <button 
          onClick={onBack} 
          className="mb-6 p-3 bg-[#FFF0F0] text-[#2B0F1A] hover:bg-[#2B0F1A] hover:text-[#C5A059] rounded-full transition-all duration-300 focus:outline-none"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Zone d'affichage de l'Image Active Principale */}
        <div className="aspect-[4/5] bg-[#FFF0F0] rounded-[2rem] overflow-hidden mb-6 shadow-inner border border-[#FCD7D7]/30">
          <img 
            src={activeImage} 
            alt={product.name} 
            className="w-full h-full object-cover transition-all duration-500" 
          />
        </div>

        {/* Galerie de Miniatures (Ta fonction existante) */}
        {imagesGallery.length > 1 && (
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar justify-center">
            {imagesGallery.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(imgUrl)}
                className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === imgUrl ? 'border-[#2B0F1A] scale-105 shadow-md' : 'border-[#FCD7D7] opacity-60'
                }`}
              >
                <img src={imgUrl} alt={`Vue ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Informations Détaillées du Bijou */}
        <div className="px-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
            ✦ Collection {product.gender}
          </span>
          <h2 className="text-3xl font-serif text-[#2B0F1A] font-bold mb-2 leading-tight">
            {product.name}
          </h2>
          <p className="text-2xl text-[#2B0F1A] font-bold mb-6 font-sans">
            {product.price} <span className="text-lg font-medium text-[#C5A059]">FCFA</span>
          </p>
          
          <div className="border-t border-[#FCD7D7] pt-6 mb-8 text-sm text-gray-600 leading-relaxed">
            <p className="mb-4">
              Pièce d'exception issue de notre catalogue prestige. Finition artisanale minutieuse, conçue pour révéler l'éclat de vos tenues au quotidien.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C5A059] font-semibold uppercase tracking-wider">
              <ShieldCheck size={16} /> Garantie Éclat & Durabilité DailyGlow
            </div>
          </div>
        </div>

        {/* Bouton de Commande WhatsApp avec le vert officiel */}
        <a 
          href={generateWhatsAppMessage()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-lg shadow-green-900/20 no-underline active:scale-95"
        >
          <MessageCircle size={20} />
          Commander via WhatsApp
        </a>
      </div>
    </div>
  );
}
