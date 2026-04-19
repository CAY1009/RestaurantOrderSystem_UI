import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Login from './pages/Login.jsx';
import LoginEmployee from './pages/LoginEmployee.jsx';
import Signup from './pages/Signup.jsx';
import Member from './pages/Member.jsx';
import CartPage from './CartPage.jsx';
import Order from './Order.jsx';
import OrderDetail from './OrderDetail.jsx';
import MemberAdminFood from './MemberAdminFood.jsx';
import MemberAdminCustomer from './MemberAdminCustomer.jsx';
import MemberAdminEmployee from './MemberAdminEmployee.jsx';
import AdminEmployeeEdit from './AdminEmployeeEdit.jsx';
import AdminCustomerEdit from './AdminCustomerEdit.jsx';
import AdminFoodEdit from './AdminFoodEdit.jsx';
import AddEmployee from './AddEmployee.jsx';
import AddFood from './AddFood.jsx';

function App() {

  const [cart, setCart] = useState({});
  const [customer, setCustomer] = useState(() => {
    // Load customer from localStorage on initial render
    const saved = localStorage.getItem('customer');
    return saved ? JSON.parse(saved) : null;
  });

  // Save customer to localStorage whenever it changes
  useEffect(() => {
    if (customer) {
      localStorage.setItem('customer', JSON.stringify(customer));
    } else {
      localStorage.removeItem('customer');
    }
  }, [customer]);

  const handleLogout = () => {
    setCustomer(null);
    localStorage.removeItem('customer');
    sessionStorage.removeItem('redirectAfterLogin');
  };

  const totalCount = Object.values(cart).reduce((sum, n) => sum + n, 0);

  return (
    <>
      <Header customer={customer} onLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart} totalCount={totalCount} />}></Route>
        <Route path='/order' element={<Order customer={customer} />}></Route>
        <Route path='/order/:id' element={<OrderDetail />}></Route>
        <Route path='/login' element={<Login setCustomer={setCustomer} />}></Route>
        <Route path='/login/employee' element={<LoginEmployee setCustomer={setCustomer} />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/cart' element={<CartPage cart={cart} customer={customer} setCart={setCart} />}></Route>
        <Route path='/customer' element={<Signup />}></Route>
        <Route path='/member' element={<Member customer={customer} />}></Route>
        <Route path='/adminFood' element={<MemberAdminFood/>}></Route>
        <Route path='/adminCustomer' element={<MemberAdminCustomer/>}></Route>
        <Route path='/adminEmployee' element={<MemberAdminEmployee/>}></Route>
        <Route path='/foodEdit/:id' element={<AdminFoodEdit/>}></Route>
        <Route path='/employeeEdit/:id' element={<AdminEmployeeEdit/>}></Route>
        <Route path='/customerEdit/:id' element={<AdminCustomerEdit/>}></Route>
        <Route path='adminEmployee/addEmployee' element={<AddEmployee/>}></Route>
        <Route path='adminFood/addFood' element={<AddFood/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App