import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/app.css'
import reportWebVitals from './reportWebVitals';
import setAuthorizationToken from './utils/setAuthorizationToken';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

if (localStorage.token && localStorage.token !== "undefined") {
  setAuthorizationToken(localStorage.token);
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
