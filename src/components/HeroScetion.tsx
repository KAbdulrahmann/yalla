import React from 'react';
import './HeroScetion.css';
// import appImage from '../assets/app-image.png'; // Replace with actual image path

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Yalla ..<br />THE Super App</h1>
        <p>
          The first true super App in the Middle East & Africa for all your daily financial & non-financial needs.
          <br />Send & receive money, pay merchants online & offline & place orders for all your daily needs.
          <br />Currently available in Egypt & UAE, Coming Soon to: KSA & Pakistan.
        </p>
        <div className="download-buttons">
          <img src="https://www.yalla.online/images/Home/app-store-white.svg" alt="Download on the App Store" />
          <img src="https://www.yalla.online/images/Home/google-play-white.svg" alt="Get it on Google Play" />
          <img src="https://www.yalla.online/images/Home/huawei.svg" alt="Explore it on AppGallery" />
        </div>
        <p className="powered-by">
          Powered by <strong>PaySky</strong> in partnership with <strong>VISA</strong>
        </p>
      </div>
      <div className="hero-image">
        <img src='blob:null/a9387dbf-4d9d-47e0-af53-b5eee653bf26' width='150px' height='300px' alt="Yalla App" />
      </div>
    </section>
  );
}

export default HeroSection;