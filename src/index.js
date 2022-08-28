import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/global.scss';
import App from './app';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
      <App />
    </Provider>
);

