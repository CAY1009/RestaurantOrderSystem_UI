import { Link } from "react-router";

function MemberAdmin() {
  
  return (
    <div>
      <h1 className='view-cart-title'>Admin Page</h1>
      <Link to="/adminFood" className='admin-button'>Food Menu</Link>
      <Link to="/adminCustomer" className='admin-button'>Customers</Link>
      <Link to="/adminEmployee" className='admin-button'>Employees</Link>
    </div>
  );
}

export default MemberAdmin;