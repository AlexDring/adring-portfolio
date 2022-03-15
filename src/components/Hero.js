import { AnchorLink } from 'gatsby-plugin-anchor-links';
import * as React from 'react';
import styled from 'styled-components';
import Underline from './elements/Underline';

const HeroStyles = styled.section`
  height: 100vh;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h1 {
    font-size: clamp(2rem, 3vw, 3rem);
    color: var(--lighter-black);
    margin-bottom: 24px;
    line-height: 150%;
    span {
      font-size: clamp(3.3rem, 5vw, 4.5rem);
      color: var(--black);
    }
  }
  p {
    font-size: 1.25rem;
    max-width: 560px;
    margin-bottom: 32px;
  }
  @media (min-width: 800px) {
    max-width: 1000px;
    padding: 100px;
    margin: 0 auto;
  }
`;

export default function Hero() {
  return (
    <HeroStyles id="top">
      <h1>
        Hello,
        <br />
        <Underline width="101%" bottom="20%">
          I'm Alex Dring.
        </Underline>
        <br />A full-stack web developer, based in Bristol.
      </h1>
      <p>
        I’ve recently completed University of Helsinki’s Full Stack Open - the
        main focus on building single page applications with ReactJS that use
        REST APIs built with Node.js. I'm currently looking for a role in that
        field!
      </p>
      <AnchorLink to="/#contact" className="gradient">
        Get in touch
      </AnchorLink>
    </HeroStyles>
  );
}
