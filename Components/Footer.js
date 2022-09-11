import React, { useEffect } from 'react';
import styled from 'styled-components';
import '../CSS/Variables.css';
import '../CSS/Helpers.css';

import Link from './Link.js';

export default function Footer() {
  return (
    <FooterCSS>
      <FooterRow>
        <div>
          James Rogers
          <p class="no-margin opacity--30 font-shrink--80 break-word">
            hello@napacreativeco.com
          </p>
        </div>
        <div>
          <ul>
            <li>
              <Link url="">Home</Link>
            </li>
            <li>
              <Link url="">Work</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link url="">Contact</Link>
            </li>
            <li>
              <Link url="">Dribbble</Link>
            </li>
          </ul>
        </div>
      </FooterRow>
    </FooterCSS>
  );
}

const FooterCSS = styled.footer`
  margin-top: 30px;
`;
const FooterRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  & :nth-child(2) {
    display: flex;
    justify-content: center;
  }

  & :nth-child(3) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 767px) {


    & :nth-child(2) {
      display: flex;
      justify-content: flex-start;
    }
  
    & :nth-child(3) {
      display: flex;
      justify-content: flex-start;
    }
  }
`;
