import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function InstallButton() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPrompt(e); // Stocke l'événement pour l'utiliser plus tard
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  if (!installPrompt) return null; // Ne rien afficher si l'installation n'est pas possible

  return (
    <button 
      onClick={handleInstallClick}
      className="flex items-center gap-2 bg-orange-950 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform"
    >
      <Download size={18} />
      Installer DailyGlow
    </button>
  );
}