import React from 'react';
import Header from './components/Header';
import './App.css';
import HeroSection from './components/HeroScetion';

import{Parallax,ParallaxLayer}from "@react-spring/parallax";
import Footer from './components/Footer';
import Features from './components/Features';
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Parallax pages={4}>
<ParallaxLayer offset={0}>
<HeroSection />
</ParallaxLayer>
<ParallaxLayer offset={1}>2</ParallaxLayer>
<ParallaxLayer offset={2}>3<Features/></ParallaxLayer>
<ParallaxLayer offset={3}><Footer/></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;