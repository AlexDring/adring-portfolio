import * as React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  position: relative;
  div {
    width: 50px;
    height: 50px;
    font-size: 1.125rem;
    letter-spacing: 1px;
    transition: background 0.3s, all 0.3s ease-out;
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
      background: var(--gradient-light-red);
    }
    div:last-of-type {
      top: 0px;
      left: 0px;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles aria-label="logo">
      <div>AD</div>
      <div />
    </LogoStyles>
  );
}
