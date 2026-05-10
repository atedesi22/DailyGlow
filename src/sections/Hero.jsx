import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero({ onExplore }) {
    return (
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-50 to-white">
            <div className="max-w-6xl mx-auto text-center">
                <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold mb-4 tracking-widest uppercase">
                    Votre nouveau rendez-vous éclat
                </span>
                <h2 className="text-5xl md:text-7xl font-serif text-pink-950 mb-6 leading-tight">
                    Brillez au quotidien avec <br /> <span className="italic text-pink-700">Daily Glow</span>
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg">
                    Parfums envoûtants et bijoux élégants sélectionnés pour sublimer chaque instant de votre vie.
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onExplore}
                        className="bg-pink-900 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition shadow-xl"
                    >
                        Explorer le catalogue
                    </button>
                </div>
            </div>
        </section>
    );
}