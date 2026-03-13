import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router';
import { foodImages } from './FoodImages.js';
import axios from "axios";

function Home({ cart, setCart, totalCount }) {

  const [foods, setFoods] = useState([]);

  const apiLink = 'http://localhost:3000';
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

  const AddCart = (id) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    console.log(cart);
  };

  const RemoveCart = (id) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) - 1
    }));
  };

  const itemList = foods.map(foodItem =>
    <div key={foodItem.itemid} className='food-card-container'>
      <img src={foodImages[foodItem.itemid]} alt={foodItem.itemid}></img>
      <h3>{foodItem.itemname}</h3>
      <p>Description: {foodItem.description}</p> 
      <span>Price: {foodItem.price}</span>
      <div>
        <button className='add-to-cart-button' onClick={() => { AddCart(foodItem.itemid) }}>+</button>
        {cart[foodItem.itemid] > 0 ? (<span className="order-amount-selection">{cart[foodItem.itemid]}</span>) : ('')}
        {cart[foodItem.itemid] > 0 ? (<button className='add-to-cart-button' onClick={() => { RemoveCart(foodItem.itemid) }}>-</button>) : ('')}
      </div>
    </div>
  );

  return (
    <div>
      <div>
        <Link to="/cart" className='view-cart-button'>
          View Cart {totalCount > 0 && `(${totalCount})`}
        </Link>
        <button className='view-cart-button'>Checkout</button>
      </div>
      <br></br>
      <div className='food-menu'>
        <div className='food-card'>{itemList}</div>
      </div>
    </div>
  );
}

export default Home
