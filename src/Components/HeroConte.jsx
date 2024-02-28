import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 2rem;
  gap: 10px;
  margin-left: 5em;

  @media only screen and (max-width: 768px) {
    flex: 3;
    align-items: center;
  }`;


const Right = styled.div`
   text-align: right;
   visibility: visible;
   animation-duration: 1.3s;
   animation-delay: 1.8s;
   animation-name: fadeInRightBig;
   margin-left: -20px;
   margin-left: 10em;
   @media only screen and (max-width: 768px) {
     flex: 1;
     width: 100%;
   }
 `;

const fadeInRightBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(-35%, 0, 0);
  }
`;

const Image = styled.img`
  animation: ${fadeInRightBig} 1.3s 1.8s both;
  width: 400px;
  height: 500px;
  object-fit: contain;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Textos1 = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;


const Textos2 = styled.p`
  font-size: 24px;
  color: white;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  padding: 15px 25px;
  border: none ;
  border-radius: 10px;
  color: #212121;
  z-index: 1;
  background: #e8e8e8;
  position: relative;
  font-weight: 500;
  font-size: 14px;
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden; 

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #212121;
    z-index: -1;
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }

  &:hover {
    color: #e8e8e8;
  }

  &:hover::before {
    width: 100%;
  }
`;


function HeroConte() {
  return (
    <Container>
      <Left>
        <Textos1>Hi this is</Textos1>
        <Textos2>Aymane ELBEKKALI a Web Developer</Textos2>
        <Button>Hire me </Button>
      </Left>

      <Right>
        <Image src={process.env.PUBLIC_URL + '/hero.png'} alt='Hero' />
      </Right>
    </Container>
  );
}

export default HeroConte;
