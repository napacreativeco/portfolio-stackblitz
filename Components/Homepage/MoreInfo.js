import * as React from 'react';
import styled from 'styled-components';
import Headline from '../Headline.js';
import Link from '../Link.js';

const MoreInfoCSS = styled.section`
  text-align: center;
  padding: 100px 0;

  .row {
    width: 80%;
    max-width: 450px;
    margin: 0 auto;
  }
  h2 {
    font-size: 6vw;
    line-height: 0.8;
    text-transform: uppercase;
  }
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    max-width: 200px;
    max-height: 200px;
    
  }

  @media screen and (max-width: 767px) {
    .row {
      width: 95%;
    }
  }
`;

const CTA = styled.button`
  background: #fff;
  border: 0;
  display: flex;
  align-items: center;
  padding: 4px 8px 8px 8px;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export default function MoreInfo() {
  return (
    <MoreInfoCSS>
      <div class="row">
        <img
          src="https://via.placeholder.com/500x900?text=James+Rogers"
          alt=""
        />
        <p>
          My name is James. I create fast and functional websites that can be
          customized to your business's needs. I've been making websites for
          over 6 years and creating graphics for a little less than that.
        </p>

        <div style={{ display: 'inline-block' }}>
          <Link url="mailto:hello@napacreativeco.com">Contact me</Link>
        </div>
      </div>
    </MoreInfoCSS>
  );
}