import React, { useRef } from 'react';
import styled from 'styled-components';
import BarcodeScanner from "react-qr-barcode-scanner";
import { SERVER_URL } from '../globals';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ScannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: .4rem;
  row-gap: .4rem;
`;

function Main() {
  const onUpdate = async (data: string) => {
    console.debug(data);
    console.debug(new URL(`/api/barcode/${data}`, SERVER_URL).href);
    const response = await fetch(new URL(`/api/barcode/${data}`, SERVER_URL).href);

    console.log(await response.json());
  };

  return (
    <Container>
      <ScannerContainer>
        <BarcodeScanner width={700} height={800} onUpdate={async (err, result) => {
          console.log(result);
          if (result) {
            await onUpdate(result.getText());
          }
        }}/>
      </ScannerContainer>
    </Container>
  );
}

export default Main;