import React from 'react';
import './Discover.css';

const Discover = ({ onBack }) => {
  return (
    <div className="discover-screen">
      <header className="discover-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <h2>DESCUBRIR</h2>
        <button className="filter-btn">⌥</button>
      </header>

      <div className="search-container">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Busca sneakers, hoodies, art..." />
        </div>
      </div>

      <section className="recent-searches">
        <div className="section-header">
          <h3>BÚSQUEDAS RECIENTES</h3>
          <button className="clear-all">Eliminar Todo</button>
        </div>
        <div className="search-chips">
          <div className="chip">🕒 Vintage Hoodies <span className="close">×</span></div>
          <div className="chip">🕒 Dunk Low <span className="close">×</span></div>
        </div>
      </section>

      <section className="trending-section">
        <h3>🔥 TRENDING NOW</h3>
        <div className="trending-grid">
          <div className="trending-item">
            <img src="" alt="Hoodies" />
            <div className="trend-info">
              <span>240+ ITEMS</span>
              <h4>ESSENTIAL HOODIES</h4>
            </div>
          </div>
          <div className="trending-item">
            <img src="" alt="Sneakers" />
            <div className="trend-info">
              <span>1.2K ITEMS</span>
              <h4>SNEAKERS</h4>
            </div>
          </div>
          {/* Añadir más items según la imagen */}
        </div>
      </section>
    </div>
  );
};

export default Discover;