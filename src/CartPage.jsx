import React, { useContext } from 'react';
import { foodItems } from './FoodItems.js';

function CartPage({ cart }) {
  const totalPrice = Object.entries(cart).reduce((sum, [foodId, quantity]) => {
    const foodItem = foodItems.find(item => item.id === parseInt(foodId));
    return sum + (foodItem ? foodItem.price * quantity : 0);
  }, 0);
  const foodAdded = foodItems.map(foodItem => {
    if (cart[foodItem.id] !== undefined) {
      return (
        <ul>
          <div>
            <img key={foodItem.id} src={foodItem.image} alt={foodItem.name}></img>
            {foodItem.name} : {cart[foodItem.id]} x {foodItem.price} = {cart[foodItem.id] * foodItem.price}
          </div>
        </ul>
      );
    }
  }
  );


return (
  <div>
    <h2 className='view-cart-title' >Your Cart</h2>
    <div className='view-cart'>{foodAdded}</div>
    <p className='view-cart-title'>Total: ${totalPrice}</p>
    <button className='view-cart-button'>Pay</button>
  </div>
);
}

export default CartPage
