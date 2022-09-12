import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/register.scss'

export default function Login() {
  return (
    <div className="register">

    <h2>Bienvenido</h2>
    <p>Al registrarte aceptas todos los <a href="*">Términos y condiciones</a></p>
    <form  className="register__form">
      <input type="name" placeholder="Nombre"  />
      <input type="email" placeholder="ejemplo@email.com"  required/>
      <input type="password" placeholder="Contraseña" required/>
      <input type="password" placeholder="Confirma contraseña" required/>
      <button type="submit">Crear cuenta</button>
    </form>
    <div className="register__options">
      <a href="/iniciar">Ya tengo una cuenta</a>
    </div>
  </div>
  )
}
