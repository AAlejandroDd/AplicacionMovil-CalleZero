import React from 'react';
import Header from '../components/header';
import ProductCard from '../components/productCard';
import './home.css';

import heroImg from '../assets/HomePrincipal.webp'; 

// AGREGAMOS onExplore aquí arriba para recibir la función
const Home = ({ onSearch, onExplore }) => {
  
  const hotDrops = [
    { 
      id: 1, 
      image: '', 
      brand: 'CALLE ORIGINALS', 
      name: 'Oversized "ZERO" Hoodie', 
      price: 85.00, 
      badge: 'NUEVO' 
    },
    { 
      id: 2, 
      image: '', 
      brand: 'VOID SECTOR', 
      name: 'Nightshade Cargo V1', 
      price: 120.00, 
      badge: '20% DESCUENTO',
      previousPrice: 150.00 
    },
  ];

  const recommended = [
    { id: 3, image: '', brand: 'CALLE ZERO', name: 'Void Graphic Tee', price: 45.00 },
    { id: 4, image: '', brand: 'URBAN ARCHIVE', name: 'Canvas Cargo V2', price: 85.00 },
  ];

  return (
    <div className="home-page">
      <Header onSearchClick={onSearch} />

      <main className="home-main-content">
        
        {/* BANNER PRINCIPAL */}
        <section className="hero-banner">
          <img src={heroImg} alt="Banner" className="banner-bg" />
          <div className="banner-overlay">
            <span className="banner-badge">ENTREGA LIMITADA</span>
            <h1 className="banner-title">ARCHIVO DE VERANO 26'</h1>
            <p className="banner-subtitle">DISPONIBLE SOLO POR 48 HORAS</p>
            {/* Ahora onExplore ya está definido y no dará error */}
            <button className="banner-btn" onClick={onExplore}>Explorar</button>
          </div>
        </section>

        {/* HOT DROPS */}
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">HOT DROPS</h2>
            <button className="see-all-btn">Ver Todos</button>
          </div>
          
          <div className="home-horizontal-scroll">
            {hotDrops.map(prod => (
              <div key={prod.id} className="scroll-item-wrapper">
                <ProductCard {...prod} />
              </div>
            ))}
          </div>
        </section>

        {/* RECOMENDADO */}
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">RECOMENDADO</h2>
          </div>
          
          <div className="home-products-grid">
            {recommended.map(prod => (
              <ProductCard key={prod.id} {...prod} />
            ))}
          </div>
        </section>

      </main>

      <button className="fab-btn">+</button>

      <nav className="bottom-navbar">
        <div className="nav-item active">
          <span className="nav-icon">🏠</span>
          <small>Inicio</small>
        </div>
        
        <div className="nav-item" onClick={onSearch}>
          <span className="nav-icon">🔍</span>
          <small>Busqueda</small>
        </div>
        
        <div className="nav-item">
          <div className="badge-wrapper">
            <span className="nav-icon">👜</span>
            <span className="nav-badge">9</span>
          </div>
          <small>Carrito</small>
        </div>
        
        <div className="nav-item profile-active">
          <span className="nav-icon">👤</span>
          <small>Perfil</small>
        </div>
      </nav>
    </div>
  );
};

export default Home;