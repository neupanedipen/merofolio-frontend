import React from 'react';
import './App.css';
import CTA from './components/Home/CTA';
import Features from './components/Home/Features';
import HelpSec from './components/Home/HelpSec';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Home/Header';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Features/>
      <HelpSec/>
      <CTA/>
      <Footer/>
    </div>    
  );
}

export default App;
