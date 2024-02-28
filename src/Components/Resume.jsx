import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
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

const Image = styled.img`
  width: 400px; 
  height: 500px; 
  object-fit: cover;
  border: 5px solid;
  box-sizing: border-box; 
  display: block; 
  margin: 50px auto 0;  
  margin-left: 95px;
`;

const Right = styled.div`
  margin-right: 20rem;
  margin-top: 100px;
  flex-direction: column;

`;
const ResumeInfo = styled.div`
  font-size: 18px;
  line-height: 1.5;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Header= styled.h2`
  font-size: 33px;
  margin-left: 2rem;

`;

const Itm = styled.ul`
  font-weight: 100;
  font-size: 20px;
  align-items: flex-start;
`;

function Resume() {
  return (
    <Section>
        <Container>
        <Left>
          <Image src='/profile.png' alt='Hero' />
        </Left>
        <Right>
          <ResumeInfo>
              <Header>Hi guys!</Header>
              <Itm>Name    :   Aymane</Itm>
              <Itm>Age     :   21 Years</Itm>
              <Itm>Country :   Morocco</Itm>
              <Itm>Location:  Fés, Mo</Itm>
              <Itm>e-mail  : elbekkaliaymane@gmail.com</Itm>
              <Itm>Phone   : +212 630983938</Itm>
          </ResumeInfo>
          
        </Right>
        </Container>

    </Section>
  )
}

export default Resume