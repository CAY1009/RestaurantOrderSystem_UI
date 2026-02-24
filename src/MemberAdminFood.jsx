import { foodItems } from './FoodItems.js';
import { Link } from 'react-router';

function MemberAdminFood() {
  const handleEdit = () => {
    alert("Edit food item");
  };

  const handleDelete = () => {
    const deleteConfirm = confirm("Delete Food! Are you sure?");
    if(deleteConfirm == true){
      // Delete

      alert("Deleted ");
    }
  };

  const AdminFoodList = foodItems.map(foodItem => (
    <div key={foodItem.id} className='food-card-manage'>
      <img src={foodItem.image} alt={foodItem.name}></img>
      <div>
        <button className='action-button' onClick={handleEdit}>Edit</button>
        <button className='action-button-delete' onClick={handleDelete}>Delete</button>
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
        <br/>
          <Link to="/adminFood" className='admin-nav-food'>Food Menu</Link>
          <Link to="/adminCustomer" className='admin-nav'>Customers</Link>
          <Link to="/adminEmployee" className='admin-nav'>Employees</Link>
      </div>
      <br/>
      {AdminFoodList}
    </div>
    </>
    
  );
}

export default MemberAdminFood