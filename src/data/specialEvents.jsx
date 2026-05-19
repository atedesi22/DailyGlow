// src/data/specialEvents.js
export const currentEvent = {
  id: "fete_meres_2026",
  title: "Fête des Mères",
  themeColor: "#C5A059",
  bannerImage: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1920&auto=format&fit=crop",
  packs: [
    {
      id: "pack-elite",
      name: "Pack Élite",
      price: "20 000",
      description: "Le summum de l'élégance pour une maman d'exception. Un coffret complet pour briller en toute circonstance.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
      items: [
        { label: "Montre Chrono Or", icon: "Watch" },
        { label: "Gourmette Fine", icon: "Gem" },
        { label: "Collier Perle", icon: "Sparkles" },
        { label: "Boucles d'oreilles", icon: "Zap" },
        { label: "Foulard en Soie", icon: "Layers" },
        { label: "Carte de vœux personnalisée", icon: "Heart" }
      ]
    },
    {
      id: "pack-premium",
      name: "Pack Premium",
      price: "15 000",
      description: "Un coffret soigneusement sélectionné pour sublimer la beauté naturelle de votre maman.",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800",
      items: [
        { label: "Collier Perle", icon: "Sparkles" },
        { label: "Boucles d'oreilles", icon: "Zap" },
        { label: "Manchette Dorée", icon: "Gem" },
        { label: "Foulard en Soie", icon: "Layers" },
        { label: "Bijou personnalisé", icon: "Heart" },
        { label: "Carte de vœux personnalisée", icon: "Heart" }
      ]
    },
    {
      id: "pack-gold",
      name: "Pack Gold",
      price: "10 000",
      description: "Le best-seller de la collection, un équilibre parfait entre élégance et accessibilité.",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800",
      items: [
        { label: "Foulard de cou", icon: "Layers" },
        { label: "Manchette Dorée", icon: "Gem" },
        { label: "Boucles d'oreilles", icon: "Zap" },
        { label: "Collier Perle", icon: "Sparkles" },
        { label: "Carte de vœux personnalisée", icon: "Heart" }
      ]
    }
    // ... Ajoute les autres packs ici
  ]
};
