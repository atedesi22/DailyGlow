export default function Auth({ onLogin }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#FFFDFB]">
      <div className="w-full max-w-sm text-center">
        <h2 className="text-3xl font-serif mb-2 text-pink-950">Bienvenue</h2>
        <p className="text-gray-500 text-sm mb-10">Accédez à l'univers DailyGlow via votre NovaID</p>
        
        <button 
          onClick={onLogin}
          className="w-full bg-black text-white py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-900 transition"
        >
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs italic">N</div>
          Se connecter avec NovaVerse
        </button>
        
        <p className="mt-8 text-xs text-gray-400">Un seul compte pour tout l'écosystème Nova.</p>
      </div>
    </div>
  );
}