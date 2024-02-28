import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Container = styled.div`
    border: 2px transparent #333;
    align-items: center;
    display: grid;
`;

const Header = styled.div`
  justify-content: center;
  font-size: 74px;
  margin-top: 120px;
  margin-left: 150px;
`;
const ContentContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  border: 0.35rem solid transparent;
  padding: 3vw;
  border-image: conic-gradient(from 90deg, rgba(168, 239, 255, 0.1), rgba(168, 239, 255, 1) 0.1turn, rgba(168, 239, 255, 1) 0.15turn, rgba(168, 239, 255, 0.1) 0.25turn) 30;
  border-radius: 8px;
  margin-bottom: 150px;
  text-align: center;
  animation: borderRotate 1000ms linear infinite forwards;

  @keyframes borderRotate {
    100% {
      border-image: conic-gradient(from 420deg, rgba(168, 239, 255, 0.1), rgba(168, 239, 255, 1) 0.1turn, rgba(168, 239, 255, 1) 0.15turn, rgba(168, 239, 255, 0.1) 0.25turn) 30;
    }
  }
`;

const ContentText = styled.p`
  font-size: 20px;
  text-align: justify;
`;
function About() {

  return (
    <Section>
      <Container>
       <Header>My Profil</Header>
       <ContentContainer>
        <ContentText>
        Motivated recent graduate in Mathematics and Computer Science eager to launch a
        career in technology. Adaptable and driven, seeking entry-level roles to apply
        analytical and programming skills gained during studies. Committed to delivering
        top-notch results and learning from hands-on experiences. Passionate about
        contributing to a dynamic work environment and continuously expanding skill set.
        </ContentText>
       </ContentContainer>
      </Container>

    </Section>
  )
}

export default About