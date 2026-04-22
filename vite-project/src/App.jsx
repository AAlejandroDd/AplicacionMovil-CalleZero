import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/registrate';
import Home from './pages/Home';
import Discover from './pages/Discover';
import NewArrivals from './pages/NewArrivals';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  // 1. ESTADOS DE NAVEGACIÓN Y DATOS
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 2. FUNCIÓN PARA MANEJAR LA APERTURA DE UN PRODUCTO
  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
  };

  // 3. RENDERIZADO CONDICIONAL
  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return (
          <Login 
            onNavigate={() => setCurrentPage('register')} 
            onLogin={() => setCurrentPage('home')} 
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
            onSearch={() => setCurrentPage('discover')} 
            onExplore={() => setCurrentPage('arrivals')}
            onProductClick={openProductDetail} // Se activa al dar clic al "+"
            onProfile={() => console.log("Ir a perfil")}
          />
        );

      case 'discover':
        return (
          <Discover 
            onBack={() => setCurrentPage('home')} 
          />
        );

      case 'arrivals':
        return (
          <NewArrivals 
            onBack={() => setCurrentPage('home')}
            onProductClick={openProductDetail} // También desde el catálogo pro
          />
        );

      case 'detail':
        return (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => setCurrentPage('home')} 
          />
        );

      default:
        return <Login onLogin={() => setCurrentPage('home')} />;
    }
  };

  return (
    <div className="App">
      {/* Contenedor móvil con el ancho exacto de tu diseño */}
      <div className="mobile-container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;