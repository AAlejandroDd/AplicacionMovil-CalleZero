// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import './Home.css';

// IMPORTANTE: Importa tus imágenes aquí para usarlas abajo
 import bannerImg from '../assets/HomePrincipal.webp';
// import hoodieImg from '../assets/hoodie.jpg';

const Home = () => {
  // Datos de ejemplo para los productos (luego vendrán de una API)
  const hotDrops = [
    { id: 1, image: '', brand: 'CALLE ORIGINALS', name: 'Oversized "ZERO" Hoodie', price: 85.00, badge: 'NUEVO' },
    { id: 2, image: '', brand: 'VOID SECTOR', name: 'Nightshade Cargo V1', price: 120.00, badge: '20% DESCUENTO' },
  ];

  const recommended = [
    { id: 3, image: '', brand: 'CALLE ZERO', name: 'Graphic Tee', price: 45.00 },
    { id: 4, image: '', brand: 'CALLE ZERO', name: 'Classic Cap', price: 30.00 },
  ];

  const categories = ['Hoodies', 'Kicks', 'Cargo', 'Camisas', 'Accesorios'];

  return (
    <div className="home-page">
      <Header />

      <main className="home-main-content">
        {/* BANNER PRINCIPAL (Basado en image_5.png) */}
        <section className="hero-banner">
          {/* Pon la ruta de la imagen en src */}
          <img src={bannerImg} alt="Archivo de Verano" className="banner-bg" />
          <div className="banner-overlay">
            <div className="banner-text">
              <span className="banner-badge">ENTREGA LIMITADA</span>
              <h1 className="banner-title">ARCHIVO DE VERANO 26'</h1>
              <p className="banner-subtitle">DISPONIBLE SOLO POR 48 HORAS</p>
            </div>
            <button className="banner-btn">Explorar</button>
          </div>
        </section>

        {/* HOT DROPS (Basado en image_7.png, scroll horizontal) */}
        <section className="home-section hot-drops-section">
          <div className="section-header">
            <h2 className="section-title">HOT DROPS</h2>
            <a href="#" className="see-all">Ver Todos</a>
          </div>
          <div className="horizontal-scroll-container">
            {hotDrops.map(product => (
              <div key={product.id} className="scroll-item">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORÍAS (Chips, basado en image_7.png) */}
        <section className="home-section categories-section">
          <div className="category-chips-container">
            {categories.map(cat => (
              <button key={cat} className="category-chip">{cat}</button>
            ))}
          </div>
        </section>

        {/* RECOMENDADO (Grid, basado en image_8.png) */}
        <section className="home-section recommended-section">
          <div className="section-header">
            <h2 className="section-title">RECOMENDADO</h2>
          </div>
          <div className="products-grid-container">
            {recommended.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      {/* BOTÓN FLOTANTE + */}
      <button className="fab-add-btn">+</button>

      {/* NAVBAR FIJO (Basado en image_6.png) */}
      <nav className="bottom-navbar">
        <button className="nav-link active">
          <span>🏠</span> Inicio
        </button>
        <button className="nav-link">
          <span>🔍</span> Busqueda
        </button>
        <button className="nav-link badge-link">
          <span>👜</span> Carrito
          <span className="nav-badge">9</span>
        </button>
        <button className="nav-link profile-link">
          <span>👤</span> Perfil
        </button>
      </nav>
    </div>
  );
};

export default Home;