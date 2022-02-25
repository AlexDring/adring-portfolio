/* eslint-disable react/prop-types */
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import Underline from './elements/Underline';
import WorkSection from './WorkSection';

const WorkStyles = styled.section`
  margin-top: 240px;
  /* margin-bottom: 240px; */
  > * {
    margin-left: auto;
    margin-right: auto;
  }
  > div:first-of-type {
    max-width: 1000px;
    h2 {
      display: inline-block;
      font-size: clamp(2.1rem, 4vw, 2.625rem);
      margin-bottom: 24px;
    }
    p {
      font-size: 1.375rem;
      margin-bottom: 36px;
    }
  }
`;

export default function Work() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
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
    <WorkStyles id="work">
      <div>
        <h2>
          <Underline color="var(--gradient-light-blue)">
            Things I've made
          </Underline>
        </h2>
        <p>
          Below are a few examples of work completed for clients and personal
          projects.
        </p>
      </div>
      {data.allMarkdownRemark.edges.map((edge) => {
        const { frontmatter, html } = edge.node;
        const { title, skills, image, link, github } = frontmatter;
        return (
          <WorkSection
            key={title}
            title={title}
            skills={skills}
            image={image}
            html={html}
            link={link}
            github={github}
          />
        );
      })}
    </WorkStyles>
  );
}
