import React from 'react';
import './NewArrivals.css';
// Importamos los iconos de Lucide
import { ChevronLeft, Menu, ShoppingBag, Plus } from 'lucide-react';

const NewArrivals = ({ onBack, onProductClick }) => {
  const products = [
    { 
      id: 1, 
      name: 'Neon Matrix Oversized', 
      brand: 'CALLE ZERO', 
      price: 85, 
      previousPrice: 110, 
      tag: 'HOT', 
      image: '' 
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
      {/* HEADER REFINADO CON LUCIDE */}
      <header className="arrivals-header">
        <button className="back-btn" onClick={onBack}>
          <ChevronLeft size={24} color="white" />
        </button>
        <h2>NUEVOS LANZAMIENTOS</h2>
        <div className="header-icons">
          <Menu size={22} color="white" />
          <div className="cart-icon-wrapper">
            <ShoppingBag size={22} color="white" />
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

              {/* BOTÓN + CON LUCIDE */}
              <button 
                className="add-btn-small" 
                onClick={() => onProductClick(product)}
              >
                <Plus size={18} color="white" strokeWidth={3} />
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
    </div>
  );
};

export default NewArrivals;