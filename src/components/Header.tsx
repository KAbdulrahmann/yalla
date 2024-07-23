import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {

    const [clickedLink, setClickedLink] = useState<string>('#individuals');

    const handleClick = (href: string) => {
      setClickedLink(href);
    };
      return (
    <header className="header">
      <div className="logo">
        <img src="https://www.yalla.online/images/Home/Yalla-super-app-logo.svg" width='200px' alt="" />
      </div>
      <nav>
        <ul>
          <li><a onClick={() => handleClick('#individuals')}
            className={clickedLink === '#individuals' ? 'clicked' : ''}
            href="#individuals">Yalla for Individuals</a></li>
          <li><a onClick={() => handleClick('#business')}
            className={clickedLink === '#business' ? 'clicked' : ''}href="#business">Yalla for Business</a></li>
          <li><a onClick={() => handleClick('#partner')}
            className={clickedLink === '#partner' ? 'clicked' : ''} href="#partner">Become a Partner</a></li>
          <li><a onClick={() => handleClick('#pickup')}
            className={clickedLink === '#pickup' ? 'clicked' : ''} href="#pickup">Pickup Points</a></li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button className="contact-button">Contact Us</button>
        <button className="get-card-button">Get Yalla Card</button>
      </div>
    </header>
  );
}

export default Header;