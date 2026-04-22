import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, onBack }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  // Seguridad por si intentan entrar sin un producto seleccionado
  if (!product) {
    return (
      <div className="error-screen">
        <p>Producto no encontrado</p>
        <button onClick={onBack}>Volver</button>
      </div>
    );
  }

  return (
    <div className="product-detail-screen">
      {/* HEADER FLOTANTE */}
      <header className="detail-header">
        <button className="back-btn-circle" onClick={onBack}>‹</button>
        <div className="header-actions">
          <button className="action-btn">♡</button>
          <button className="action-btn">分享</button>
        </div>
      </header>

      {/* IMAGEN DEL PRODUCTO (Basada en la interfaz de image_1035d9.png) */}
      <div className="main-image-container">
        <img src={product.image || 'https://via.placeholder.com/400x500'} alt={product.name} />
        <span className="image-counter">01 / 03</span>
      </div>

      <div className="detail-content">
        <span className="drop-badge">NUEVO DROP</span>
        <div className="rating-row">
          <span className="stars">★ 4.9</span>
          <span className="reviews">(128 Reviews)</span>
        </div>

        <h1 className="detail-title">{product.name}</h1>
        
        <div className="price-row-large">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.previousPrice && (
            <>
              <span className="old-price-detail">${product.previousPrice.toFixed(2)}</span>
              <span className="discount-tag">-20% DESCUENTO</span>
            </>
          )}
        </div>

        {/* COLORES (Como en el diseño original) */}
        <div className="selection-section">
          <div className="section-label">
            <span>SELECCIONA EL COLOR</span>
            <span className="selected-value">NEGRO PHANTOM</span>
          </div>
          <div className="color-options">
            <div className="color-circle active" style={{ backgroundColor: '#000' }}></div>
            <div className="color-circle" style={{ backgroundColor: '#8a70ff' }}></div>
            <div className="color-circle" style={{ backgroundColor: '#444' }}></div>
          </div>
        </div>

        {/* TALLAS */}
        <div className="selection-section">
          <div className="section-label">
            <span>TALLAS</span>
            <span className="guide-link">GUÍA DE TALLAS</span>
          </div>
          <div className="size-grid">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button 
                key={size} 
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* DESCRIPCIÓN TÉCNICA */}
        <div className="description-section">
          <h3>DESCRIPCIÓN</h3>
          <p>The {product.name} es una pieza de alta ingeniería textil, diseñada para ofrecer comodidad y estilo streetwear premium. Materiales de alta densidad y corte relajado.</p>
        </div>

        {/* FOOTER DE ACCIÓN FIJO */}
        <div className="footer-controls">
          <div className="quantity-section">
            <span>CANTIDAD</span>
            <div className="counter-box">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="add-to-cart-bar">
            <div className="total-info">
              <small>TOTAL</small>
              <p>${(product.price * quantity).toFixed(2)}</p>
            </div>
            <button className="primary-add-btn">AÑADIR AL CARRITO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;