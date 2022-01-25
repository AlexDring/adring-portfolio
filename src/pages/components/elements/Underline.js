import * as React from 'react';
import styled from 'styled-components';

const UnderlineStyles = styled.span`
  display: inline;
  background: ${({ color }) => color || 'var(--gradient-light-red)'};
  background-repeat: no-repeat;
  background-size: ${({ size }) => size || '100% 8px'};
  background-position: ${({ position }) => position || '100% 78%'};
`;

export default function Underline(props) {
  return <UnderlineStyles {...props} />;
}
