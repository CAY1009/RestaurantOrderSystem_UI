import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import CartPage from './CartPage.jsx';
import Order from './Order.jsx';
import MemberAdminFood from './MemberAdminFood.jsx';
import MemberAdminCustomer from './MemberAdminCustomer.jsx';
import MemberAdminEmployee from './MemberAdminEmployee.jsx';
import AdminEmployeeEdit from './AdminEmployeeEdit.jsx';
import AdminCustomerEdit from './AdminCustomerEdit.jsx';
import AdminFoodEdit from './AdminFoodEdit.jsx';
import AddEmployee from './AddEmployee.jsx';

function App() {

  const [cart, setCart] = useState({});

  const totalCount = Object.values(cart).reduce((sum, n) => sum + n, 0);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart} totalCount={totalCount} />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/cart' element={<CartPage cart={cart}/>}></Route>
        <Route path='/customer' element={<Signup />}></Route>
        <Route path='/adminFood' element={<MemberAdminFood/>}></Route>
        <Route path='/adminCustomer' element={<MemberAdminCustomer/>}></Route>
        <Route path='/adminEmployee' element={<MemberAdminEmployee/>}></Route>
        <Route path='/foodEdit/:id' element={<AdminFoodEdit/>}></Route>
        <Route path='/employeeEdit/:id' element={<AdminEmployeeEdit/>}></Route>
        <Route path='/customerEdit/:id' element={<AdminCustomerEdit/>}></Route>
        <Route path='adminEmployee/addEmployee' element={<AddEmployee/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App