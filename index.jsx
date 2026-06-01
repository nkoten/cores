import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from './components/Button.jsx';
import SideBarTile from './components/ui/SideBarTile.jsx';
import SideBar, { SideBarHeader } from './components/layout/SideBar.jsx';

const Home = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold text-amber-500">Home Page</h2>
    <Link to="/about" className="text-sky-400 underline mt-4 inline-block">
      Ir para About
    </Link>
    <Button label="NK-Botão Funcionando!" />
  </div>
);

const About = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold text-sky-500">About Page</h2>
    <Link to="/" className="text-amber-400 underline mt-4 inline-block">
      Voltar para Home
    </Link>
  </div>
);

function App() {
  return (
    <HashRouter>
      <nav className="p-4 bg-slate-800 flex gap-4 border-b border-slate-700">
        <Link to="/" className="hover:text-amber-400 transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-sky-400 transition-colors">
          About
        </Link>
      </nav>
      <SideBar className="">
        <SideBarHeader>header</SideBarHeader>
        <SideBarTile>tile</SideBarTile>
      </SideBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

createRoot(document.getElementById('app_root')).render(<App />);

