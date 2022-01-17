import * as React from 'react';
import styled from 'styled-components';
import Logo from './elements/Logo';

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
  ul {
    font-family: var(--font-header);
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: right;
    li {
      position: relative;
      :not(:last-child) {
        margin-right: 30px;
      }
      :last-of-type:after {
        content: ' ';
        position: absolute;
        background: var(--gradient-light-red);
        height: 4px;
        width: 102%;
        right: 0;
        bottom: 1px;
        z-index: -1;
      }
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
        <li>Resume</li>
      </ul>
    </NavStyles>
  );
}
