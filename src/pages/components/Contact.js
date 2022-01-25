import * as React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.section`
  margin: 300px auto;
  width: min(360px 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2 {
    font-size: 2.625rem;
    margin-bottom: 18px;
  }
  p {
    font-size: 1.125rem;
    margin-bottom: 24px;
  }
  button::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--gradient-red);
    bottom: -4px;
    right: -4px;
    z-index: -1;
  }
`;

export default function Contact() {
  return (
    <ContactStyles>
      <h2>Get in touch</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        adipisci corporis tenetur ullam quo delectus, aliquam.
      </p>
      <button type="button">Contact me</button>
    </ContactStyles>
  );
}
