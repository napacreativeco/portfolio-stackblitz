import * as React from 'react';
import styled from 'styled-components';
import Link from '../Link.js';
import Headline from '../Headline.js';

const selfie =
  'https://github.com/napacreativeco/portfolio-stackblitz/blob/main/assets/selfie.jpg?raw=true';

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
  .image-container {
    border-radius: 50%;
    max-width: 180px;
    max-height: 180px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
  }
  img {
    width: 120%;
    height: 120%;
    margin: 0 -10%;
    filter: grayscale(100%);
  }

  @media screen and (max-width: 767px) {
    .row {
      width: 95%;
    }
  }
`;

export default function MoreInfo() {
  return (
    <MoreInfoCSS>
      <div class="row">
        <div class="image-container">
          <img src={selfie} alt="" />
        </div>
        <p>
          My name is James. I create fast and functional websites that can be
          customized to your business's needs. I've been making websites for
          over 6 years and creating graphics for a little less than that.
        </p>

        <div style={{ display: 'inline-block', paddingTop: '10px' }}>
          <Link url="mailto:hello@napacreativeco.com">
            <Headline>Contact me</Headline>
          </Link>
        </div>
      </div>
    </MoreInfoCSS>
  );
}
