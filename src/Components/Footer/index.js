import React from 'react';
import {
  Footer,
  FooterLink,
  Bars,
  FooterMenu,
  FooterBtn,
  FooterBtnLink
} from './FooterElements';

const Navbar = () => {
  return (
    <>
      <Footer>
        <FooterLink to='/'>
          <img src={require('../../Assets/ploudlogo.jpg')} alt='logo' style={{width: '50px'}}/>
        </FooterLink>
        <Bars />
        <FooterMenu>
          <FooterLink to='/directorio' activeStyle>
            Directorio
          </FooterLink>
          <FooterLink to='/normatividad' activeStyle>
            Normatividad
          </FooterLink>
          <FooterLink to='/contacto' activeStyle>
            Horario
          </FooterLink>
          
         
        </FooterMenu>
        <FooterBtn>
          <FooterBtnLink to='/iniciar'>Contactenos</FooterBtnLink>
          
        </FooterBtn>
 
      </Footer>
    </>
  );
};

export default Navbar;