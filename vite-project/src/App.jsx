import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/registrate';
import Home from './pages/Home';
import Discover from './pages/Discover';
import './App.css';

function App() {
  // Estado para controlar qué pantalla se muestra
  const [currentPage, setCurrentPage] = useState('login');

  // Función para renderizar condicionalmente las páginas
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
            onProfile={() => console.log("Ir a perfil")}
          />
        );
      case 'discover':
        return (
          <Discover 
            onBack={() => setCurrentPage('home')} 
          />
        );
      default:
        return <Login onLogin={() => setCurrentPage('home')} />;
    }
  };

  return (
    <div className="App">
      {/* El contenedor principal que limita el ancho a móvil */}
      <div className="mobile-container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;