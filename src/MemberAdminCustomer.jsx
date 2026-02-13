import { Link } from "react-router";

function MemberAdminCustomer(){

    return(
        <>
        <div>
            <h1 className='view-cart-title'>Admin</h1>
            <h2 className='admin-sub-title'>Customers</h2>
            <Link to="/adminFood" className='admin-button'>Food Menu</Link>
            <Link to="/adminCustomer" className='admin-button'>Customers</Link>
            <Link to="/adminEmployee" className='admin-button'>Employees</Link>
        </div>
        <br/>
        </>
        
    );
}

export default MemberAdminCustomer
