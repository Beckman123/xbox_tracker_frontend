// src/components/Navbar.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavRootDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Nav = styled.nav`
  background-color: #282c34;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 2.5%;
  padding-right: 2.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 95%;
`;

const NavTitle = styled.h1`
  color: #61dafb;
  font-size: 1.5rem;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

const Navbar = () => {
  return (
    <NavRootDiv>
    <Nav>
      <NavTitle>Xbox Tracker</NavTitle>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavLinks>
    </Nav>
    </NavRootDiv>
  );
};

export default Navbar;
