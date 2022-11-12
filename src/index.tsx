import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/global.scss';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <Provider store={store}>
        <BrowserRouter basename='/pokemon'>
          <App />
        </BrowserRouter>
    </Provider>
);

