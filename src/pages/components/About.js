import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const AboutStyles = styled.section`
  max-width: 700px;
  > div {
    display: flex;
    gap: 50px;
  }
  h2 {
    display: inline-block;
    font-size: 2.625rem;
    margin-bottom: 30px;
    position: relative;
    ::after {
      content: ' ';
      position: absolute;
      background: var(--gradient-light-red);
      height: 8px;
      width: 101%;
      right: 0;
      bottom: 7px;
      z-index: -1;
    }
  }
  p {
    font-size: 1.125rem;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* list-style: none; */
  }
  .image-wrap {
    position: relative;
    height: 250px;
    width: 250px;

    ::after {
      content: ' ';
      position: absolute;
      background: var(--gradient-red);
      height: 250px;
      width: 250px;
      right: -5px;
      bottom: -5px;
      z-index: -1;
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <h2>About me</h2>
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
