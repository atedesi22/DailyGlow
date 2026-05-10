import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function ProductDetails({ product, onBack }) {
  
  // Fonction pour générer le lien WhatsApp personnalisé
  const handleWhatsAppOrder = () => {
    const phoneNumber = "2376XXXXXXXX"; // Ton numéro WhatsApp au format international
    const message = `Bonjour DailyGlow ! ✨\n\nJe suis intéressé(e) par cet article :\n- *Produit* : ${product.name}\n- *Prix* : ${product.price} FCFA\n- *Genre* : ${product.gender}\n\nEst-il toujours disponible pour une livraison ?`;
    
    // Encodage du message pour l'URL
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-20 px-6 pb-32 max-w-2xl mx-auto">
      {/* Bouton retour */}
      <button 
        onClick={onBack} 
        className="mb-6 p-2 hover:bg-pink-50 rounded-full transition-colors"
      >
        <ArrowLeft className="text-pink-950" />
      </button>

      {/* Image du produit */}
      <div className="aspect-[4/5] bg-pink-50 rounded-3xl overflow-hidden mb-8 shadow-sm">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
      </div>

      {/* Informations produit */}
      <div className="px-2">
        <h2 className="text-3xl font-serif text-pink-950 mb-2">{product.name}</h2>
        <p className="text-2xl text-pink-700 font-bold mb-6">{product.price} FCFA</p>
        
        <div className="prose prose-sm text-gray-600 mb-10 leading-relaxed">
          <p>
            Pièce d'exception issue de notre nouvelle collection **${product.gender}**. 
            Chaque détail a été pensé pour refléter l'élégance et le prestige. Finition artisanale garantie.
          </p>
        </div>
      </div>

      {/* Bouton WhatsApp fixe (Mobile Ready) */}
      <div className="fixed bottom-24 left-6 right-6 max-w-2xl mx-auto">
        <button 
          onClick={handleWhatsAppOrder}
          className="w-full bg-pink-950 text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-green-900/20 hover:bg-[#128C7E] transition-all active:scale-95"
        >
          <MessageCircle size={20} /> Commander via WhatsApp
        </button>
      </div>
    </div>
  );
}