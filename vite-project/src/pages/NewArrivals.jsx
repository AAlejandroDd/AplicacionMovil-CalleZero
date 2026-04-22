import React from 'react';
import './NewArrivals.css';

// Recibimos onProductClick desde App.js
const NewArrivals = ({ onBack, onProductClick }) => {
  const products = [
    { 
      id: 1, 
      name: 'Neon Matrix Oversized', 
      brand: 'CALLE ZERO', 
      price: 85, 
      previousPrice: 110, 
      tag: 'HOT', 
      image: '' // Pon la ruta de tu imagen aquí
    },
    { 
      id: 2, 
      name: 'Graphite Cargo Tech', 
      brand: 'CALLE ZERO', 
      price: 120, 
      tag: 'NEW',
      image: '' 
    },
    { 
      id: 3, 
      name: 'Zero Gravity', 
      brand: 'CALLE ZERO', 
      price: 95, 
      previousPrice: 125,
      image: ''
    },
    { 
      id: 4, 
      name: 'Midnight Script Graphic', 
      brand: 'CALLE ZERO', 
      price: 45,
      image: ''
    }
  ];

  return (
    <div className="new-arrivals-screen">
      {/* HEADER SEGÚN DISEÑO */}
      <header className="arrivals-header">
        <button className="back-btn" onClick={onBack}>‹</button>
        <h2>NUEVOS LANZAMIENTOS</h2>
        <div className="header-icons">
          <span>☰</span>
          <div className="cart-icon-wrapper">
            <span>👜</span>
            <span className="cart-badge">3</span>
          </div>
        </div>
      </header>

      {/* FILTROS */}
      <div className="filter-scroll-bar">
        <button className="filter-chip sort">Sort: Popular ▾</button>
        <span className="filter-divider">|</span>
        <button className="filter-chip selectable active">L ×</button>
        <button className="filter-chip selectable active">Black ×</button>
        <button className="clear-all">Clear All</button>
      </div>

      {/* GRID DE PRODUCTOS */}
      <div className="arrivals-grid">
        {products.map(product => (
          <div key={product.id} className="arrival-card">
            <div className="arrival-image-container">
              {/* Al hacer clic en la imagen también abre el detalle */}
              <div 
                className="arrival-img-placeholder" 
                onClick={() => onProductClick(product)}
              >
                {product.image && <img src={product.image} alt={product.name} />}
              </div>
              
              {product.tag && (
                <span className={`arrival-tag ${product.tag.toLowerCase()}`}>
                  {product.tag}
                </span>
              )}

              {/* BOTÓN + QUE ABRE EL DETALLE */}
              <button 
                className="add-btn-small" 
                onClick={() => onProductClick(product)}
              >
                +
              </button>
            </div>

            <div className="arrival-info">
              <p className="arrival-brand">{product.brand}</p>
              <h3 className="arrival-name">{product.name}</h3>
              <div className="arrival-price-row">
                <span className="current-price">${product.price}</span>
                {product.previousPrice && (
                  <span className="old-price">${product.previousPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NAVBAR INFERIOR */}
      <nav className="bottom-navbar">
        <div className="nav-item" onClick={onBack}>
          <span className="nav-icon">🏠</span>
          <small>Inicio</small>
        </div>
        <div className="nav-item">
          <span className="nav-icon">🔍</span>
          <small>Busqueda</small>
        </div>
        <div className="nav-item">
          <span className="nav-icon">👜</span>
          <small>Carrito</small>
        </div>
        <div className="nav-item">
          <span className="nav-icon">👤</span>
          <small>Perfil</small>
        </div>
      </nav>
    </div>
  );
};

export default NewArrivals;