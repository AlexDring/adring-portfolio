/* eslint-disable react/prop-types */
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import * as React from 'react';
import styled from 'styled-components';
import Logo from './elements/Logo';
import Underline from './elements/Underline';

const NavStyles = styled.nav`
  display: flex;
  postion: relative;
  justify-content: space-between;
  font-family: var(--font-header);
  background: hsla(0, 0%, 100%, 0.7);
  align-items: center;
  padding: 20px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  z-index: 998;
  ul {
    position: absolute;
    display: flex;
    background: var(--black);
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 75%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    top: 0;
    transition: all 0.2s ease-out;
    right: ${({ open }) => (open ? '0' : '-75%')};
    color: #fff;
    z-index: 998;
    li {
      margin: 20px auto;
      a {
        color: #fff;
      }
    }
  }
  button {
    background: transparent;
    cursor: pointer;
    color: ${({ open }) => (open ? '#fff' : 'var(--black)')};
    padding: 0;
    border: none;
    font-size: 42px;
    z-index: 999;
  }
  @media (min-width: 550px) {
    button {
      display: none;
    }
    margin: auto;
    width: min(1000px, 100%);
    height: 70px;
    ul {
      position: static;
      display: block;
      height: auto;
      width: auto;
      background: transparent;
      display: flex;
      flex-direction: row;
      text-align: right;
      li {
        color: var(--black);

        margin: 0;
        :not(:last-child) {
          margin-right: 30px;
        }
        a {
          color: var(--black);
        }
      }
    }
  }
`;

export default function Nav() {
  const [open, setOpen] = React.useState(false);

  return (
    <NavStyles open={open}>
      <Logo />
      <ul>
        <Link anchor="about" text="About me" />
        <Link anchor="work" text="Work" />
        <Link anchor="contact" text="Contact" />
        <li>
          <Underline size="100% 4px" position="100% 82%">
            Resume
          </Underline>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="close-nav"
      >
        {open ? '×' : '☰'}
      </button>
    </NavStyles>
  );
}

const Link = ({ anchor, text }) => (
  <li>
    <AnchorLink to={`/#${anchor}`}>{text}</AnchorLink>
  </li>
);
