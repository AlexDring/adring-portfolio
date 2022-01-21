import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import Underline from './elements/Underline';

const WorkStyles = styled.section`
  max-width: 1000px;
  margin-top: 240px;
  margin-bottom: 240px;
  h2 {
    display: inline-block;
    font-size: clamp(2.1rem, 4vw, 2.625rem);
    margin-bottom: 24px;
    text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  }
  > p {
    font-size: 1.375rem;
    margin-bottom: 36px;
  }
`;

const WorkSectionStyles = styled.section`
  margin-bottom: 120px;
  position: relative;
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
      right: -7px;
      bottom: -7px;
      width: 100%;
      height: 100%;
    }
  }
  .work-image {
    padding-top: 24px;
    z-index: -2;
  }
  .section-background {
    position: absolute;
    top: 10px;
    height: 100%;
    width: calc(100% + 50px);
    margin-left: -25px;
    z-index: -99;
    background: linear-gradient(
      180deg,
      rgba(230, 237, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.6) 100%
    );
  }
  @media (min-width: 600px) {
    h3 {
      display: inline-block;
      padding-right: 30px;
    }
    > div:first-of-type {
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
      width: max(100%, 1300px);
      margin-left: -150px;
    }
    .work-text {
      margin-left: -50px;
      width: 480px;
      /* padding: 30px; */
      margin-top: 0px;
    }
  }
`;

export default function Work() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          node {
            id
            frontmatter {
              title
              skills
              link
              github
              image {
                childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
                    placeholder: BLURRED
                  )
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  return (
    <WorkStyles>
      <h2>
        <Underline color="var(--gradient-light-blue)">
          Things I've made
        </Underline>
      </h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      {data.allMarkdownRemark.edges.map((edge) => {
        const { frontmatter, html } = edge.node;
        const image = getImage(frontmatter.image);
        return (
          <WorkSectionStyles key={frontmatter.title}>
            <h3>{frontmatter.title}</h3>
            <ul>
              {frontmatter.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div>
              <div className="work-image">
                <GatsbyImage
                  image={image}
                  alt={`${frontmatter.title} website example.`}
                />
              </div>
              <div
                className="work-text"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
            <div className="section-background" />
          </WorkSectionStyles>
        );
      })}
    </WorkStyles>
  );
}
