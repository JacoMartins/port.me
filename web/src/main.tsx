import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import { Header } from './components/Base/Header';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import { GlobalStyle } from './global';
import CreateAccount from './routes/CreateAccount';
import EditProfile from './routes/EditProfile';
import Login from './routes/Login';
import NotFound from './routes/NotFound';
import Profile from './routes/Profile';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create' element={<CreateAccount />} />
            <Route path='/profile/:username' element={<Profile />} />
            <Route path='/edit' element={<EditProfile />} />
            <Route path='/404' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
)
