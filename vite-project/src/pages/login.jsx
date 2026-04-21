import React from 'react';
import './Login.css';

const Login = ({ onNavigate, onLogin }) => {
  
  // Esta función se ejecuta cuando le das clic al botón de Iniciar Sesión
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Aquí podrías agregar lógica de credenciales en el futuro.
    // Por ahora, si el HTML5 valida el correo, te deja pasar al Home.
    onLogin();
  };

  return (
    <div className="login-screen">
      {/* Header superior */}
      <header className="login-header">
        <button className="back-btn" type="button">←</button>
        <h2>INICIAR SESIÓN</h2>
      </header>

      <main className="login-content">
        {/* Sección del Logo */}
        <div className="logo-section">
          <h1>CALLE <span>ZERO</span></h1>
          <p>Bienvenido al movimiento urbano</p>
        </div>

        {/* Formulario con validación */}
        <form className="login-form" onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label>CORREO ELECTRÓNICO</label>
            <div className="input-wrapper">
              <span className="icon">✉</span>
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
              <span className="icon">🔒</span>
              <input 
                type="password" 
                placeholder="********" 
                required 
              />
              <span className="eye-icon">👁</span>
            </div>
            <a href="#" className="forgot-password">¿Olvidaste Tu Contraseña?</a>
          </div>

          {/* El botón de tipo submit activa el handleSubmit del form */}
          <button type="submit" className="login-btn">
            Iniciar Sesión <span>→</span>
          </button>
        </form>

        <footer className="login-footer">
          <p>
            No tienes una cuenta? 
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                onNavigate(); // Esta función te manda a Registro
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