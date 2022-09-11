import React, { useState } from 'react';
import styled from 'styled-components';
import '../CSS/Variables.css';
import Link from './Link.js';

export default function Navbar() {
  /* State */
  const [menuOpen, setMenuOpen] = useState('none');
  const [buttonHidden, setButtonHidden] = useState('flex');
  const [isHovered, setIsHovered] = useState('16px');

  return (
    <NavbarContainer>
      <NavbarRow>
        {/* Left */}
        <div>
          <div>James Rogers</div>
        </div>

        {/* Right */}
        <div>
          {/* Button */}
          <NavbarButton
            style={{
              display: buttonHidden,
              textTransform: 'uppercase',
              paddingRight: isHovered,
              transition: 'all 0.4s',
              cursor: 'pointer',
            }}
            onClick={() => {
              setMenuOpen('flex');
              setButtonHidden('none');
            }}
            onMouseEnter={() => {
              setIsHovered(() => (isHovered ? '24px' : '16px'));
            }}
            onMouseLeave={() => {
              setIsHovered(() => (isHovered ? '16px' : '24px'));
            }}
          >
            Menu
            <NavbarSpan>+</NavbarSpan>
          </NavbarButton>

          {/* List */}
          <div style={{ display: menuOpen }}>
            <NavbarList>
              <NavbarListItem>
                <Link url="#">Item 1</Link>
              </NavbarListItem>
              <NavbarListItem>
                <Link url="#">Item 2</Link>
              </NavbarListItem>
            </NavbarList>
          </div>
        </div>
      </NavbarRow>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  background: var(--black-lite);
  z-index: 99;
  padding: 0 0 10px 0;
`;

const NavbarRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 16px;
`;

const NavbarButton = styled.div`
  display: block;
  position: relative;
  padding-right: 12px;
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const NavbarListItem = styled.li`
  margin-right: 15px;
`;

const NavbarSpan = styled.span`
  font-size: 200%;
  line-height: 0;
  position: absolute;
  top: 8px;
  right: 0;
`;
