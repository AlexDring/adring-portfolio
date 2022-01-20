import * as React from 'react';
import styled from 'styled-components';
import Underline from './elements/Underline';

const HeroStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1000px;
  padding: 100px;
  height: 100vh;
  margin: 0 auto;
  h1 {
    font-size: 3rem;
    color: var(--lighter-black);
    margin-bottom: 24px;
    span {
      font-size: 4.5rem;
      color: var(--black);
    }
  }
  p {
    font-size: 1.25rem;
    max-width: 550px;
    margin-bottom: 40px;
  }
  button {
    position: relative;
    ::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--gradient-red);
      bottom: -4px;
      right: -4px;
      z-index: -1;
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyles>
      <h1>
        <Underline width="101%" bottom="18px">
          Alex Dring.
        </Underline>
        <br />
        Full-stack web developer.
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        adipisci corporis tenetur ullam quo delectus, aliquam, eos ipsum
        molestias a dolorum neque quaerat impedit odio quibusdam ipsam
        consequuntur dignissimos inventore!
      </p>
      <button type="button">Contact me</button>
    </HeroStyles>
  );
}
