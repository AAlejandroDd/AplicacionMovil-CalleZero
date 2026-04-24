import React from 'react';
import './Header.css';
import { Search, Bell, ShoppingBag } from 'lucide-react';
// Asegúrate de que esta ruta sea correcta y la imagen exista
import logoImg from '../assets/Image.jpg'; 

const Header = ({ onSearchClick, onCartClick, onProfileClick }) => {
  return (
    <header className="main-header">
      {/* Forzamos el tamaño del contenedor para evitar el desborde */}
      <div className="header-logo-container" onClick={onProfileClick} style={{ cursor: 'pointer' }}>
        <img src={logoImg} alt="Calle Zero" className="header-logo-img" />
      </div>
      
      <div className="header-right">
        {/* BUSCADOR */}
        <button className="icon-btn search-trigger" onClick={onSearchClick} type="button">
          <Search size={22} color="white" strokeWidth={2.5} />
        </button>

        {/* NOTIFICACIONES */}
        <button className="icon-btn" type="button">
          <div className="icon-wrapper">
            <Bell size={22} color="white" strokeWidth={2.5} />
            <span className="badge">2</span>
          </div>
        </button>

        {/* CARRITO */}
        <button className="icon-btn" type="button" onClick={onCartClick} >
          <div className="icon-wrapper">
            <ShoppingBag size={22} color="white" strokeWidth={2.5} />
            <span className="badge">3</span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;