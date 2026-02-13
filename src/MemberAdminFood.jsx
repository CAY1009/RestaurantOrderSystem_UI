import { foodItems } from './FoodItems.js';
import { Link } from 'react-router';

function MemberAdminFood() {
  const FoodEdit = () => {
    alert("Edit food item");
  };

  const AdminFoodList = foodItems.map(foodItem => (
    <div key={foodItem.id} className='food-card-manage'>
      <img src={foodItem.image} alt={foodItem.name}></img>
      <div>
        <button className='food-card-manage-button' onClick={FoodEdit}>Edit</button>
        <button className='food-card-manage-button'>Delete</button>
      </div>
      <div className='food-card-manage-content'>
        <p>{foodItem.name}</p>
        <p>Description: {foodItem.description}</p>
        <p>Price: {foodItem.price}</p>
      </div>
    </div>
  ));

  return (
    <>
    <div>
      <div>
        <h1 className='view-cart-title'>Admin</h1>
        <h2 className='admin-sub-title'>Food Menu</h2>
          <Link to="/adminFood" className='admin-button'>Food Menu</Link>
          <Link to="/adminCustomer" className='admin-button'>Customers</Link>
          <Link to="/adminEmployee" className='admin-button'>Employees</Link>
      </div>
      <br/>
      {AdminFoodList}
    </div>
    </>
    
  );
}

export default MemberAdminFood