import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';


const Wrapper = styled.section`
  // padding: 5rem;
  background: #F8F8F8;
  width: 100%;
  height: 400px;
  padding-top: 5.56rem;
  padding-left: 4rem;
  padding-right: 4rem;
  margin: auto;
`;

const Hero = () => {
  return (
    <div>
      <Wrapper>
        <h1 style={{fontSize: "30px", fontWeight: "bold"}}>Make your party fun!</h1>
        <p style={{fontSize: "18px", fontWeight: "500"}}>Create your own custom playlist today.</p>
        <Button rounded="true" variant="primary" style={{fontWeight: "500"}}>Create playlist</Button>
      </Wrapper>
    </div>
  );
};

export default Hero;