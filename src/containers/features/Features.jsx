import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Web3 Integration',
    text: 'Our company is determined to allow everyone to experience Web3 no matter if they are new or experienced. From a play-to-earn game to a 3d metaverse marketplace we have it all. In addition, you will be able to generate a source of income because of the power of Web3!',
  },
  {
    title: 'Real World Use Case',
    text: 'We are the first ever Web3 crypto project to have our token used for the purchasing and transactions of a real world store. We are also working to build a system where many different places will accept our token as a currency.',
  },
  {
    title: 'Passive Income',
    text: 'Users will not only be able to make money playing our game by recieving out tokens, but also they will be able to stake this token to then earn even more passive income. Making our project a sustainable source of income!',
  },
  {
    title: 'High Utility Coin',
    text: 'Our coin is the very first coin optimised for real world transactions and online purchasing. In return this heavily increases the utility of our token therefore increasing the price which also increases the rewards!',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
