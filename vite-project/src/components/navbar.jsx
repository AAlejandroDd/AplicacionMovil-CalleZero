import React from 'react';
import { Home, Search, ShoppingBag, User } from 'lucide-react'; // Importación de Lucide
import './Navbar.css';

const Navbar = ({ activePage, onNavigate }) => {
  return (
    <nav className="bottom-navbar">
      <div 
        className={`nav-item ${activePage === 'home' ? 'active' : ''}`} 
        onClick={() => onNavigate('home')}
      >
        <Home size={24} color={activePage === 'home' ? '#8a70ff' : '#666'} />
        <small>Inicio</small>
      </div>
      
      <div 
        className={`nav-item ${activePage === 'discover' ? 'active' : ''}`} 
        onClick={() => onNavigate('discover')}
      >
        <Search size={24} color={activePage === 'discover' ? '#8a70ff' : '#666'} />
        <small>Búsqueda</small>
      </div>
      
      <div 
        className={`nav-item ${activePage === 'cart' ? 'active' : ''}`} 
        onClick={() => onNavigate('cart')}
      >
        <div className="badge-wrapper">
          <ShoppingBag size={24} color={activePage === 'cart' ? '#8a70ff' : '#666'} />
          <span className="nav-badge">3</span>
        </div>
        <small>Carrito</small>
      </div>
      
      <div 
        className={`nav-item ${activePage === 'profile' ? 'active' : ''}`} 
        onClick={() => onNavigate('profile')}
      >
        <User size={24} color={activePage === 'profile' ? '#8a70ff' : '#666'} />
        <small>Perfil</small>
      </div>
    </nav>
  );
};

export default Navbar;