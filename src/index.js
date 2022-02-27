import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';

import App from './App';
import './index.css';

ReactDOM.render(
  <MoralisProvider appId="Lo6vzKo1bz1pCDqkbq38mCAYhdQaVFrjgnHBukZM" serverUrl="https://fonlz2ozvzlp.usemoralis.com:2053/server">
    <App />
  </MoralisProvider>,
  document.getElementById('root'),
);
