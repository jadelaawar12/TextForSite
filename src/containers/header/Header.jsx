import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Bringing The Blockchain To The People</h1>
      <p>Our goal is to make the blockchain easily accessible to everyone and anyone. We designed a system where our users can use our token to purchase real world items from our store and they will also be able to earn token through playing our game or staking their already aquired token!</p>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
