import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { stor } from 'redux/stor';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={stor}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
