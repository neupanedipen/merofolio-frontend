import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {
  Routes,
  Route,
  Navigate
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
import { StocksContext } from './components/Context/StocksContext'

function App() {

  const [stocks, setStocks] = useState([]);
  const userState = {
    userId: localStorage.getItem('_id'),
    token: localStorage.getItem('token')
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
    axios.get('http://localhost:5000/stocks', config)
      .then(res => setStocks(res.data))
  }, [])

  return (

    <userContext.Provider value={userState}>
      <StocksContext.Provider value={stocks}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path="forum" element={<Forum />} />
          <Route path="about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="market" element={<LiveMarket />} />
          <Route path="*" element={<ErrorPage />} />

          <>
            {userState.userId && (
              <>
                <Route path="/login" element={<Navigate replace to="/dashboard" />} />
                <Route path="/register" element={<Navigate replace to="/dashboard" />} />
                <Route path="/profile" element={Profile} />
                <Route path="/dashboard" element={Dashboard} />
              </>
            )}
          </>
        </Routes>
      </StocksContext.Provider>
    </userContext.Provider>
  );
}

export default App;
