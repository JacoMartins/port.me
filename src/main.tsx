import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import { GlobalStyle } from './global';
import CreateAccount from './routes/CreateAccount';
import Profile from './routes/Profile';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/post' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
