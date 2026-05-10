import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function ProductDetails({ product, onBack }) {
  
  // Fonction pour générer le lien WhatsApp direct pour ce produit précis
  const getWhatsAppLink = () => {
    const phoneNumber = "2376XXXXXXXX"; // Ton numéro WhatsApp (format international)
    const message = `Bonjour DailyGlow ! ✨\n\nJe suis intéressé par l'article suivant :\n` +
                    `- Produit : *${product.name}*\n` +
                    `- Prix : *${product.price} FCFA*\n` +
                    `- Catégorie : ${product.gender}\n\n` +
                    `Est-il toujours disponible ? Merci !`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 left-6 right-6 md:static bg-pink-950 text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-green-900/10 hover:bg-[#128C7E] transition-all active:scale-95"
      >
        <MessageCircle size={20} /> Commander via WhatsApp
      </a>
    </div>
  );
}