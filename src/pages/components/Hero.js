import * as React from 'react';
import styled from 'styled-components';
import Underline from './elements/Underline';

const HeroStyles = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h1 {
    font-size: clamp(2rem, 3vw, 3rem);
    color: var(--lighter-black);
    margin-bottom: 24px;
    span {
      font-size: clamp(3.5rem, 5vw, 4.5rem);
      color: var(--black);
    }
  }
  p {
    font-size: 1.25rem;
    max-width: 450px;
    margin-bottom: 40px;
  }
  @media (min-width: 800px) {
    max-width: 1000px;
    padding: 100px;
    margin: 0 auto;
  }
`;

export default function Hero() {
  return (
    <HeroStyles onScroll={() => console.log('test!!!')}>
      <h1>
        Hello,
        <br />
        <Underline width="101%" bottom="20%">
          I'm Alex Dring.
        </Underline>
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        adipisci corporis tenetur ullam quo delectus!
      </p>
      <button type="button">Contact me</button>
    </HeroStyles>
  );
}
