import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../Assets/ploudlogo.jpg')} alt='logo' style={{width: '80px'}}/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/tablero' activeStyle>
            Cursos
          </NavLink>
          <NavLink to='/calendario' activeStyle>
            Calendario
          </NavLink>
          
         
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/iniciar'>Iniciar Sesion</NavBtnLink>
          
        </NavBtn>
 
      </Nav>
    </>
  );
};

export default Navbar;