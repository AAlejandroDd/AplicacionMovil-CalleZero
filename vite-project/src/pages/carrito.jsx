import React, { useState } from 'react';
import './carrito.css';

// Añadimos onCheckout a las props para habilitar la navegación
const Cart = ({ onBack, onCheckout }) => {
  // Simulación de productos agregados
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      brand: 'ZERO-X',
      name: 'Oversized "Neon Shadow" Hoodie',
      size: 'XL',
      color: 'Negro Carbon',
      price: 89.00,
      quantity: 1,
      image: '' 
    },
    {
      id: 2,
      brand: 'CALLE',
      name: 'Distressed Cargo Joggers',
      size: '32',
      color: 'Gris',
      price: 125.00,
      quantity: 1,
      image: ''
    }
  ]);

  // Cálculos automáticos de la orden
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 12.00;
  const discount = subtotal * 0.10; 
  const total = subtotal + shipping - discount;

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart-screen">
      {/* HEADER */}
      <header className="cart-header">
        <button className="back-btn" onClick={onBack}>‹</button>
        <h2>CARRITO</h2>
      </header>

      <div className="cart-container">
        {/* LISTA DE PRODUCTOS */}
        <div className="cart-items-list">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item-card">
              <div className="cart-item-img">
                <img src={item.image || 'https://via.placeholder.com/100'} alt={item.name} />
              </div>
              
              <div className="cart-item-info">
                <div className="item-header">
                  <span className="item-brand">{item.brand}</span>
                  <button className="delete-btn" onClick={() => removeItem(item.id)}>🗑️</button>
                </div>
                <h3 className="item-name">{item.name}</h3>
                <div className="item-tags">
                  <span className="tag">TALLA: {item.size}</span>
                  <span className="tag">{item.color}</span>
                </div>
                
                <div className="item-footer">
                  <span className="item-price">${item.price.toFixed(2)}</span>
                  <div className="quantity-ctrl">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CÓDIGO PROMO */}
        <div className="promo-section">
          <p>HAVE A PROMO CODE?</p>
          <div className="promo-input-group">
            <input type="text" placeholder="Codigo" />
            <button>APLICAR</button>
          </div>
        </div>

        {/* RESUMEN DE COMPRA */}
        <div className="summary-card">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Envío estándar</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="summary-row discount">
            <span>multicompra Descuento (10%)</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <hr className="summary-divider" />
          <div className="summary-row total">
            <span>TOTAL</span>
            <span className="total-amount">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* BOTÓN FINAL CONECTADO A CHECKOUT */}
        <div className="cart-footer-btn">
          <div className="footer-total-preview">
              <small>TOTAL</small>
              <p>${total.toFixed(2)}</p>
          </div>
          <button 
            className="pay-now-btn" 
            onClick={onCheckout} // Esta función dispara la navegación a Checkout
          >
            Pagar ahora <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;