import React from 'react';
import Header from '../components/header';
import Navbar from '../components/Navbar';
// Importamos los iconos necesarios de Lucide
import { 
  User, 
  Package, 
  Heart, 
  Gem, 
  MapPin, 
  CreditCard, 
  Bell, 
  LogOut, 
  ChevronRight 
} from 'lucide-react'; 
import './Profile.css';

const Profile = ({ onLogout, onSearch, onCart, onHome, onProfile, onOrders }) => {
  return (
    <div className="profile-screen">
      {/* HEADER SUPERIOR */}
      <Header 
        onSearchClick={onSearch} 
        onCartClick={onCart} 
        onProfileClick={onProfile} 
      />

      <div className="profile-scroll-area">
        <div className="profile-container">
          
          {/* INFO DE USUARIO */}
          <section className="user-identity">
            <div className="avatar-wrapper">
              {/* Se mantiene la imagen de perfil con el fix de object-fit del CSS */}
              <img src="https://via.placeholder.com/100" alt="Avatar" className="user-avatar" />
              <span className="status-badge">✅</span>
            </div>
            <h1 className="user-name">Eduardo Gálvez</h1>
            <p className="user-email">gvz.a7g@callezero.com</p>
            <span className="member-tag">Miembro Elite</span>
            <button className="edit-profile-btn">Editar Perfil</button>
          </section>

          {/* ESTADÍSTICAS RÁPIDAS - Emojis cambiados por Lucide */}
          <section className="stats-grid">
            <div className="stat-card">
              <Package size={20} color="#8a70ff" className="stat-icon" />
              <p className="stat-value">12</p>
              <p className="stat-label">PEDIDOS</p>
            </div>
            <div className="stat-card">
              <Heart size={20} color="#8a70ff" className="stat-icon" />
              <p className="stat-value">09</p>
              <p className="stat-label">GUARDADOS</p>
            </div>
            <div className="stat-card">
              <Gem size={20} color="#8a70ff" className="stat-icon" />
              <p className="stat-value">450</p>
              <p className="stat-label">PUNTOS</p>
            </div>
          </section>

          {/* DETALLES DE LA CUENTA */}
          <section className="menu-group">
            <h3 className="group-title">DETALLES DE LA CUENTA</h3>
            <div className="menu-item">
              <User size={22} color="#fff" className="menu-icon" />
              <div className="menu-text">
                <p>Información personal</p>
                <small>Nombre, correo electrónico, número de teléfono</small>
              </div>
              <ChevronRight size={18} color="#333" />
            </div>
            <div className="menu-item">
              <MapPin size={22} color="#fff" className="menu-icon" />
              <div className="menu-text">
                <p>Direcciones guardadas</p>
                <small>Ubicaciones de entrega predeterminadas</small>
              </div>
              <ChevronRight size={18} color="#333" />
            </div>
            <div className="menu-item">
              <CreditCard size={22} color="#fff" className="menu-icon" />
              <div className="menu-text">
                <p>Métodos de pago</p>
                <small>Visa que termina en 4202</small>
              </div>
              <ChevronRight size={18} color="#333" />
            </div>
          </section>

          {/* COMPRAS */}
          <section className="menu-group">
            <h3 className="group-title">COMPRAS</h3>
            
            {/* BOTÓN FUNCIONAL HACIA HISTORIAL */}
            <div className="menu-item clickable-order" onClick={onOrders} style={{ cursor: 'pointer' }}>
              <Package size={22} color="#fff" className="menu-icon" />
              <div className="menu-text">
                <p>Mis pedidos</p>
                <small>Seguimiento y gestión de envíos</small>
              </div>
              <ChevronRight size={18} color="#333" />
            </div>

            <div className="menu-item">
              <Bell size={22} color="#fff" className="menu-icon" />
              <div className="menu-text">
                <p>Notificaciones</p>
                <small>Ofertas y actualizaciones</small>
              </div>
              <ChevronRight size={18} color="#333" />
            </div>
          </section>

          {/* CERRAR SESIÓN */}
          <button className="logout-btn" onClick={onLogout}>
            <LogOut size={20} color="#ff4d4d" /> 
            <span>Cerrar Sesión</span>
          </button>

          <p className="app-version">CALLE ZERO V2.0.0 (2026)</p>
        </div>
      </div>

      {/* NAVBAR COMPONENTE */}
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

export default Profile;