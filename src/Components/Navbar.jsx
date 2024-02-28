import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  background-color: #303030;
  padding: 20px;
  margin : 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 1000;
  width: 93%;

`;

const GetToKnowMe = styled.h2`
  margin: 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  
`;

const NavItem = styled.li`
  cursor: pointer;
  z-index: 1;
  &:hover{
    width: auto;
    padding: 0.6rem;
    margin: auto;
    top:1rem;
    border-radius: 0.6rem;
    box-sizing: border-box;

    box-shadow: 
      #5E5E5E 0 24px 48px -4px, 
      #5E5E5E 0 12px 24px -4px,
      #5E5E5E 0 8px 16px -4px,
      #5E5E5E 0 4px 8px -2px,
      #FFFFFF 0 0 1px 0,
      #5E5E5E 0 48px 96px -4px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <GetToKnowMe>GetTo Know Me</GetToKnowMe>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Resume</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
