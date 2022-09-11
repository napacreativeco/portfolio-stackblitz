import * as React from 'react';
import styled from 'styled-components';
import Headline from '../Headline.js';

const AboutContainer = styled.section`
  margin-top: 80px;
  h2 {
    font-size: 6vw;
    line-height: 0.8;
    text-transform: uppercase;
  }

  @media screen and (max-width: 767px) {
    
  }
`;
export default function About() {
  return (
    <AboutContainer>
      <Headline>Freelance designer working to create awesome websites</Headline>
      <p>
        My name is James. I create fast and functional websites that can be
        customized to your business's needs. I've been making websites for over
        6 years and creating graphics for a little less than that.
      </p>
    </AboutContainer>
  );
}
