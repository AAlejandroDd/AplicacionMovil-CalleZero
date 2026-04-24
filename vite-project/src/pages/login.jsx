import React from 'react';
import { ChevronLeft, Mail, Lock, Eye, ArrowRight } from 'lucide-react'; // Importación de Lucide
import './Login.css';

const Login = ({ onNavigate, onLogin }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-screen">
      {/* Header superior con icono vectorial */}
      <header className="login-header">
        <button className="back-btn" type="button">
          <ChevronLeft size={24} color="white" />
        </button>
        <h2>INICIAR SESIÓN</h2>
      </header>

      <main className="login-content">
        <div className="logo-section">
          <h1>CALLE <span>ZERO</span></h1>
          <p>Bienvenido al movimiento urbano</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label>CORREO ELECTRÓNICO</label>
            <div className="input-wrapper">
              <span className="icon">
                <Mail size={20} color="#666" /> 
              </span>
              <input 
                type="email" 
                placeholder="nombre@callezero.com" 
                required 
              />
            </div>
          </div>

          <div className="input-group">
            <label>CONTRASEÑA</label>
            <div className="input-wrapper">
              <span className="icon">
                <Lock size={20} color="#666" />
              </span>
              <input 
                type="password" 
                placeholder="********" 
                required 
              />
              <span className="eye-icon">
                <Eye size={20} color="#666" />
              </span>
            </div>
            <a href="#" className="forgot-password">¿Olvidaste Tu Contraseña?</a>
          </div>

          <button type="submit" className="login-btn">
            Iniciar Sesión <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </button>
        </form>

        <footer className="login-footer">
          <p>
            ¿No tienes una cuenta? 
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                onNavigate(); 
              }}
            >
              Regístrate
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Login;