import * as React from 'react';
import styled from 'styled-components';
import Logo from './elements/Logo';
import Underline from './elements/Underline';

const NavStyles = styled.nav`
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  margin: auto;
  height: 70px;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  ul {
    font-family: var(--font-header);
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: right;
    font-weight: 700;
    li:not(:last-child) {
      margin-right: 30px;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <Logo />
      <ul>
        <li>About me</li>
        <li>Work</li>
        <li>Contact</li>
        <li>
          <Underline height="5px" bottom="3px" width="101%">
            Resume
          </Underline>
        </li>
      </ul>
    </NavStyles>
  );
}
