import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'framework7/css/bundle';
import './index.css';
import Framework7React from "framework7-react";
import Framework7 from "framework7/bundle";

Framework7.use(Framework7React);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
