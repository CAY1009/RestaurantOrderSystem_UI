import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Member from './pages/Member.jsx';
import Signup from './pages/Signup.jsx';
import CartPage from './CartPage.jsx';
import MemberAdmin from './MemberAdmin.jsx';
import Order from './Order.jsx';
import MemberAdminFood from './MemberAdminFood.jsx';
import MemberAdminCustomer from './MemberAdminCustomer.jsx';
import MemberAdminEmployee from './MemberAdminEmployee.jsx';

function App() {

  const [cart, setCart] = useState({});

  const totalCount = Object.values(cart).reduce((sum, n) => sum + n, 0);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart} totalCount={totalCount} />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/member' element={<Member />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/cart' element={<CartPage cart={cart}/>}></Route>
        <Route path='/admin' element={<MemberAdmin />}></Route>
        <Route path='/customer' element={<Signup />}></Route>
        <Route path='/adminFood' element={<MemberAdminFood/>}></Route>
        <Route path='/adminCustomer' element={<MemberAdminCustomer/>}></Route>
        <Route path='/adminEmployee' element={<MemberAdminEmployee/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
