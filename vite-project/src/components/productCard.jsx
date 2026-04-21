// src/components/ProductCard.jsx
import React from 'react';
import './productCard.css';

const ProductCard = ({ image, brand, name, price, badge }) => {
  return (
    <div className="product-card">
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="product-img" />
        {badge && <span className="product-badge">{badge}</span>}
        <button className="wishlist-btn">♡</button>
      </div>
      <div className="card-info">
        <p className="product-brand">{brand}</p>
        <h4 className="product-name">{name}</h4>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;