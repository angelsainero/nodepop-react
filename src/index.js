import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';

import { BrowserRouter } from 'react-router-dom';


const accessToken = storage.get('auth');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* con BrowserRouter envolvemos la app para que tenga acceso a la navegación */}
    <BrowserRouter> 
    <App isInitiallyLogged={!!accessToken}/>
    </BrowserRouter>
  </React.StrictMode>
);

