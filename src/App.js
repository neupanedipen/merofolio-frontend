import React, { useState, useEffect, useRef } from 'react';
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
import { ForumContext } from './components/Context/ForumContext'
import SingleQuestion from './components/SingleQuestion';

function App() {

  const [stocks, setStocks] = useState([]);
  const [allforums, setallForums] = useState([]);
  let forums = [];
  const userState = {
    userId: localStorage.getItem('_id'),
    token: localStorage.getItem('token')
  }

  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  }

  useEffect(() => {
    axios.get('http://localhost:5000/stocks', config)
      .then(res => setStocks(res.data))
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:5000/discussionForum/question`).then(res => {
      setallForums(res.data)
    });
  }, [])

  // useEffect(() => {
  //   console.log(allforums.filter((a) => a.createdBy === userState.userId));
  //   // console.log(forums);
  // }, [])

  forums = allforums.filter(allfor => allfor.createdBy === userState.userId);

  return (

    <userContext.Provider value={userState}>
      <StocksContext.Provider value={stocks}>
        <ForumContext.Provider value={forums}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            {/* <Route path="profile" element={<Profile />} /> */}
            <Route path="/forum/:id" element={<SingleQuestion />} />
            <Route path="about" element={<About />} />
            <Route path="forum" element={<Forum />} />
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
        </ForumContext.Provider>
      </StocksContext.Provider>
    </userContext.Provider>
  );
}

export default App;
