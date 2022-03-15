import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WorkSectionStyles = styled.section`
  position: relative;
  max-width: 1300px;
  margin-bottom: 120px;
  > *:not(.section-background) {
    max-width: 1000px;
    margin: auto;
  }
  h3 {
    display: block;
    font-size: clamp(1.2rem, 3vw, 1.375rem);
  }
  ul {
    display: inline-flex;
    flex-wrap: wrap;
    padding-inline-start: 0;
    margin-top: 0px;
    li {
      margin-right: 15px;
      font-size: 0.875rem;
    }
  }
  .work-text {
    position: relative;
    background: #fff;
    border: 2px solid rgba(178, 202, 255, 0.2);
    width: min(90%, 480px);
    margin: -20px auto 0 auto;
    padding: 24px;
    ::after {
      position: absolute;
      content: '';
      background: var(--gradient-blue);
      z-index: -1;
      right: ${({ inView }) => (inView ? '-7px' : '0px')};
      bottom: ${({ inView }) => (inView ? '-7px' : '0px')};
      width: 100%;
      height: 100%;
      transition: all 0.5s ease-in-out;
    }
  }
  .work-image {
    padding-top: 24px;
    z-index: -2;
    filter: ${({ inView }) => !inView && 'grayscale(1)'};
    transition: filter 0.5s ease-in-out;
  }
  .section-background {
    position: absolute;
    top: 10px;
    height: 100%;
    max-width: 1300px;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0px);
    z-index: -99;
    background: linear-gradient(
      180deg,
      rgba(230, 237, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.6) 100%
    );
    opacity: ${({ inView }) => (inView ? '100%' : '0%')};
    transition: opacity 1s ease-in-out; */
  }
  @media (max-width: 1300px) {
    .section-background {
      width: calc(100% + 50px);
    }
  }
  @media (min-width: 600px) {
    h3 {
      display: inline-block;
      padding-right: 30px;
    }
    > div:nth-child(2) {
      display: flex;
      align-items: center;
    }
    .work-image {
      padding-top: 0px;
    }
    &:nth-of-type(2n) {
      .work-image {
        order: 1;
      }
      .work-text {
        margin-left: 0;
        margin-right: -50px;
      }
    }
    .section-background {
      top: 13px;
    }
    .work-text {
      margin-left: -50px;
      width: 480px;
      margin-top: 0px;
      a {
        font-family: var(--font-header);
        font-weight: 700;
        text-transform: uppercase;
        + a {
          margin-left: 24px;
        }
        &:hover {
          display: inline;
          background: var(--gradient-light-red);
          background-repeat: no-repeat;
          background-size: 0% 12%;
          background-position: 100% 78%;
          transition: background-size 1s ease-in;
        }
      }
    }
  }
`;

export default function WorkSection({
  title,
  skills,
  image,
  html,
  link,
  github,
}) {
  const snazzyImage = getImage(image);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  return (
    <WorkSectionStyles key={title} ref={ref} inView={inView}>
      <div>
        <h3>{title}</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="work-image">
          <GatsbyImage image={snazzyImage} alt={`${title} website example.`} />
        </div>
        <div className="work-text">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div>
            {link && (
              <a href={link} target="_blank" rel="noreferrer noopener">
                Open website
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer noopener">
                Github
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="section-background" />
    </WorkSectionStyles>
  );
}

WorkSection.propTypes = {
  title: PropTypes.string,
  skills: PropTypes.array,
  image: PropTypes.object,
  html: PropTypes.node,
  link: PropTypes.string,
  github: PropTypes.string,
};
