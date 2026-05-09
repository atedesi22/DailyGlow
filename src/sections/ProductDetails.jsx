import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function ProductDetails({ product, onBack }) {
  return (
    <div className="pt-20 px-6 pb-32">
      <button onClick={onBack} className="mb-6"><ArrowLeft /></button>
      <div className="aspect-[4/5] bg-orange-50 rounded-3xl overflow-hidden mb-8">
        <img src={product.image} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-3xl font-serif text-orange-950 mb-2">{product.name}</h2>
      <p className="text-2xl text-orange-700 font-bold mb-6">{product.price} FCFA</p>
      <div className="prose prose-sm text-gray-600 mb-10">
        <p>Pièce d'exception issue de notre nouvelle collection {product.gender}. Finition artisanale garantie.</p>
      </div>
      <button className="fixed bottom-24 left-6 right-6 bg-orange-950 text-white py-4 rounded-2xl flex items-center justify-center gap-3">
        <MessageCircle size={20} /> Commander via WhatsApp
      </button>
    </div>
  );
}