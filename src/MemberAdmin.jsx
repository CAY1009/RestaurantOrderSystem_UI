import { Link } from "react-router";

function MemberAdmin() {
  
  return (
    <div>
      <h1 className='view-cart-title'>Admin</h1>
      <br/>
      <Link to="/adminFood" className='admin-nav'>Food Menu</Link>
      <Link to="/adminCustomer" className='admin-nav'>Customers</Link>
      <Link to="/adminEmployee" className='admin-nav'>Employees</Link>
    </div>
  );
}

export default MemberAdmin;