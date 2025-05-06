import React from 'react';
import { useNavigate } from 'react-router-dom';

import { LogIn, UserPlus } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 flex items-center justify-center">
      {/* Conteneur principal */}
      <div className="text-center max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Titre principal (plus grand) */}
        <h1 className="text-8xl font-black text-emerald-800 tracking-wide mb-6">
          UNISIGN
        </h1>

        {/* Sous-titre (plus grand) */}
        <h2 className="text-3xl font-semibold text-emerald-700 mb-12">
          Quand la main parle, la classe écoute
        </h2>

        {/* Image statique (plus grande) */}
        <img
          src="/pdf/avatar.png" // Chemin vers l'image dans le dossier public
          alt="Avatar"
          className="w-96 h-96 mx-auto mb-12 rounded-full shadow-2xl border-8 border-emerald-300"
        />

        {/* Boutons d'action (plus grands) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/auth?mode=login')}
            className="flex items-center justify-center gap-4 bg-emerald-500 text-white text-2xl font-bold rounded-3xl py-8 px-12 shadow-xl hover:bg-emerald-600 transition-all duration-300"
          >
            <LogIn size={36} />
            Se connecter
          </button>

          <button
            onClick={() => navigate('/auth?mode=register')}
            className="flex items-center justify-center gap-4 bg-blue-500 text-white text-2xl font-bold rounded-3xl py-8 px-12 shadow-xl hover:bg-blue-600 transition-all duration-300"
          >
            <UserPlus size={36} />
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;