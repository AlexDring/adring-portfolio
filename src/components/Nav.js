import { AnchorLink } from 'gatsby-plugin-anchor-links';
import * as React from 'react';
import styled from 'styled-components';
import Logo from './elements/Logo';
import Underline from './elements/Underline';
import resume from '../assets/downloads/Alex Dring CV.pdf';
import NavLink from './elements/NavLink';

const NavStyles = styled.nav`
  display: flex;
  postion: relative;
  justify-content: space-between;
  font-family: var(--font-header);
  background: hsla(0, 0%, 100%, 0.9);
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  transition: top 0.5s ease-in-out;
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
    width: min(2000px, 100%);
    height: 70px;
    ul {
      position: static;
      display: block;
      height: auto;
      width: auto;
      background: transparent;
      display: flex;
      flex-direction: row;
      /* text-align: right; */
      li {
        color: var(--black);
        margin: 0;
        :not(:last-child) {
          margin-right: 30px;
        }
        a,
        span {
          font-weight: 700;
          color: var(--black);
        }
      }
    }
  }
`;

export default function Nav() {
  const [open, setOpen] = React.useState(false);
  return (
    <NavStyles aria-label="Main menu" open={open}>
      <AnchorLink to="/#top" title="go to top of page">
        <Logo />
      </AnchorLink>
      <ul>
        <NavLink setOpen={setOpen} open={open} anchor="about" text="About me" />
        <NavLink
          setOpen={setOpen}
          open={open}
          anchor="work"
          text="My Work"
          title="A selection of my work and projects"
        />
        <NavLink
          setOpen={setOpen}
          open={open}
          anchor="contact"
          text="Contact"
        />
        <li>
          <Underline>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Résumé, opens as a PDF"
            >
              Résumé
            </a>
          </Underline>
        </li>
      </ul>
      <button
        type="button"
        className="close-nav"
        onClick={() => setOpen(!open)}
        aria-expanded={!!open}
        aria-controls="menu"
      >
        {open ? '×' : '☰'}
      </button>
    </NavStyles>
  );
}
