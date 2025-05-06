import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import GestureDetection from '../components/GestureDetection';
import { Mic, Volume2, Camera, Smile, Hand, Sparkles } from 'lucide-react';
import { AvatarProvider } from '../components/Avatar/AvatarContext';

const AvatarControl = () => {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50 to-mint-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-mint-800 mb-2 flex items-center justify-center gap-3">
            <Sparkles className="text-yellow-400" size={32} />
            Mon Ami Virtuel
            <Sparkles className="text-yellow-400" size={32} />
          </h1>
          <p className="text-mint-600 text-lg">
            Viens jouer avec ton avatar magique !
          </p>
        </header>

        <div className="mb-8 flex flex-col items-center">
          <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-mint-800 mb-4 text-center">Caméra</h2>
            <GestureDetection onlyCamera />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="bg-gradient-to-r from-mint-50 to-mint-100 rounded-2xl p-8 mb-4">
              <AvatarProvider
                initialEmotion="happy"
                initialGesture="wave"
                animationSpeed="normal"
              >
                <Avatar
                  initialEmotion="happy"
                  initialGesture="wave"
                  animationSpeed="normal"
                  showControls={true}
                />
                
                {!isSessionActive ? (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setIsSessionActive(true)}
                      className="bg-mint-500 hover:bg-mint-600 text-white text-xl font-bold py-4 px-8 rounded-full 
                               transform transition hover:scale-105 flex items-center gap-3 mx-auto"
                    >
                      <Camera size={24} />
                      Commencer l'Aventure !
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 mt-6">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => setIsCameraActive(!isCameraActive)}
                        className={`p-4 rounded-full ${
                          isCameraActive 
                            ? 'bg-red-500 hover:bg-red-600' 
                            : 'bg-mint-500 hover:bg-mint-600'
                        } text-white transition-colors`}
                      >
                        <Camera size={24} />
                      </button>
                      <button className="p-4 rounded-full bg-mint-500 hover:bg-mint-600 text-white transition-colors">
                        <Smile size={24} />
                      </button>
                      <button className="p-4 rounded-full bg-mint-500 hover:bg-mint-600 text-white transition-colors">
                        <Hand size={24} />
                      </button>
                    </div>
                    {isCameraActive && <GestureDetection />}
                  </div>
                )}
              </AvatarProvider>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-mint-800 mb-4 flex items-center gap-2">
                <Volume2 className="text-mint-600" size={24} />
                Traduction Magique
              </h3>
              <div className="flex items-center justify-between p-4 bg-mint-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Mic className="text-mint-600" size={24} />
                  <span className="text-mint-700 text-lg">Je parle...</span>
                </div>
                <div className="flex items-center gap-3">
                  <Volume2 className="text-mint-600" size={24} />
                  <span className="text-mint-700 text-lg">Je traduis...</span>
                </div>
              </div>
              <div className="mt-4 p-6 bg-mint-50 rounded-xl min-h-[120px] flex items-center justify-center">
                <p className="text-mint-600 text-lg">Les mots magiques apparaîtront ici...</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-mint-800 mb-4">
                Mes Super Pouvoirs
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-mint-50 p-4 rounded-xl text-center">
                  <span className="text-4xl mb-2 block">😊</span>
                  <p className="text-mint-700">Sourire</p>
                </div>
                <div className="bg-mint-50 p-4 rounded-xl text-center">
                  <span className="text-4xl mb-2 block">👋</span>
                  <p className="text-mint-700">Salut</p>
                </div>
                <div className="bg-mint-50 p-4 rounded-xl text-center">
                  <span className="text-4xl mb-2 block">👍</span>
                  <p className="text-mint-700">Super !</p>
                </div>
                <div className="bg-mint-50 p-4 rounded-xl text-center">
                  <span className="text-4xl mb-2 block">👆</span>
                  <p className="text-mint-700">Pointer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarControl;