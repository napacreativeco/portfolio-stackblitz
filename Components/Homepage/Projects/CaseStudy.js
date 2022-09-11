import React, { useState } from 'react';
import styled from 'styled-components';
import Link from '../../Link.js';

export default function CaseStudy(props) {
  return (
    <CSxContainer>
      <Closer onClick={props.handleModalClose}>&nbsp;</Closer>

      <div
        style={{
  
          height: props.height,
          background: 'var(--black-lite-2)',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        <div style={info}>
          <div style={left}>
            <h1>{props.project.name}</h1>
            <p style={{ opacity: '0.2' }}>{props.project.tag}</p>
            <Counter>{props.project.id}</Counter>
            <p>{props.project.description}</p>
            <Link url={props.project.url}>{props.project.url}</Link>
          </div>

          <div style={right}>
            <div
              style={{
                background: 'url(' + props.project.image + ')',
                backgroundSize: 'cover',
                position: 'absolute',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                backgroundPosition: 'center center',
              }}
            >
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </CSxContainer>
  );
}

const CSxContainer = styled.article`
  position: relative;
  z-index: 999;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  overflow: hidden;
  transition: all 1s;
`;

const Counter = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(90deg);
  font-weight: 800;
`;

const Closer = styled.div`
  width: 100vw;
  height: 10vh;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 90vh;
  zIndex: 999;
  background: rgba(0, 0, 0, 0.72);
  cursor: pointer;
`;

const info = {
  display: 'grid',
  gridTemplateColumns: '40% 60%',
  gridGap: '10px',
  position: 'relative',
};

const left = {
  position: 'relative',
  padding: '20px 40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

const right = {
  position: 'relative',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  objectFit: 'cover',
  height: '90vh',
  width: '100%',
  display: 'flex',
  alignItems: 'stretch',
};
