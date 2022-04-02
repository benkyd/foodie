import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  display: flex;
  align-content: center;
  padding-top: .6rem;
  padding-bottom: .6rem;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

function Navbar() {
  return (
    <Container>
      <Logo src='Foodie.png'/>
    </Container>
  );
}

export default Navbar;