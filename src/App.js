import React from 'react';
import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";
import Login from '../src/components/Login'
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Forum from './components/Forum';
import ErrorPage from './components/404';
import About from './components/About/About';
import LiveMarket from './components/LiveMarket';
import Home from './Home';
import { userContext } from './components/Context/UserContext'

function App() {
  const userState = {
    userId: localStorage.getItem('_id'),
    token: localStorage.getItem('token')
  }

  // console.log(userState.userId, userState.token)
  return (

    <userContext.Provider value={userState}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="forum" element={<Forum />} />
        <Route path="about" element={<About />} />
        <Route path="market" element={<LiveMarket />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
