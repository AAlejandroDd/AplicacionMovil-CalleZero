import React from 'react';
import { ChevronLeft, User, Mail, Lock, Eye, ArrowRight } from 'lucide-react'; // Importación de iconos
import './registrate.css'; 

const Register = ({ onBack }) => {
  return (
    <div className="register-screen">
      <header className="register-header">
        <button className="back-btn" onClick={onBack}>
          <ChevronLeft size={24} color="white" />
        </button>
        <h2>REGÍSTRATE</h2>
      </header>

      <main className="register-content">
        <div className="logo-section">
          <h1>UNETE AL CLUB <span>ZERO</span></h1>
          <p>Obtén acceso exclusivo a lanzamientos y colecciones de streetwear.</p>
        </div>

        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>NOMBRE COMPLETO</label>
            <div className="input-wrapper">
              <span className="icon"><User size={20} color="#666" /></span>
              <input type="text" placeholder="Ingresa Tu Nombre" />
            </div>
          </div>

          <div className="input-group">
            <label>EMAIL ADDRESS</label>
            <div className="input-wrapper">
              <span className="icon"><Mail size={20} color="#666" /></span>
              <input type="email" placeholder="tu@ejemplo.com" />
            </div>
          </div>

          <div className="input-group">
            <label>CONTRASEÑA</label>
            <div className="input-wrapper">
              <span className="icon"><Lock size={20} color="#666" /></span>
              <input type="password" placeholder="Ingresa Una Contraseña" />
              <span className="eye-icon"><Eye size={20} color="#666" /></span>
            </div>
            <p className="input-help">Debe tener al menos 8 caracteres con una combinación de letras y números.</p>
          </div>

          <div className="input-group">
            <label>CONFIRMAR CONTRASEÑA</label>
            <div className="input-wrapper">
              <span className="icon"><Lock size={20} color="#666" /></span>
              <input type="password" placeholder="Repite La Contraseña" />
              <span className="eye-icon"><Eye size={20} color="#666" /></span>
            </div>
          </div>

          <div className="terms-check">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              Yo acepto los <b>Términos de Servicio</b> y <b>Política de Privacidad</b>.
            </label>
          </div>

          <button type="submit" className="register-btn">
            Registrar Usuario <ArrowRight size={20} />
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;