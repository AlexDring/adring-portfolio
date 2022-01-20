import * as React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import ContactSide from './components/ContactSide';

const MainStyles = styled.main`
  max-width: 1600px;
  margin: auto;
`;

export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <MainStyles>
        <Hero />
        <About />
        <Work />
        <ContactSide />
      </MainStyles>
      <Footer />
    </>
  );
}
