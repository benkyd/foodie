import React from 'react';
import styled from 'styled-components';
import Main from './components/main';
import Navbar from './components/navbar';
import { GlobalStyle } from './globals';

const Container = styled.div`
  height: 100%;
  width: vw;
  display: flex;
  flex-direction: column;
`;


function App() {
  return (
    <Container>
      <GlobalStyle/>
      <Navbar/>
      <Main/>
    </Container>
  );
}

export default App;
