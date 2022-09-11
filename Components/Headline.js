import * as React from 'react';
import styled from 'styled-components';

export default function Headline(props) {
  return (
    <>
      <Headliner>{props.children}</Headliner>
    </>
  );
}

const Headliner = styled.span`
  font-size: 7vw;
  letter-spacing: -0.4vw;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 0.5;
  margin: 0;
  padding: 0;
`;
