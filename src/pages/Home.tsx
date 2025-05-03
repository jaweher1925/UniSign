import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../components/Avatar';
import { LogIn, UserPlus } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            Ma Classe Inclusive
          </h1>
          
          <div className="w-64 h-64 mx-auto mb-8">
            <Avatar
              initialEmotion="happy"
              initialGesture="wave"
              animationSpeed="normal"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => navigate('/auth?mode=login')}
              className="flex items-center justify-center gap-3 bg-emerald-500 text-white text-xl rounded-2xl py-6 px-8 shadow-lg hover:bg-emerald-600 transition-colors"
            >
              <LogIn size={28} />
              Se connecter
            </button>

            <button
              onClick={() => navigate('/auth?mode=register')}
              className="flex items-center justify-center gap-3 bg-blue-500 text-white text-xl rounded-2xl py-6 px-8 shadow-lg hover:bg-blue-600 transition-colors"
            >
              <UserPlus size={28} />
              Créer un compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;