import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  background-color: black;
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  color: white;
  text-decoration: none;
`;

export const Navbar = () => (
  <StyledNav>
    <StyledLink to="/">Github Issue Prioritizer</StyledLink>
  </StyledNav>
);