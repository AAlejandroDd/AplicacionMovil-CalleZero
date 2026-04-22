import React from 'react';
import './productCard.css';

/**
 * Componente ProductCard
 * @param {string} image - Ruta de la imagen (importada o URL)
 * @param {string} brand - Nombre de la marca (ej: CALLE ORIGINALS)
 * @param {string} name - Nombre del producto
 * @param {number} price - Precio actual
 * @param {string} badge - Etiqueta opcional (ej: NUEVO, 20% DESCUENTO)
 * @param {number} previousPrice - Precio original si tiene descuento
 */
const ProductCard = ({ image, brand, name, price, badge, previousPrice }) => {
  return (
    <div className="product-card">
      
      {/* CONTENEDOR DE IMAGEN: Controla el aspecto cuadrado y las etiquetas flotantes */}
      <div className="product-card-image-wrapper">
        {/* Si la imagen falla, muestra un fondo gris oscuro */}
        <img 
          src={image || 'https://via.placeholder.com/400x400/1a1a1a/ffffff?text=Cargando...'} 
          alt={name} 
          className="product-card-img" 
        />
        
        {/* ETIQUETA MORADA: Aparece arriba a la izquierda si existe un badge */}
        {badge && (
          <span className="product-card-badge">
            {badge}
          </span>
        )}
        
        {/* BOTÓN WISHLIST: El corazón en la esquina superior derecha */}
        <button className="product-card-wishlist" aria-label="Añadir a favoritos">
          <span className="heart-icon">♡</span>
        </button>
      </div>
      
      {/* CONTENEDOR DE TEXTO: Alinea la marca, nombre y precio debajo de la foto */}
      <div className="product-card-info">
        <p className="product-card-brand">{brand}</p>
        <h3 className="product-card-name">{name}</h3>
        
        <div className="product-card-price-row">
          <span className="product-card-current-price">
            ${price.toFixed(2)}
          </span>
          
          {/* PRECIO TACHADO: Solo se muestra si hay un descuento real */}
          {previousPrice && (
            <span className="product-card-old-price">
              ${previousPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;