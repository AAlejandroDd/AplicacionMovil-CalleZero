import React, { useState } from 'react';
import './compra.css';

const Checkout = ({ onBack, totalAmount = 504.00 }) => {
  const [paymentMethod, setPaymentMethod] = useState('applepay');

  return (
    <div className="checkout-screen">
      {/* HEADER */}
      <header className="checkout-header">
        <button className="back-btn-simple" onClick={onBack}>‹</button>
        <h2>FINALIZAR COMPRA</h2>
      </header>

      <div className="checkout-container">
        {/* PASO 1: DETALLES DE ENVÍO */}
        <section className="checkout-section">
          <div className="section-title-row">
            <span className="step-number">1</span>
            <span className="section-icon">📍</span>
            <h3>DETALLES DE ENVÍO</h3>
          </div>
          
          <div className="input-group">
            <label>NOMBRE COMPLETO</label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input type="text" placeholder="Hype Beast" defaultValue="Hype Beast" />
            </div>
          </div>

          <div className="input-group">
            <label>DIRECCIÓN</label>
            <div className="input-wrapper">
              <span className="input-icon">📍</span>
              <input type="text" placeholder="123 Urbano , Distrito 0" defaultValue="123 Urbano , Distrito 0" />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group flex-2">
              <label>CITY</label>
              <input type="text" placeholder="San Salvador" defaultValue="San Salvador" />
            </div>
            <div className="input-group flex-1">
              <label>ZIP CODE</label>
              <input type="text" placeholder="0000" defaultValue="0000" />
            </div>
          </div>

          <div className="input-group">
            <label>PHONE NUMBER</label>
            <div className="input-wrapper">
              <span className="input-icon">📞</span>
              <input type="text" placeholder="+503 0000-0000" defaultValue="+503 0000-0000" />
            </div>
          </div>
        </section>

        {/* PASO 2: MÉTODO DE PAGO */}
        <section className="checkout-section">
          <div className="section-title-row">
            <span className="step-number">2</span>
            <span className="section-icon">💳</span>
            <h3>MÉTODO DE PAGO</h3>
          </div>

          <div className="payment-grid">
            <div 
              className={`payment-card ${paymentMethod === 'applepay' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('applepay')}
            >
              <div className="radio-dot"></div>
              <span className="pay-icon large">📱</span>
              <small>APPLE PAY</small>
            </div>
            <div 
              className={`payment-card ${paymentMethod === 'card' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              <span className="pay-icon">💳</span>
              <small>TARJETA</small>
            </div>
            <div 
              className={`payment-card ${paymentMethod === 'crypto' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('crypto')}
            >
              <span className="pay-icon">💼</span>
              <small>CRYPTO</small>
            </div>
          </div>
        </section>

        {/* PASO 3: RESUMEN DEL PEDIDO */}
        <section className="checkout-section">
          <div className="section-title-row">
            <span className="step-number">3</span>
            <span className="section-icon">📦</span>
            <h3>RESUMEN DEL PEDIDO</h3>
          </div>

          <div className="order-summary-box">
            <div className="summary-line">
              <span>SUBTOTAL (3 ITEMS)</span>
              <span>$480.00</span>
            </div>
            <div className="summary-line">
              <span>ENVÍO (ESTÁNDAR)</span>
              <span className="free-text">GRATIS</span>
            </div>
            <div className="summary-line">
              <span>VAT/TAX</span>
              <span>$24.00</span>
            </div>
            <div className="summary-line total-line">
              <span>TOTAL</span>
              <span className="total-purple">${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </section>

        <p className="legal-text">
          Al Presionando "Realizar pedido", usted acepta los <a href="#terms">términos y condiciones de Calle Zero.</a> <a href="#privacy">Términos de Servicio.</a>
        </p>

        {/* BOTÓN DE ACCIÓN FINAL */}
        <button className="final-pay-btn">
          Realizar Pedido — ${totalAmount.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Checkout;