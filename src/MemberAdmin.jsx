import { foodItems } from './FoodItems.js';

function MemberAdmin() {
  const FoodEdit = () => {
    alert("Edit food item");
  };

  const foodList = foodItems.map(foodItem =>
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
  );

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome, Admin! Here you can manage the restaurant orders and menu.</p>
      <div>{foodList}</div>
    </div>
  );
}

export default MemberAdmin;