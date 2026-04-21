import React from 'react';
import './Header.css';
//import logoImg from '../assets/homePrincipal.webp'; 
 import searchIcon from '../assets/icon-search.png';
// import bellIcon from '../assets/icon-bell.svg';
// import bagIcon from '../assets/icon-bag.svg';

const Header = ({ onSearchClick }) => {
  return (
    <header className="main-header">
      <div className="header-left">
        {searchIcon}
        <img src="" alt="Calle Zero" className="logo-img" />
      </div>
      
      <div className="header-right">
        <button className="icon-btn" onClick={onSearchClick}>
          <span>🔍</span> 
        </button>
        <button className="icon-btn">
          <span>🔔</span>
          <span className="badge">2</span>
        </button>
        <button className="icon-btn">
          <span>👜</span>
          <span className="badge">3</span>
        </button>
      </div>
    </header>
  );
};

export default Header;