import { foodImages } from './FoodImages.js';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import axios from "axios";

function MemberAdminFood() {
  const apiLink = 'http://localhost:3000';

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      try {
        const res = await axios.get(`${apiLink}/api/menu-items`);
        console.log(res.data.data)
        setFoods(res.data.data)
      }
      catch (error) {
        console.log(error.message)
      }
    }
    getFoods();
  }, [])

  const handleEdit = () => {
    <Link to={`/foodEdit/${itemid}`}></Link>
  };

  const handleDelete = () => {
    const deleteConfirm = confirm("Delete Food! Are you sure?");
    if (deleteConfirm == true) {
      // Delete

      alert("Deleted ");
    }
  };

  const AdminFoodList = foods.map(foodItem => (
    <div key={foodItem.itemid} className='food-card-manage'>
      <div className='food-photo-and-button'>
        <img src={foodImages[foodItem.itemid]} alt={foodItem.name}></img>
        <div>
          <Link to={`/foodEdit/${foodItem.itemid}`} className='action-button'>Edit</Link>
        </div>
      </div>
      <div className='food-card-manage-content'>
        <p>{foodItem.itemname}</p>
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
          <br />
          <Link to="/adminFood" className='admin-nav-food'>Food Menu</Link>
          <Link to="/adminCustomer" className='admin-nav'>Customers</Link>
          <Link to="/adminEmployee" className='admin-nav'>Employees</Link>
        </div>
        <br />
        {AdminFoodList}
      </div>
    </>

  );
}

export default MemberAdminFood