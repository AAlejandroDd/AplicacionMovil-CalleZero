import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/registrate';
import Home from './pages/Home';
import Discover from './pages/Discover';
import NewArrivals from './pages/NewArrivals';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/carrito';
import Checkout from './pages/compra';
import Profile from './pages/Profile';
import OrderHistory from './pages/OrderHistory'; 
import './App.css';

function App() {
  // 1. ESTADOS DE NAVEGACIÓN Y DATOS
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 2. FUNCIONES DE NAVEGACIÓN GLOBAL
  const goToHome = () => setCurrentPage('home');
  const goToCart = () => setCurrentPage('cart');
  const goToCheckout = () => setCurrentPage('checkout');
  const goToProfile = () => setCurrentPage('profile');
  const goToDiscover = () => setCurrentPage('discover');
  const goToArrivals = () => setCurrentPage('arrivals');
  const goToOrders = () => setCurrentPage('orders'); // 2. FUNCIÓN PARA PEDIDOS
  const logout = () => setCurrentPage('login');

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
  };

  // 3. RENDERIZADO CONDICIONAL DE PÁGINAS
  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return (
          <Login 
            onNavigate={() => setCurrentPage('register')} 
            onLogin={goToHome} 
          />
        );

      case 'register':
        return (
          <Register 
            onBack={() => setCurrentPage('login')} 
          />
        );

      case 'home':
        return (
          <Home 
            onSearch={goToDiscover} 
            onExplore={goToArrivals}
            onProductClick={openProductDetail}
            onCart={goToCart} 
            onProfile={goToProfile} 
          />
        );

      case 'discover':
        return (
          <Discover 
            onBack={goToHome} 
            onCart={goToCart} 
          />
        );

      case 'arrivals':
        return (
          <NewArrivals 
            onBack={goToHome} 
            onProductClick={openProductDetail} 
            onCart={goToCart} 
          />
        );

      case 'detail':
        return (
          <ProductDetail 
            product={selectedProduct} 
            onBack={goToHome} 
            onCart={goToCart} 
          />
        );

      case 'cart':
        return (
          <Cart 
            onBack={goToHome} 
            onCheckout={goToCheckout} 
          />
        );

      case 'checkout':
        return (
          <Checkout 
            onBack={goToCart} 
          />
        );

      case 'profile':
        return (
          <Profile 
            onLogout={logout} 
            onSearch={goToDiscover} 
            onHome={goToHome} // CORRECCIÓN: Ahora coincide con el prop esperado
            onCart={goToCart} 
            onProfile={goToProfile}
            onOrders={goToOrders} // 3. PROP PARA ABRIR PEDIDOS
            onBack={goToHome}
          />
        );

      case 'orders': // 4. NUEVO CASO DE RENDERIZADO
        return (
          <OrderHistory 
            onBack={goToProfile} // Vuelve al perfil
            onHome={goToHome} 
            onSearch={goToDiscover} 
            onCart={goToCart} 
            onProfile={goToProfile}
          />
        );

      default:
        return <Login onLogin={goToHome} />;
    }
  };

  return (
    <div className="App">
      {/* Contenedor con aspecto de app móvil */}
      <div className="mobile-container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;