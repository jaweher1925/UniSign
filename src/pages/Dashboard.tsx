import React, { useState } from 'react';
import { Video, Play, UserCircle, HelpCircle, Calendar as CalendarIcon } from 'lucide-react';
import Avatar from '../components/Avatar';
import Calendar from './Calendar';
import { useNavigate } from 'react-router-dom';






const DashboardButton = ({ icon: Icon, label, emoji, onClick }: { icon: any, label: string, emoji: string, onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-4 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="w-20 h-20 flex items-center justify-center bg-emerald-100 rounded-2xl">
      <Icon size={40} className="text-emerald-600" />
    </div>
    <div className="text-center">
      <span className="text-2xl mb-2 block">{emoji}</span>
      <span className="text-xl font-medium text-gray-700">{label}</span>
    </div>
  </button>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold text-emerald-800 mb-2 mt-12">
            Bienvenue dans ta classe !
          </h1>
          <div >
          <img
          src="/pdf/avatar.png" // Chemin vers l'image dans le dossier public
          alt="Avatar"
          className="w-96 h-96 mx-auto mb-12 rounded-full shadow-2xl border-8 border-emerald-300"
        />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardButton
            icon={CalendarIcon}
            label="Ma classe"
            emoji="📅"
            onClick={() => setShowCalendar(true)}
          />
          <DashboardButton
            icon={Play}
            label="Commencer"
            emoji="🎮"
            onClick={() => window.open('https://3d.kalidoface.com', '_blank')}
          />
          <DashboardButton
            icon={UserCircle}
            label="Mon profil"
            emoji="👤"
            onClick={() => { }}
          />
          <DashboardButton
            icon={HelpCircle}
            label="Aide"
            emoji="❓"
            onClick={() => navigate('/Aide')}
          />

        </div>

        {showCalendar && (
          <div className="mt-8">
            <Calendar />
          </div>
        )}
      </div>
      <img
        src="/pdf/avatar.png"
        alt="Avatar"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 80,
          height: 80,
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default Dashboard;