import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Header from './Header.jsx';
import Food from './Body.jsx';
import Footer from './Footer.jsx';

function App() {
  
  return (
    <>
      <Header/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App
