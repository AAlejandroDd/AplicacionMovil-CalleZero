// src/pages/Register.jsx
import React from 'react';
import './registrate.css'; 
const Register = ({ onBack }) => {
  return (
    <div className="register-screen">
      <header className="register-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <h2>REGÍSTRATE</h2>
      </header>

      <main className="register-content">
        <div className="logo-section">
          <h1>UNETE AL CLUB <span>ZERO</span></h1>
          <p>Obtén acceso exclusivo a lanzamientos y colecciones de streetwear.</p>
        </div>

        <form className="register-form">
          <div className="input-group">
            <label>NOMBRE COMPLETO</label>
            <div className="input-wrapper">
              <span className="icon">👤</span>
              <input type="text" placeholder="Ingresa Tu Nombre" />
            </div>
          </div>

          <div className="input-group">
            <label>EMAIL ADDRESS</label>
            <div className="input-wrapper">
              <span className="icon">✉</span>
              <input type="email" placeholder="tu@ejemplo.com" />
            </div>
          </div>

          <div className="input-group">
            <label>CONTRASEÑA</label>
            <div className="input-wrapper">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Ingresa Una Contraseña" />
              <span className="eye-icon">👁</span>
            </div>
            <p className="input-help">Debe tener al menos 8 caracteres con una combinación de letras y números.</p>
          </div>

          <div className="input-group">
            <label>CONFIRMAR CONTRASEÑA</label>
            <div className="input-wrapper">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Repite La Contraseña" />
              <span className="eye-icon">👁</span>
            </div>
          </div>

          <div className="terms-check">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              Yo acepto los <b>Términos de Servicio</b> y <b>Política de Privacidad</b>.
            </label>
          </div>

          <button type="submit" className="register-btn">
            Registrar Usuario <span>→</span>
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;