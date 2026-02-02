import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Food  from './Home.jsx';
import Footer from './Footer.jsx';
import Member from './pages/Member.jsx';

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Food/>}></Route>
          <Route path='/member' element={<Member/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
