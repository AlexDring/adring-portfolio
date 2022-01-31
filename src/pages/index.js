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
import Contact from './components/Contact';

const MainStyles = styled.main`
  max-width: 1600px;
  margin: auto;
  padding: 0 25px;
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
        <Contact />
      </MainStyles>
      <ContactSide />
      <Footer />
    </>
  );
}
