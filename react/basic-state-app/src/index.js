import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import AppAvatar from './components/avatar/AppAvatar.jsx';
import AppCounter from './components/counter/AppCounter.jsx';
//임포트할떄 별칭으로 사용해도된댕 AppCounter => AC  근데 보통은 파일명과 맞춰서 사용하지요 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppCounter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
