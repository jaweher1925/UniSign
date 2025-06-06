import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import AvatarControl from './pages/AvatarControl';
import Aide from './pages/Aide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/avatar-control" element={<AvatarControl />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/Aide"  element={<Aide />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;