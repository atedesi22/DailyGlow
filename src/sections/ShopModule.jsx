import React, { useState } from 'react';
import { ChevronLeft, ShoppingBag, Star, Share2, Info } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function ShopModule() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);

    // Fonction pour ajouter au localStorage
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        localStorage.setItem('dailyglow_cart', JSON.stringify(newCart));
        alert(`${product.name} ajouté au panier !`);
    };

    // --- VUE CATALOGUE ---
    if (!selectedProduct) {
        return (
            <div className="pt-24 px-6 max-w-7xl mx-auto pb-20">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-serif text-orange-950">Le Catalogue</h2>
                    <p className="text-gray-500">Trouvez la pièce qui vous fera briller.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-orange-50 rounded-2xl p-3 hover:shadow-xl transition group cursor-pointer"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                                <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                <span className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-md text-[10px] font-bold text-orange-700 uppercase">
                                    {product.category}
                                </span>
                            </div>
                            <h4 className="font-medium text-gray-900 truncate">{product.name}</h4>
                            <p className="text-orange-800 font-bold">{product.price.toLocaleString()} FCFA</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // --- VUE DÉTAILS PRODUIT ---
    return (
        <div className="pt-28 px-6 max-w-6xl mx-auto pb-20 animate-in fade-in duration-500">
            <button
                onClick={() => setSelectedProduct(null)}
                className="flex items-center gap-2 text-gray-500 hover:text-orange-800 mb-8 transition"
            >
                <ChevronLeft size={20} /> Retour au catalogue
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image */}
                <div className="rounded-3xl overflow-hidden bg-gray-100 aspect-square">
                    <img src={selectedProduct.image} className="w-full h-full object-cover" />
                </div>

                {/* Contenu */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <span className="text-orange-600 font-bold text-sm tracking-widest uppercase">{selectedProduct.category}</span>
                        <h2 className="text-4xl font-serif text-orange-950 mt-2">{selectedProduct.name}</h2>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="flex text-orange-400"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                            <span className="text-sm text-gray-400">(24 avis clients)</span>
                        </div>
                    </div>

                    <p className="text-2xl font-bold text-gray-900 mb-6">{selectedProduct.price.toLocaleString()} FCFA</p>

                    <div className="bg-orange-50 p-4 rounded-xl mb-8 border border-orange-100">
                        <p className="text-gray-700 leading-relaxed italic text-sm">
                            "{selectedProduct.description}"
                        </p>
                    </div>

                    <div className="space-y-4 mb-10">
                        <h5 className="font-bold flex items-center gap-2"><Info size={18} /> Détails du produit</h5>
                        <ul className="grid grid-cols-1 gap-2">
                            {selectedProduct.details.map((detail, idx) => (
                                <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div> {detail}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-auto space-y-4">
                        <button
                            onClick={() => addToCart(selectedProduct)}
                            className="w-full bg-orange-950 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition flex items-center justify-center gap-3 shadow-lg shadow-orange-900/20"
                        >
                            <ShoppingBag size={22} /> Réserver (Dépôt requis)
                        </button>

                        <div className="flex gap-4">
                            <button className="flex-1 border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 transition">
                                <Share2 size={16} /> Partager
                            </button>
                            <div className="flex-[2] bg-green-50 text-green-700 px-4 py-3 rounded-xl flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-tighter border border-green-100">
                                L'arrivage arrive bientôt !
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 text-[11px] text-gray-400 text-center uppercase tracking-widest">
                        Rappel : La livraison est au frais du client
                    </p>
                </div>
            </div>
        </div>
    );
}