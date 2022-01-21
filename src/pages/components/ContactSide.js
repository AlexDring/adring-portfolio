import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

const ContactSideStyles = styled.div`
  position: fixed;
  bottom: 40px;
  left: 2%;
  color: var(--black);
  display: flex;
  flex-direction: column;
  > a {
    margin-top: 30px;
    position: relative;
    color: var(--black);
    .contact-details {
      opacity: 0%;
      visibility: hidden;
      position: absolute;
      padding: 12px;
      left: 10px;
      bottom: -8px;
      transition: all 0.4s ease-in-out;
    }
    :hover {
      .contact-details {
        opacity: 100%;
        left: 25px;
        visibility: visible;
        background: linear-gradient(45deg, transparent, #fff);
      }
    }
  }
`;

export default function ContactSide() {
  return (
    <ContactSideStyles>
      <a
        href="https://github.com/AlexDring"
        target="_blank"
        rel="noreferrer noopener"
      >
        <StaticImage
          placeholder="tracedSVG"
          src="../../assets/images/github.svg"
          alt="github"
        />
      </a>
      <a href="mailto:info@adring.co.uk">
        <StaticImage
          placeholder="tracedSVG"
          src="../../assets/images/mail.svg"
          alt="email"
        />
        <div className="contact-details">info@adring.co.uk</div>
      </a>
      <a href="tel:07982718898">
        <StaticImage
          placeholder="tracedSVG"
          src="../../assets/images/phone.svg"
          alt="phone"
        />
        <div className="contact-details">07982718898</div>
      </a>
    </ContactSideStyles>
  );
}
