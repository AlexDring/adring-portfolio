import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import url from '../../assets/images/bullet.svg';
import Underline from './elements/Underline';

const AboutStyles = styled.section`
  h2 {
    display: inline-block;
    font-size: clamp(2.1rem, 4vw, 2.625rem);
    margin-bottom: 30px;
  }
  p {
    font-size: 1.125rem;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 40px;
    padding-inline-start: 20px;
    li {
      position: relative;
      ::before {
        position: absolute;
        content: '';
        background: url(${url}) no-repeat;
        left: -15px;
        top: 12px;
        width: 5px;
        height: 5px;
      }
    }
  }
  .image-wrap {
    position: relative;
    height: 250px;
    width: 250px;
    margin: 0 auto;
    z-index: 1;
    ::after {
      content: '';
      position: absolute;
      background: var(--gradient-red);
      height: 250px;
      width: 250px;
      right: -5px;
      bottom: -5px;
      z-index: -1;
    }
  }
  @media (min-width: 800px) {
    max-width: 900px;
    > div {
      display: flex;
      gap: 50px;
    }
  }
`;

export default function About() {
  return (
    <AboutStyles id="about">
      <h2>
        <Underline>About me</Underline>
      </h2>
      <div>
        <div>
          <p>
            I got started in the web development world by offerring websites to
            small business owners, initially using pre-made WordPress themes and
            page builders, I quickly moved on to developing custom websites,
            built from the ground up.
          </p>

          <p>
            I’ve worked with clients from ideation through to launch. Going
            through their needs and requirements, creating a design in
            Figma/Photoshop and then developing a custom website that's
            perfectly suited to them.
          </p>
          <p>Some technologies I've been working with recently:</p>

          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Gatsby</li>
            <li>Heroku</li>
            <li>HTML & CSS</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div className="image-wrap">
          <StaticImage
            src="../../assets/images/me-portrait.png"
            alt="Portrait photo of me."
            placeholder="blurred"
            layout="fixed"
            width={250}
            height={250}
          />
        </div>
      </div>
    </AboutStyles>
  );
}
