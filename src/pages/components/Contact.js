import * as React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.section`
  height: 100vh;
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  div {
    max-width: 450px;
    padding: 24px;
    h2 {
      font-size: 2.625rem;
      margin-bottom: 18px;
    }
    p {
      font-size: 1.125rem;
      margin-bottom: 36px;
    }
  }
`;

export default function Contact() {
  return (
    <ContactStyles id="contact">
      <div>
        <h2>Get in touch</h2>
        <p>
          I'm currently open to new opportunities. Whether you've got a question
          or just want to say hello, don't hesitate to get in touch!
        </p>
        <a className="gradient" href="mailto:info@adring.co.uk">
          Contact me
        </a>
      </div>
    </ContactStyles>
  );
}
