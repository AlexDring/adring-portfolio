import * as React from 'react';
import styled from 'styled-components';
import LiquidMarbleMP4 from '../../assets/video/LiquidMarble.mp4';
import LiquidMarbleWEBM from '../../assets/video/LiquidMarble.webm';

const ContactStyles = styled.section`
  height: 100vh;
  background: radial-gradient(hsla(0, 0%, 0%, 0.6), transparent);
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
    color: #fff;
    h2 {
      font-size: 2.625rem;
      margin-bottom: 18px;
    }
    p {
      font-size: 1.125rem;
      margin-bottom: 24px;
    }
  }
  video {
    z-index: -1;
    position: absolute;
    min-width: 100%;
    min-height: 100%;
  }
`;

export default function Contact() {
  return (
    <ContactStyles id="contact">
      <video autoPlay loop muted>
        <source src={LiquidMarbleWEBM} type="video/webm" />
        <source src={LiquidMarbleMP4} type="video/mp4" />
      </video>
      <div>
        <h2>Get in touch</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          adipisci corporis tenetur ullam quo delectus, aliquam.
        </p>
        <a className="gradient" href="mailto:info@adring.co.uk">
          Contact me
        </a>
      </div>
    </ContactStyles>
  );
}
