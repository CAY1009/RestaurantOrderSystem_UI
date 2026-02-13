import { useState } from 'react';
import CartPage from './CartPage.jsx';
import { Link, Route, Routes } from 'react-router';
import { foodItems } from './FoodItems.js';

function Home({ cart, setCart, totalCount }) {

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

  // Later will call API to get food items from backend, now just use hard coded data for design
  const itemList = foodItems.map(foodItem =>
    <div key={foodItem.id} className='food-card-container'>
      <img src={foodItem.image} alt={foodItem.name}></img>
      <h3>{foodItem.name}</h3>
      <p>Description: {foodItem.description}</p>
      <p>Price: {foodItem.price}</p>
      <div>
        <button className='add-to-cart-button' onClick={() => { AddCart(foodItem.id) }}>+</button>
        {cart[foodItem.id] > 0 ? (<span className="order-amount-selection">{cart[foodItem.id]}</span>) : ('')}
        {cart[foodItem.id] > 0 ? (<button className='add-to-cart-button' onClick={() => { RemoveCart(foodItem.id) }}>-</button>) : ('')}
      </div>
    </div>
  );

  return (
    <body>
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
    </body>
  );
}

export default Home
