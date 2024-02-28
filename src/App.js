import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import styled from 'styled-components'
import Navbar from './Components/Navbar';

import Resume from './Components/Resume';
const Container = styled.div`
  background: linear-gradient(to right, #434343 0%, black 100%);
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  color: white;
  position: fixed;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: transparent transparent; /* Firefox */
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent; /* Chrome, Safari, Edge */
  }
 
`;
const ContentContainer = styled.div`
  scroll-snap-align: start;
  padding-top: 80px;
`;
function App() {
  return (
    <Container>
      <Navbar/>
      <ContentContainer>
        <Hero/>
        <About/>
        <Resume/>
      </ContentContainer>
    </Container>
  );
}

export default App;
