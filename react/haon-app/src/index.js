import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './App2.jsx';      //내가만든 App2 파일을 임포트해온다 밑에 const부분의<App /> 여기에 내 파일이름을 넣어준다
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />            
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
