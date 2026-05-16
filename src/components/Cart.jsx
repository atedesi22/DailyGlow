import React, { useState } from 'react';
import { X, Trash2, MessageCircle } from 'lucide-react';

export default function Cart({ isOpen, onClose, cartItems, onRemove }) {
  // Calcul de la somme totale
  const total = cartItems.reduce((sum, item) => {
    // 1. On force la conversion en chaîne de caractères avec String()
    const priceString = String(item.price); 
    
    // 2. Maintenant on peut nettoyer les espaces en toute sécurité
    const cleanPrice = priceString.replace(/\s/g, ''); 
    
    // 3. On convertit en entier pour l'addition
    return sum + parseInt(cleanPrice, 10);
  }, 0);

  const generateWhatsAppMessage = (cartItems, total) => {
  const phoneNumber = "237676871669"; // Ton numéro WhatsApp au format international
  const siteUrl = "https://daily-glow-eta.vercel.app"; // L'URL de ton site en production
  
  let message = `Bonjour DailyGlow ! ✨\n\nJe souhaite passer une commande groupée :\n\n`;
  
  cartItems.forEach((item, index) => {
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
    <div className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      
      {/* Cart Panel */}
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif text-pink-950">Mon Panier</h2>
            <button onClick={onClose}><X className="text-gray-400" /></button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 mb-6 pb-6 border-b border-pink-50">
                <img src={item.image} className="w-20 h-20 object-cover rounded-lg bg-pink-50" />
                <div className="flex-1">
                  <h4 className="font-serif text-pink-950">{item.name}</h4>
                  <p className="text-pinck-700 font-bold">{item.price} FCFA</p>
                </div>
                <button className="text-gray-300 hover:text-red-500"><Trash2 size={18} /></button>
              </div>
            ))}
          </div>

          {/* <div className="border-t fixed bottom-28  border-pink-100 pt-26">
            <div className="flex justify-between mb-4 text-xl font-serif">
              <span>Total</span>
              <span className="text-red-950">{total} FCFA</span>
            </div>
            <p className="text-xs text-gray-500 mb-6 italic text-center">
              * Le dépôt de garantie est requis pour valider la commande.
            </p>
            <button className="w-full bg-pink-950 fixed bottom-28  text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl z-40 hover:bg-black transition">
              <MessageCircle size={20} />
              Commander via WhatsApp
            </button>
          </div> */}

          <div className="border-t border-orange-100 pt-6 mt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="uppercase text-xs tracking-widest text-gray-400">Total à payer</span>
              <span className="text-xl font-bold text-orange-950">
                {total.toLocaleString()} FCFA
              </span>
            </div>
  
            <a 
              href={generateWhatsAppMessage(cartItems, total)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-pink-950 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-900/10"
            >
              <MessageCircle size={20} />
              Commander via WhatsApp
            </a>
            
            <p className="text-[10px] text-center text-gray-400 mt-4 italic">
              Vous allez être redirigé vers notre service client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}