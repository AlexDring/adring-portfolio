import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

const WorkStyles = styled.section`
  max-width: 1000px;
  margin-top: 240px;
  h2 {
    display: inline-block;
    font-size: 2.625rem;
    margin-bottom: 24px;
    position: relative;
    ::after {
      position: absolute;
      content: '';
      background: var(--gradient-light-blue);
      z-index: -1;
      right: 0;
      bottom: 7px;
      width: 100%;
      height: 7px;
    }
  }
  > p {
    font-size: 1.375rem;
  }
  section {
    margin-top: 60px;
  }
  h3 {
    font-size: 1.375rem;
  }
`;

const WorkSectionStyles = styled.section`
  margin-top: 60px;
  position: relative;
  h3 {
    display: inline-block;
  }
  ul {
    display: inline-flex;
    li {
      margin-right: 15px;
      font-size: 0.875rem;
    }
  }
  > div:first-of-type {
    padding-top: 36px;
    display: flex;
    align-items: center;
  }
  .work-text {
    position: relative;
    background: #fff;
    margin-left: -50px;
    border: 2px solid rgba(178, 202, 255, 0.2);
    width: 480px;
    padding: 36px;
    ::after {
      position: absolute;
      content: '';
      background: var(--gradient-blue);
      z-index: -1;
      right: -7px;
      bottom: -7px;
      width: 100%;
      height: 100%;
    }
  }
  .gatsby-image-wrapper {
    z-index: -1;
  }
  .section-background {
    position: absolute;
    top: 31px;
    height: 100%;
    width: 1300px;
    margin-left: -150px;
    z-index: -99;
    background: linear-gradient(
      180deg,
      rgba(230, 237, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.6) 100%
    );
  }
`;

export default function Work() {
  return (
    <WorkStyles>
      <h2>Things I've made</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <WorkSectionStyles>
        <h3>MJR Multi-venue Project</h3>
        <ul>
          <li>WordPress</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>ACF</li>
        </ul>
        <div>
          <StaticImage
            src="../../assets/images/mjr-venue.png"
            alt="Multi venue website example."
            placeholder="blurred"
            layout="fixed"
          />
          <div className="work-text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              adipisci corporis tenetur ullam quo delectus, aliquam, eos ipsum
              molestias a dolorum neque quaerat impedit odio quibusdam ipsam
              consequuntur dignissimos inventore!
            </p>
          </div>
        </div>
        <div className="section-background" />
      </WorkSectionStyles>
    </WorkStyles>
  );
}
