import React, { useContext} from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { foodImages } from './FoodImages.js';
import axios from 'axios';

function CartPage({ cart, customer, setCart }) {

  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
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

  const handlePay = async () => {
    if (!customer) {
      alert('Please login to complete your purchase');
      navigate('/login');
      return;
    }

    if (!cart || Object.keys(cart).length === 0) {
      alert('Your cart is empty');
      return;
    }

    // Convert cart to items array
    const items = Object.entries(cart).map(([itemId, quantity]) => ({
      itemId: parseInt(itemId),
      quantity: quantity
    }));

    try {
      const res = await axios.post(`${apiLink}/api/orders`, {
        customerId: customer.customerId,
        createdBy: customer.fullName,
        items: items
      });

      if (res.data.success) {
        alert('Order placed successfully!');
        setCart({}); // Clear cart
        navigate('/');
      } else {
        alert(res.data.message || 'Failed to place order');
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Failed to place order');
    }
  };


return (
  <div>
    <h2 className='view-cart-title'>Your Cart</h2>
    <div>{foodAdded}</div>
    <p className='view-cart-title'>Total: ${totalPrice}</p>
    <button className='view-cart-pay-button' onClick={handlePay}>Pay</button>
  </div>
);
}

export default CartPage
