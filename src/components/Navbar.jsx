import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
`;

 function Navbar() {
  return (
    <Nav>
      <Logo>Dubai Travel</Logo>
      <Links>
        <a href="#hero">Home</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </Links>
    </Nav>
  );
}
export default Navbar;
