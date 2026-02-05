import hamburger from './assets/hamburger.png'
import pizza from './assets/pizza.png'
import frenchfries from './assets/frenchfries.png'
import burrito from './assets/burrito.png'
import { useState } from 'react';
import CartPage from './CartPage.jsx';
import { Link, Route, Routes } from 'react-router';


function Food({ cart, setCart, totalCount }) {

  const AddCart = (id) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const RemoveCart = (id) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) - 1
    }));
  };

  const food_item = [
    { id: 1, name: "food1", description: "description1 has too much sugar has too much sugar has too much sugar ", price: 7.99, image: hamburger },
    { id: 2, name: "food2", description: "description2 has too much sugar has too much sugar has too much sugar", price: 12.99, image: pizza },
    { id: 3, name: "food3", description: "description3 has too much sugar has too much sugar has too much sugar", price: 5.99, image: frenchfries },
    { id: 4, name: "food4", description: "description4 has too much sugar has too much sugar has too much sugar", price: 8.99, image: burrito },
    { id: 5, name: "food5", description: "description5 has too much sugar has too much sugar has too much sugar", price: 6.99, image: burrito },
    { id: 6, name: "food6", description: "description6 has too much sugar has too much sugar has too much sugar", price: 7.99, image: hamburger },
    { id: 7, name: "food7", description: "description7 has too much sugar has too much sugar has too much sugar", price: 12.99, image: pizza },
    { id: 8, name: "food8", description: "description8 has too much sugar has too much sugar has too much sugar", price: 5.99, image: frenchfries },
    { id: 9, name: "food9", description: "description9 has too much sugar has too much sugar has too much sugar", price: 8.99, image: burrito },
    { id: 10, name: "food10", description: "description10 has too much sugar has too much sugar has too much sugar5", price: 6.99, image: burrito }];

  const listFoods = food_item.map(food_item =>
    <div key={food_item.id} className='food-card-content'>
      <img src={food_item.image} alt={food_item.name}></img>
      <h3>{food_item.name}</h3>
      <p>Description: {food_item.description}</p>
      <p>Price: {food_item.price}</p>
      <div>
        <button className='add-to-cart-button' onClick={() => { AddCart(food_item.id) }}>+</button>
        {cart[food_item.id] !== undefined ? (<span className="order-amount-selection">{cart[food_item.id]}</span>) : ('')}
        {cart[food_item.id] !== undefined ? (<button className='add-to-cart-button' onClick={() => { RemoveCart(food_item.id) }}>-</button>) : ('')}
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
        <div className='food-card'>{listFoods}</div>
      </div>
    </body>

  );
}

export default Food
