import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Highly Edibles?" text="Highly Edibles is a company determined to bringing Web3 to the people and here is how we will do it. Firstly, we created a token which can be used to purchase real world items from our store, this token can be earned through our presale, playing our game, staking, or just buying it once it releases. A video will be uploaded to youtube explaining each way and how to go about acquiring our coin in each of these ways." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Play-To-Earn" text="We will be releasing games where players will be able to earn our tokens to thens spend elsewhere. The first game being released in our collection will be a 2D Top Down Shooter where players defeat waves of enemies and then bosses and in return they get rewarded with points which can then be exchanged for our tokens or in game power-ups. A deeper explanation will be released on our YouTube channel." />
      <Feature title="Presale" text="A token presale will be hosted on Pancakeswap and here on our website where we will be selling our token at 1$ per token this is highly beneficial as once the token is fully released to the public and our game and marketplace release the price of the token will increase dramatically since many people will begin using it! This will be exlained in more details in our YouTube channel." />
      <Feature title="Staking" text="Staking will also be introduced for our token. So, first what is staking? Staking is the act of locking up your assets or in our caes tokens and earning a consistent reward for doing so. This will all take place under the token tab there will be a dedicated section for buying our token and one for you to then stake it! More details will be revealed on our Youtube channel." />
    </div>
  </div>
);

export default WhatGPT3;
