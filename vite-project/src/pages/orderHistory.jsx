import React from 'react';
import { ChevronLeft, Bell } from 'lucide-react'; // Iconos limpios
import Navbar from '../components/Navbar';
import './OrderHistory.css';

// Datos de ejemplo mapeados del diseño
const ordersInProgress = [
  {
    id: '#CZ-99120',
    date: 'En este momento',
    price: '$210.00',
    itemsCount: 2,
    status: 'En camino',
    statusClass: 'status-shipping',
    images: ['hoodie_placeholder', 'jeans_placeholder']
  }
];

const pastOrders = [
  {
    id: '#CZ-98221',
    date: 'Oct 24, 2023',
    price: '$240.00',
    itemsCount: 3,
    status: 'ENTREGADO',
    statusClass: 'status-delivered',
    images: ['hoodie_placeholder', 'jeans_placeholder', 'shoes_placeholder']
  },
  {
    id: '#CZ-97104',
    date: 'Sep 12, 2023',
    price: '$125.00',
    itemsCount: 1,
    status: 'ENTREGADO',
    statusClass: 'status-delivered',
    images: ['tshirt_placeholder']
  },
  {
    id: '#CZ-96552',
    date: 'Aug 09, 2023',
    price: '$45.00',
    itemsCount: 1,
    status: 'CANCELADO',
    statusClass: 'status-cancelled',
    images: ['cap_placeholder']
  }
];

// Placeholder component for order image
const OrderImage = ({ type }) => (
  <div className={`order-image-thumb ${type}`}>
    <span>👕</span>
  </div>
);

const OrderCard = ({ order }) => (
  <div className="order-card-container">
    <div className="order-card-header">
      <div className="order-id-group">
        <span className="order-label">ID DE PEDIDO</span>
        <span className="order-id">{order.id}</span>
      </div>
      <div className="order-date-price-group">
        <span className="order-date">{order.date}</span>
        <span className="order-price">{order.price}</span>
      </div>
    </div>

    <div className="order-card-body">
      <div className="order-images-pile">
        {order.images.map((img, index) => (
          <OrderImage key={index} type={img} />
        ))}
      </div>
      <div className="order-status-items-group">
        <span className="items-count">{order.itemsCount} ITEMS</span>
        <div className={`status-badge ${order.statusClass}`}>
          {order.statusClass === 'status-shipping' && <span className="icon">🚚</span>}
          {order.statusClass === 'status-delivered' && <span className="icon">✓</span>}
          {order.statusClass === 'status-cancelled' && <span className="icon">✕</span>}
          {order.status}
        </div>
      </div>
    </div>

    <div className="order-card-footer">
      <button className="tracking-link-btn">Seguimiento del pedido ›</button>
      <button className="details-btn-purple">Detalles</button>
    </div>
  </div>
);

const OrderHistory = ({ onBack, onSearch, onCart, onHome, onProfile }) => {
  return (
    <div className="order-history-page">
      {/* HEADER DE LA PÁGINA */}
      <header className="orders-header-top">
        <button className="back-circle-btn" onClick={onBack}>
          <ChevronLeft size={20} color="white" />
        </button>
        <h1 className="header-title">HISTORIAL DE PEDIDOS</h1>
        <button className="notif-btn">
          <Bell size={20} color="#666" />
          <span className="notif-badge-orders"></span>
        </button>
      </header>

      {/* CONTENIDO SCROLLABLE */}
      <div className="orders-scroll-content">
        {/* SECCIÓN EN CURSO */}
        <section className="order-section-group">
          <div className="section-title-header">
            <h2>EN CURSO</h2>
            <button className="help-link">¿Ayuda?</button>
          </div>
          {ordersInProgress.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </section>

        {/* SECCIÓN COMPRAS PASADAS */}
        <section className="order-section-group">
          <div className="section-title-header">
            <h2>COMPRAS PASADAS</h2>
            <button className="filter-link">Filtro</button>
          </div>
          {pastOrders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </section>

        {/* PIE DE PÁGINA */}
        <footer className="orders-footer-pagination">
          <div className="pagination-divider-line"></div>
          <p className="pagination-text">MOSTRANDO TODOS LOS PEDIDOS DE 2023</p>
          <button className="load-more-orders-btn">Cargar pedidos antiguos</button>
        </footer>
      </div>

      {/* NAVBAR INFERIOR (Con perfil activo) */}
      <Navbar 
        activePage="profile" 
        onNavigate={(page) => {
          if (page === 'home') onHome();
          if (page === 'discover') onSearch();
          if (page === 'cart') onCart();
          if (page === 'profile') onProfile();
        }} 
      />
    </div>
  );
};

export default OrderHistory;