import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Header from './Header.jsx';
import Food from './Home.jsx';
import Footer from './Footer.jsx';
import Member from './pages/Member.jsx';
import Signup from './pages/Signup.jsx';
import CartPage from './CartPage.jsx';
import MemberAdmin from './MemberAdmin.jsx';

function App() {

  const [cart, setCart] = useState({});

  const totalCount = Object.values(cart).reduce((sum, n) => sum + n, 0);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Food cart={cart} setCart={setCart} totalCount={totalCount} />}></Route>
        <Route path='/member' element={<Member />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/cart' element={<CartPage cart={cart}/>}></Route>
        <Route path='/admin' element={<MemberAdmin />}></Route>
        <Route path='/customer' element={<Signup />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
