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
          <div className='food-card-manage'>
            <div><img key={foodItem.id} src={foodItem.image} alt={foodItem.name}></img></div>
            <div>
              <p>{foodItem.name}</p>
              {cart[foodItem.id]} x {foodItem.price}
            </div>
            <div>{cart[foodItem.id] * foodItem.price}</div>
          </div>
        </ul>
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
