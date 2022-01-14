import * as React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  margin: auto;
  align-items: center;
  height: 70px;
  max-width: 1000px;
  justify-content: space-between;
  ul {
    font-family: var(--font-header);
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: right;
    li + li {
      padding: 0 15px;
    }
  }
`;

const LogoStyles = styled.div`
  position: relative;
  div {
    width: 50px;
    height: 50px;
    font-size: 1.125rem;
    letter-spacing: 1px;
    transition: all 0.2s ease-in-out;
  }
  div:first-of-type {
    display: flex;
    background: white;
    align-items: center;
    justify-content: center;
    font-family: var(--font-header);
    font-weight: 700;
    font-size: 1.125;
    position: relative;
    border: solid 2px var(--black);
    z-index: 1;
  }
  div:last-of-type {
    background: var(--gradient-red);
    position: absolute;
    top: 3px;
    left: 3px;
  }
  :hover {
    div:first-of-type {
      background: var(--gradient-red);
      color: white;
      border: none;
    }
    div:last-of-type {
      top: 0px;
      left: 0px;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <LogoStyles>
        <div>AD</div>
        <div />
      </LogoStyles>
      <ul>
        <li>About me</li>
        <li>Work</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </NavStyles>
  );
}
