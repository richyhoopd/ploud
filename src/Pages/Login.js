import React from 'react';
import { Link } from 'react-router-dom';
import PloudLogo from '../Assets/ploudlogo.jpg'
import '../Styles/login.scss'

export default function Login() {
  return (
    <div className="login">
    
    <h2>Inicio de sesión</h2>
    <p>¡Hola de nuevo!</p>
    <form className="login__form">
      <input type="email" placeholder="ejemplo@email.com" />
      <input type="password" placeholder="******" />
      <button>Iniciar sesión</button>
    </form>
    <div className="login__options">
      <a href="/forgot">Olvide mi contraseña</a>
      <a href="/registro">Crear cuenta</a>
    </div>
  </div>
  )
}
