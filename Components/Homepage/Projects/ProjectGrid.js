import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CaseStudy from './CaseStudy.js';

class IntroProjectGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: '001',
          name: 'Usal Project',
          image: [
            'https://via.placeholder.com/500x900?text=USAL',
            'https://via.placeholder.com/500x900?text=USAL+ACTIVE',
          ],
          url: 'https://www.usalproject.com',
          tag: 'web-development',
          description: 'Lorem ipsum',
          slug: 'usal',
        },
        {
          id: '002',
          name: 'WALD',
          image: [
            'https://via.placeholder.com/500x900?text=BIGHOUSE',
            'https://via.placeholder.com/500x900?text=BIGHOUSE+ACTIVE',
          ],
          url: 'https://www.usalproject.com',
          tag: 'web-development',
          description: 'Lorem ipsum',
          slug: 'wald',
        },
        {
          id: '003',
          name: 'SEVENSEVENSEVEN',
          image: [
            'https://via.placeholder.com/500x900?text=WALD',
            'https://via.placeholder.com/500x900?text=WALD+ACTIVE',
          ],
          url: 'https://www.usalproject.com',
          tag: 'web-development',
          description: 'Lorem ipsum',
          slug: 'seven',
        },
        {
          id: '004',
          name: 'Bighouse',
          image: [
            'https://via.placeholder.com/500x900?text=SEVENSEVENSEVEN',
            'https://via.placeholder.com/500x900?text=SEVEN+ACTIVE',
          ],
          url: 'https://www.usalproject.com',
          tag: 'web-design, web-development',
          description: 'Lorem ipsum',
          slug: 'nvmaw',
        },
      ],
      projectDATA: {},
      isShowModel: false,
      isHovered: false,
    };
  }

  handleShow = (project) => {
    this.setState({
      projectDATA: project,
      isShowModel: true,
    });
  };

  handleOnhide = () => {
    this.setState({
      isShowModel: false,
    });
  };

  render() {
    return (
      <section style={{ margin: '40px 0 0 0' }}>
        {/* GRID ITEM */}
        <Grid>
          {this.state.items.map((project, key) => {
            var projectImage = project.image.two;

            return (
              <Item
                key={key}
                onClick={() => {
                  this.handleShow(project);
                }}
                // onMouseEnter={(e) => {
                //   this.setState({
                //     isHovered: true,
                //   });
                // }}
                // onMouseLeave={(e) => {
                //   this.setState({
                //     isHovered: false,
                //   });
                // }}
              >
                {/* COUNTER */}
                <Counter>{project.id}</Counter>

                {/* IMAGE */}
                <Image
                  src={project.image[0]}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.src = project.image[1])}
                  onMouseLeave={(e) => (e.currentTarget.src = project.image[0])}
                />

                {/* INFO */}
                <Info>
                  <hr />
                  {/* TAG */}
                  <span style={{ opacity: '0.3' }}>{project.tag}</span>
                  <br />
                  {/* NAME */}
                  <Title>{project.name}</Title>
                </Info>
              </Item>
            );
          })}
        </Grid>

        {/* CASE STUDY */}
        {this.state.isShowModel && (
          <CaseStudy
            id={this.state.id}
            project={this.state.projectDATA}
            height={this.state.modelHeight}
            handleModalClose={() => {
              this.handleOnhide();
            }}
          />
        )}
      </section>
    );
  }
}

export default IntroProjectGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  transition: border-radius 0.4s;
  transition-timing-function: var(--easing);
  cursor: pointer;

  /* X-Large */
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 80px;
  }

  /* Large */
  @media (max-width: 992px) {
  }

  /* Medium */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

const Item = styled.div`
  position: relative;
`;

const Counter = styled.p`
  position: absolute;
  zIndex: 1;
  top: 2px;
  right: -24px;
  transform: rotate(90deg);
  font-weight: 800;
`;

const Image = styled.img`
  height: calc(100vw / 4 - 30px);
  transition: all 0.5s;
  transition: border-radius 0.4s;
  transition-timing-function: var(--easing);
  cursor: pointer;

  /* Hover */
  &:hover {
    border-radius: 50%;
  }

  /* X-Large */
  @media (max-width: 1200px) {
    height: calc(100vw / 2 - 30px);
  }

  /* Large */
  @media (max-width: 992px) {
  }

  /* Medium */
  @media (max-width: 768px) {
    height: calc(100vw - 50px);
  }
`;

const Info = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const Title = styled.span`
  font-size: 1.1rem;
  line-height: 0.7;
  font-weight: 800;
`;
