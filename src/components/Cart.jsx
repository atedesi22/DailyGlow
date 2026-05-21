import React, { useState } from 'react';
import { X, Trash2, MessageCircle, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';


export default function Cart({ onBackToShop }) {
  // On utilise uniquement le contexte
  const { cart, removeFromCart } = useCart();

  // Calcul du total (mémorisé pour éviter les erreurs)
  const total = cart.reduce((acc, item) => {
    // S'assure que le prix est un nombre
    const price = parseInt(String(item.price).replace(/\s/g, ''), 10);
    return acc + (isNaN(price) ? 0 : price);
  }, 0);

  // const {  addToCart, removeFromCart } = useCart();

  // const total = calculateTotal();

  const generateWhatsAppMessage = () => {
  const phoneNumber = "237676871669"; // Ton numéro WhatsApp au format international
  const siteUrl = "https://daily-glow-eta.vercel.app"; // L'URL de ton site en production
  
  let message = `Bonjour DailyGlow ! ✨\n\nJe souhaite passer une commande groupée :\n\n`;
  
  cart.forEach((item, index) => {
    // On s'assure d'avoir l'URL absolue de l'image pour que WhatsApp puisse la lire
    const imageUrl = item.image.startsWith('http') ? item.image : `${siteUrl}${item.image}`;
    
    message += `*${index + 1}. ${item.name}*\n`;
    message += ` Prix : ${item.price} FCFA\n`;
    message += ` Aperçu : ${imageUrl}\n\n`; // Le lien qui va générer la vignette pour le livreur
  });

  message += `*Total de la commande : ${total.toLocaleString()} FCFA*\n\n`;
  message += `Merci de me confirmer la disponibilité pour lancer la livraison.`;

  // Encodage propre pour l'URL WhatsApp
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

const [customerInfo, setCustomerInfo] = useState({
  name: '',
  location: ''
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setCustomerInfo(prev => ({ ...prev, [name]: value }));
};

return (
    <div className="min-h-screen bg-[#FFF0F0] pt-24 px-6 pb-20 text-[#2B0F1A]">
      <div className="max-w-3xl mx-auto">

        {/* Titre */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBackToShop} className="p-2 bg-white rounded-full transition-colors text-[#2B0F1A]">
            <ArrowLeft size={20}/>
          </button>
          <h1 className="font-serif text-3xl font-bold">Mon Écrin de Sélection</h1>
        </div>

        {cart.length > 0 ? (
           <div className="space-y-6">
             {/* Liste des articles */}
             <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-[#FCD7D7]/60 space-y-4">
               {cart.map((item, index) => (
                 <div key={index} className="flex items-center gap-4 py-4 border-b border-[#FFF0F0] last:border-0">
                   <div className="w-16 h-20 bg-[#FFF0F0] rounded-xl overflow-hidden flex-shrink-0">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-grow min-w-0">
                     <h3 className="font-serif text-sm font-medium text-[#2B0F1A] truncate">{item.name}</h3>
                     <p className="text-xs text-[#C5A059] font-medium mb-1">✦ {item.category}</p>
                     <p className="font-bold text-xs font-sans">{item.price} FCFA</p>
                   </div>
                   <button 
                     onClick={() => onRemoveFromCart(index)}
                     className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                   >
                     <Trash2 size={16} />
                   </button>
                 </div>
               ))}
             </div>

             {/* Fiche de Résumé Caisse */}
             <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-[#FCD7D7]/60">
               <div className="flex justify-between items-center mb-6">
                 <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Sous-total</span>
                 <span className="text-2xl font-serif font-bold text-[#2B0F1A]">{total.toLocaleString()} FCFA</span>
               </div>
              
               <a 
                 href={generateWhatsAppMessage()}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all text-center no-underline shadow-md"
               >
                 <MessageCircle size={18} />
                 Envoyer la commande finale via WhatsApp
               </a>
             </div>
           </div>
         ) : (
           <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-[#FCD7D7] p-8">
             <ShoppingBag className="mx-auto mb-4 text-[#C5A059]" size={40} />
             <p className="text-gray-400 italic mb-6">Votre panier est encore vide.</p>
             <button 
               onClick={onBackToShop}
               className="px-6 py-3 bg-[#2B0F1A] text-[#C5A059] text-xs font-bold rounded-xl hover:bg-[#C5A059] hover:text-white transition-all"
             >
               Parcourir les Collections
             </button>
           </div>
         )}
      </div>
    </div>
  );
}