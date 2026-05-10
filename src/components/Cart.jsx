import { X, Trash2, MessageCircle } from 'lucide-react';

export default function Cart({ isOpen, onClose, cartItems, onRemove }) {
  // Calcul de la somme totale
  const total = cartItems.reduce((sum, item) => {
    // On enlève les espaces dans "125 000" pour pouvoir le convertir en nombre
    const price = parseInt(item.price.replace(/\s/g, '')); 
    return sum + price;
  }, 0);

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

          <div className="border-t fixed bottom-28  border-pink-100 pt-26">
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
          </div>
        </div>
      </div>
    </div>
  );
}