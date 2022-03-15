import * as React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  outline: 1px solid red;
`;

export default function Footer() {
  return (
    <FooterStyles>
      {/* <p>&copy; Alex Dring {new Date().getFullYear()}</p> */}
    </FooterStyles>
  );
}
