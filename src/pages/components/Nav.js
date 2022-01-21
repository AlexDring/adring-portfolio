import * as React from 'react';
import styled from 'styled-components';
import Logo from './elements/Logo';
import Underline from './elements/Underline';

const NavStyles = styled.nav`
  position: fixed;
  background: hsla(0, 0%, 100%, 0.7);
  width: min(1000px, 100%);
  left: 50%;
  transform: translate(-50%, 0);
  margin: auto;
  height: 70px;
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
