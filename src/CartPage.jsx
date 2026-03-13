import React, { useContext} from 'react';
import { useState, useEffect } from 'react';
import { foodImages } from './FoodImages.js';
import axios from 'axios';

function CartPage({ cart }) {

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

  const totalPrice = Object.entries(cart).reduce((sum, [foodId, quantity]) => {
    const foodItem = foods.find(item => item.itemid === parseInt(foodId));
    return sum + (foodItem ? foodItem.price * quantity : 0);
  }, 0);
  
  const foodAdded = foods.map(foodItem => {
    if (cart[foodItem.itemid] !== undefined) {
      return (
          <div key={foodItem.itemid} className='view-cart-food-card'>
            <img src={foodImages[foodItem.itemid]} alt={foodItem.itemname}></img>
            <div>
              <p>{foodItem.itemname}</p>
              <p>{cart[foodItem.itemid]} x ${foodItem.price}</p>
            </div>
            <div><p>{cart[foodItem.itemid] * foodItem.price}</p></div>
          </div>
      );
    }
  }
  );


return (
  <div>
    <h2 className='view-cart-title'>Your Cart</h2>
    <div>{foodAdded}</div>
    <p className='view-cart-title'>Total: ${totalPrice}</p>
    <button className='view-cart-pay-button'>Pay</button>
  </div>
);
}

export default CartPage
