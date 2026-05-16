import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function ProductDetails({ product, onBack, cartItems, total }) {
  
  // Fonction pour générer le lien WhatsApp direct pour ce produit précis
  const generateWhatsAppMessage = (cartItems, total) => {
  const phoneNumber = "237676871669"; // Ton numéro WhatsApp au format international
  const productImageUrl = `https://daily-glow-eta.vercel.app${product.image}`;

  let message = `Bonjour DailyGlow ! ✨\n\nJe souhaite commander cet article :\n`;
    message += `- *${product.name}*\n`;
    message += `- *Prix : ${product.price} FCFA*\n`;
    message += `- Collection : ${product.gender}\n\n`;
    message += `Voir le produit : ${productImageUrl}`;
    message += `\n\nEst-il toujours disponible ? Merci !`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="pt-20 px-6 pb-32 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Bouton Retour */}
      <button 
        onClick={onBack} 
        className="mb-6 p-2 hover:bg-pink-50 rounded-full transition-colors"
      >
        <ArrowLeft className="text-pink-950" />
      </button>

      {/* Image Produit */}
      <div className="aspect-[4/5] bg-pink-50 rounded-3xl overflow-hidden mb-8 shadow-sm">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" 
        />
      </div>

      {/* Infos Produit */}
      <h2 className="text-3xl font-serif text-pink-950 mb-2">{product.name}</h2>
      <p className="text-2xl text-pink-700 font-bold mb-6">{product.price} FCFA</p>
      
      <div className="prose prose-sm text-gray-600 mb-10 leading-relaxed">
        <p>
          Pièce d'exception issue de notre nouvelle collection {product.gender}. 
          Finition artisanale garantie pour une brillance et une durabilité incomparables.
        </p>
      </div>

      {/* Bouton de Commande WhatsApp Fixe */}
      <a 
        href={generateWhatsAppMessage(cartItems, total)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-pink-950 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-900/10"
      >
        <MessageCircle size={20} />
        Commander via WhatsApp
      </a>
    </div>
  );
}