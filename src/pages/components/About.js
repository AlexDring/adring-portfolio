import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
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
    max-width: 700px;
    > div {
      display: flex;
      gap: 50px;
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <h2>
        <Underline size="100% 7px" color="var(--gradient-light-blue)">
          About me
        </Underline>
      </h2>

      <div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            adipisci corporis tenetur ullam quo delectus, aliquam, eos ipsum
            molestias a dolorum neque quaerat impedit odio quibusdam ipsam
            consequuntur dignissimos inventore!
          </p>
          <ul>
            <li>Javascript</li>
            <li>Html</li>
            <li>CSS</li>
            <li>React</li>
            <li>Express Js</li>
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
