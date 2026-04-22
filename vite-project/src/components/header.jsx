import React from 'react';
import './Header.css';
// Importa tus iconos correctamente
import searchIcon from '../assets/icon-search.png';
import logoImg from '../assets/Image.jpg'; 

const Header = ({ onSearchClick }) => {
  return (
    <header className="main-header">
      <div className="header-left">
        <img src={logoImg} alt="Calle Zero" className="logo-img" />
      </div>
      
      <div className="header-right">
        {/* IMPORTANTE: El onClick debe llamar a onSearchClick 
          que es la prop que viene desde Home.jsx
        */}
        <button 
          className="icon-btn search-trigger" 
          onClick={onSearchClick}
          type="button"
        >
          <img src={searchIcon} alt="Buscar" className="header-icon-img" />
        </button>

        <button className="icon-btn" type="button">
          <span className="emoji-icon">🔔</span>
          <span className="badge">2</span>
        </button>

        <button className="icon-btn" type="button">
          <span className="emoji-icon">👜</span>
          <span className="badge">3</span>
        </button>
      </div>
    </header>
  );
};

export default Header;