import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const LinkCSS = styled.a`
  position: relative;
  display: inline;
`;

const LinkUNDERLINE = styled.div`
  height: 3px;
  width: 0%;
  transition: all 0.6s;
  background: white;
`;

export default function Link(props) {
  const [isHovered, setIsHovered] = useState('0%');
  const [isAnimated, setIsAnimated] = useState('none');

  return (
    <>
      <LinkCSS
        href={props.url}
        title={props.children}
        onMouseEnter={() => {
          setIsHovered('100%');
        }}
        onMouseLeave={() => {
          setIsHovered('0%');
        }}
      >
        {props.children}
        <br />
        <LinkUNDERLINE
          style={{
            width: isHovered,
          }}
        />
      </LinkCSS>
    </>
  );
}
