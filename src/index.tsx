import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.scss';
import './styles/index.scss';
import './styles/shared-styles.scss';
import App from './adapter/primaries/react/App';
import reportWebVitals from './adapter/primaries/react/reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './corelogic/redux/set-configuration-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="appBackground">
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
