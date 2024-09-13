import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './features/homepage/core/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './features/homepage/core/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
