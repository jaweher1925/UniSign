import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Avatar from '../components/Avatar';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('mode') || 'login');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 py-12 px-4 pt-80">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="flex mb-4  mt-50">
          <button
            className={`flex-1 py-4 text-lg font-medium transition-colors ${
              activeTab === 'login'
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          
            onClick={() => setActiveTab('login')}
          >
            Se connecter
          </button>
          <button
            className={`flex-1 py-4 text-lg font-medium transition-colors ${
              activeTab === 'register'
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('register')}
          >
            S'inscrire
          </button>
        </div>

        <div className="p-8">
          <div className="w-40 h-40 mx-auto ">
            <Avatar
              initialEmotion="happy"
              initialGesture="wave"
              animationSpeed="normal"
            />
          </div>
          <img
          src="/pdf/avatar.png" //
          alt="Avatar"
          className='mt-0'
         
        />

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-emerald-500 text-white text-lg rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors"
            >
              Entrer dans ma classe !
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;