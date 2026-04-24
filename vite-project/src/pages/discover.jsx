// src/pages/Discover.jsx
import React from 'react';
import './Discover.css';
import { Search } from 'lucide-react';

// 1. IMPORTA TUS IMÁGENES DE TENDENCIAS AQUÍ
// import trendHoodiesImg from '../assets/trend-hoodies.jpg';
// import trendSneakersImg from '../assets/trend-sneakers.jpg';
// import trendTeesImg from '../assets/trend-tees.jpg';
// import trendAccsImg from '../assets/trend-accs.jpg';
// import staffHoodieImg from '../assets/staff-hoodie.jpg';
// import staffCargoImg from '../assets/staff-cargo.jpg';

const Discover = ({ onBack }) => {
  return (
    <div className="discover-screen">
      
      {/* HEADER DE DESCUERBRIR (Con flecha y filtro) */}
      <header className="discover-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <h2>DESCUBRIR</h2>
        <button className="filter-btn">⌥</button> {/* Icono temporal de filtro */}
      </header>

      {/* BARRA DE BÚSQUEDA */}
      <div className="search-bar-container">
        <div className="search-bar-wrapper">
          <Search size={22} color="white" strokeWidth={2.5} />
          <input type="text" placeholder="Busca sneakers, hoodies, art..." />
        </div>
      </div>

      {/* BÚSQUEDAS RECIENTES */}
      <section className="discover-section recent-section">
        <div className="section-header-row">
          <h3>BÚSQUEDAS RECIENTES</h3>
          <button className="clear-all-btn">Eliminar Todo</button>
        </div>
        <div className="chips-container">
          <div className="search-chip">🕒 Vintage Hoodies <span className="close-chip">×</span></div>
          <div className="search-chip">🕒 Dunk Low <span className="close-chip">×</span></div>
        </div>
      </section>

      {/* TRENDING NOW (Grid de 2x2) */}
      <section className="discover-section trending-section">
        <h3> TRENDING NOW</h3>
        <div className="trending-grid">
          
          {/* Item 1 */}
          <div className="trend-card">
            {/* SUSTITUYE SRC POR TU IMAGEN IMPORTADA */}
            <img src="" alt="Hoodies" className="trend-bg-img" /> 
            <div className="trend-text-overlay">
              <span className="trend-count">240+ ITEMS</span>
              <h4 className="trend-title">ESSENTIAL HOODIES</h4>
            </div>
            <span className="trend-arrow">↗</span>
          </div>

          {/* Item 2 */}
          <div className="trend-card">
            <img src="" alt="Sneakers" className="trend-bg-img" />
            <div className="trend-text-overlay">
              <span className="trend-count">1.2K ITEMS</span>
              <h4 className="trend-title">SNEAKERS</h4>
            </div>
            <span className="trend-arrow">↗</span>
          </div>
          
          {/* Item 3 */}
          <div className="trend-card">
            <img src="" alt="Camisetas" className="trend-bg-img" />
            <div className="trend-text-overlay">
              <span className="trend-count">850+ ITEMS</span>
              <h4 className="trend-title">CAMISETAS GRÁFICAS</h4>
            </div>
            <span className="trend-arrow">↗</span>
          </div>
          
          {/* Item 4 */}
          <div className="trend-card">
            <img src="" alt="Accesorios" className="trend-bg-img" />
            <div className="trend-text-overlay">
              <span className="trend-count">45 ITEMS</span>
              <h4 className="trend-title">ACCESORIOS</h4>
            </div>
            <span className="trend-arrow">↗</span>
          </div>
          
        </div>
      </section>

      {/* SELECCIONES DEL PERSONAL (Igual que en Home) */}
      <section className="discover-section staff-pick-section">
        <div className="section-header-row">
          <h3>SELECCIONES DEL PERSONAL</h3>
          <a href="#" className="see-all-link">Ver Todo</a>
        </div>
        
        {/* Usamos el mismo estilo de grid que en Home para los productos */}
        <div className="home-products-grid">
          {/* Producto 1 */}
          <div className="product-card">
             <div className="product-card-image-wrapper">
               <img src="" alt="Hoodie" className="product-card-img" />
               <span className="product-card-badge">HOT DROP</span>
             </div>
             <div className="product-card-info">
               <p className="product-card-brand">CALLE ZERO</p>
               <h3 className="product-card-name">Void Graphic Hoodie</h3>
               <div className="product-card-price-row">
                 <span className="product-card-current-price">$120.00</span>
               </div>
             </div>
          </div>
          
          {/* Producto 2 */}
          <div className="product-card">
             <div className="product-card-image-wrapper">
               <img src="" alt="Cargo Pants" className="product-card-img" />
             </div>
             <div className="product-card-info">
               <p className="product-card-brand">URBAN ARCHIVE</p>
               <h3 className="product-card-name">Canvas Cargo V2</h3>
               <div className="product-card-price-row">
                 <span className="product-card-current-price">$85.00</span>
                 <span className="product-card-old-price">$110.00</span>
               </div>
             </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Discover;