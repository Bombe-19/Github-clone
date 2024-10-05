import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #000;
 padding: 1.5rem 1rem 2rem; /* Increased padding to make the header taller */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 32px;
  margin-right: 1rem;
  margin-left:20px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const GreenNavLink = styled(NavLink)`
  color: #3fb950;
`;

const Header = () => (
  <Nav>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Logo src="images/github.png" alt="GitHub Logo" />
    </div>
    <NavLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/our-team">Our Team</NavLink>
      <NavLink to="/our-story">Our Story</NavLink>
      <GreenNavLink to="/events">Events</GreenNavLink>
      <NavLink to="/contact-us">Contact Us</NavLink>
      <NavLink to="/recruitment">Recruitment</NavLink>
    </NavLinks>
  </Nav>
);

export default Header;