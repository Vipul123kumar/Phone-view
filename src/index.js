import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 import "./Components/Footer.css"
  import { Itemprovider } from './contex/Cartcontexr';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Itemprovider>
  <App/> 
  </Itemprovider>
  </React.StrictMode>
);
 


