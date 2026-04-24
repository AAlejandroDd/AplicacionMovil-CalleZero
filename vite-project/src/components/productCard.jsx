import React from 'react';
import './productCard.css';

const ProductCard = ({ brand, name, price, badge, image, onAddClick }) => {
  return (
    <div className="product-card" onClick={onAddClick}>
      <div className="product-image-container">
        {badge && <span className="product-badge">{badge}</span>}
        <button className="wishlist-btn">♡</button>
        <img 
          src={image || 'https://via.placeholder.com/300x400/111/fff?text=CALLE+ZERO'} 
          alt={name} 
          className="product-image" 
        />
      </div>
      
      <div className="product-info">
        <p className="product-brand">{brand}</p>
        <h3 className="product-name">{name}</h3>
        <span className="product-price">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;