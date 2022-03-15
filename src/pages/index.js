import * as React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import Helmet from 'react-helmet';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import ContactSide from '../components/ContactSide';
import Contact from '../components/Contact';
import '@reach/skip-nav/styles.css';

const MainStyles = styled.main`
  max-width: 1600px;
  margin: auto;
  > * {
    padding: 0 25px;
  }
`;

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Alex Dring's Portfolio</title>
      </Helmet>
      <GlobalStyles />
      <SkipNavLink />
      <Nav />
      <MainStyles>
        <SkipNavContent />
        <Hero />
        <About />
        <Work />
        <Contact />
      </MainStyles>
      <ContactSide />
    </div>
  );
}
