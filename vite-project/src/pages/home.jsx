import React from 'react';
import Header from '../components/header';
import ProductCard from '../components/productCard';
import Navbar from '../components/Navbar';
import HoddieZero from '../assets/HoddieZero.jpg'
import Cargo from '../assets/Cargos.jpg'
import './home.css';

import AcidTee from '../assets/acid.jpg'
import cyber from '../assets/cyber.jpg'
import voidd from '../assets/void.jpg'
import canvas from '../assets/canvas.jpg'

import heroImg from '../assets/HomePrincipal.webp'; 

const Home = ({ onSearch, onExplore, onProductClick, onCart, onProfile }) => {
  
  const categories = ["Hoodies", "Kicks", "Cargo", "Camisas"];

  const hotDrops = [
    { 
      id: 1, 
      image: HoddieZero, 
      brand: 'CALLE ORIGINALS', 
      name: 'Oversized "ZERO" Hoodie', 
      price: 85.00, 
      badge: 'NUEVO' 
    },
    { 
      id: 2, 
      image: Cargo, 
      brand: 'VOID SECTOR', 
      name: 'Nightshade Cargo V1', 
      price: 120.00, 
      badge: '20% DESCUENTO' 
    },
  ];

  const recommended = [
    { 
      id: 3, 
      image: AcidTee, // <-- Variable importada arriba
      brand: 'CALLE ZERO', 
      name: 'Acid Wash Graphic Tee', 
      price: 45.00, 
      badge: 'NUEVO INGRESO' 
    },
    { 
      id: 4, 
      image: cyber, 
      brand: 'VOID SECTOR', 
      name: 'Cybernetic Beanie', 
      price: 30.00 
    },
    { 
      id: 5, 
      image: voidd, 
      brand: 'CALLE ZERO', 
      name: 'Void Graphic Hoodie', 
      price: 120.00, 
      badge: 'HOT DROP' 
    },
    { 
      id: 6, 
      image: canvas, 
      brand: 'ARCHIVO URBANO', 
      name: 'Canvas Cargo V2', 
      price: 85.00 
    },
  ];
  return (
    <div className="home-page">
      <Header 
        onSearchClick={onSearch} 
        onCartClick={onCart} 
        onProfileClick={onProfile} 
      />

      <main className="home-main-content">
        {/* SECCIÓN HERO */}
        <section className="hero-banner">
          <img src={heroImg} alt="Summer Archive 26" className="banner-bg" />
          <div className="banner-overlay">
            <span className="banner-badge">ENTREGA LIMITADA</span>
            <h1 className="banner-title">ARCHIVO DE VERANO 26'</h1>
            <button className="banner-btn" onClick={onExplore}>Explorar</button>
          </div>
        </section>

        {/* SECCIÓN HOT DROPS */}
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">HOT DROPS</h2>
            <button className="see-all-btn" onClick={onExplore}>Ver Todos</button>
          </div>
          <div className="home-horizontal-scroll">
            {hotDrops.map(prod => (
              <div key={prod.id} className="scroll-item-wrapper">
                <ProductCard {...prod} onAddClick={() => onProductClick(prod)} />
              </div>
            ))}
          </div>
        </section>

        {/* FILTROS DE CATEGORÍAS */}
        <div className="category-filters">
          {categories.map(cat => (
            <button key={cat} className="filter-chip">{cat}</button>
          ))}
        </div>

        {/* SECCIÓN RECOMENDADO */}
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">RECOMENDADO</h2>
            <span className="filter-link">Filtrar</span>
          </div>
          <div className="home-products-grid">
            {recommended.map(prod => (
              <ProductCard key={prod.id} {...prod} onAddClick={() => onProductClick(prod)} />
            ))}
          </div>
        </section>
      </main>

      {/* BOTÓN FLOTANTE (FAB) */}
      <button className="floating-action-btn">+</button>

      <Navbar 
        activePage="home" 
        onNavigate={(page) => {
          if (page === 'home') return;
          if (page === 'discover') onSearch();
          if (page === 'cart') onCart();
          if (page === 'profile') onProfile();
        }} 
      />
    </div>
  );
};

export default Home;