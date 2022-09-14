import React, { useEffect } from 'react';
import luxy from 'luxy.js';
import './style.css';
import './CSS/Global.css';
import './CSS/Helpers.css';

// Components
import Navbar from './Components/Navbar.js';
import Hero from './Components/Homepage/Hero.js';
import IntroProjectGrid from './Components/Homepage/Projects/ProjectGrid.js';
import About from './Components/Homepage/About.js';
import Slider from './Components/Homepage/Slider.js';
import MoreInfo from './Components/Homepage/MoreInfo.js';
import Footer from './Components/Footer.js';
import Attribution from './Components/Attribution.js';

export default function App() {
  // Luxy
  useEffect(() => {
    luxy.init({
      wrapper: '#app',
      wrapperSpeed: 0.1,
    });
  });

  // Log Viewport Width
  window.addEventListener('resize', (event) => {});
  onresize = (event) => {
    console.log(window.innerWidth);
  };

  return (
    <div id="app">
      <Navbar />
      <Hero />
      <IntroProjectGrid id="work-section" />
      <About id="about-section" />
      <Slider />
      <MoreInfo />
      <Footer />
      <Attribution />
    </div>
  );
}
