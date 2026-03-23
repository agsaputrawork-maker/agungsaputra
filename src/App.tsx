import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components (Global)
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Background from './components/Background';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="font-sans text-slate-400 bg-space-900 overflow-x-hidden antialiased selection:bg-cyan-500/30 selection:text-white min-h-screen flex flex-col">
        {/* Komponen Global (Akan muncul di semua halaman) */}
        <ScrollProgress />
        <Background />
        <Navbar />

        {/* Routing Logic */}
        <main className="flex-grow">
          <Routes>
            {/* Route Utama */}
            <Route path="/" element={<Home />} />
            
            {/* Route 404 (Menangkap semua URL yang tidak terdaftar) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer Global */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
