import React from 'react';
import Headline from '../Headline.js';

const herostyles = {
  container: {
    marginTop: '14vh',
  },
  text: {
    padding: 0,
    margin: '12px 0 0 0',
  },
  headline: {
    whiteSpace: 'nowrap',
  },
};

export default function Hero() {
  return (
    <section id="hero">
      <div style={herostyles.container}>
        <Headline>
          Website Design &amp; Development
          <br />
          services for businesses
          <br />
          looking to stand out
        </Headline>
        <p style={herostyles.text}>
          DESIGNED TO ENGAGE
          <br />
          BUILT TO CONNECT
        </p>
      </div>
    </section>
  );
}
