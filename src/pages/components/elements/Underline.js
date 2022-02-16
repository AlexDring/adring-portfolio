import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const UnderlineStyles = styled.span`
  display: inline;
  background: ${({ color }) => color || 'var(--gradient-light-red)'};
  background-repeat: no-repeat;
  background-size: ${({ inView }) => (inView ? '100% 12%' : '0% 12%')};
  background-position: ${({ position }) => position || '100% 78%'};
  transition: background-size 1s ease-in;
`;

export default function Underline(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  return <UnderlineStyles inView={inView} ref={ref} {...props} />;
}
