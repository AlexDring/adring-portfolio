import * as React from 'react';
import styled from 'styled-components';

const UnderlineStyles = styled.span`
  position: relative;
  ::after {
    position: absolute;
    content: '';
    background: ${(props) =>
      props.color ? props.color : 'var(--gradient-light-red)'};
    z-index: -1;
    right: -1px;
    bottom: ${(props) => (props.bottom ? props.bottom : '8px')};
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : '8px')};
  }
`;

// eslint-disable-next-line react/prop-types
export default function Underline(props) {
  return <UnderlineStyles {...props} />;
}
