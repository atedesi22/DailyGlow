const QUESTIONS = [
  { q: "Comment valider ma commande ?", a: "Un dépôt de garantie est requis. Le reste est payé à la livraison." },
  { q: "Quels sont les délais de livraison ?", a: "En général 24h à 48h selon votre localisation." },
];

export default function Faq() {
  return (
    <div className="pt-24 px-6">
      <h2 className="text-2xl font-serif mb-8">Questions Fréquentes</h2>
      <div className="space-y-6">
        {QUESTIONS.map((item, i) => (
          <div key={i} className="border-b border-pink-50 pb-4">
            <h4 className="font-bold text-pink-950 mb-2">{item.q}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}