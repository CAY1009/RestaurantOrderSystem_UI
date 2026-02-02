import hamburger from './assets/hamburger.png';
import pizza from './assets/pizza.png';
import frenchfries from './assets/frenchfries.png';
import burrito from './assets/burrito.png';
import { useState } from 'react';
import Header from './Header';
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartButton({ itemCount }) {
  return (
    <IconButton color="inherit" aria-label="shopping cart">
      <Badge badgeContent={itemCount} color="error" showZero={itemCount === 0}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}



function Food(){

    const [itemCount, setItemCount] = useState();

    const addToCart = () => {
        setItemCount(itemCount + 1);
    }

    const foods = [
        {id:1, name: "food1", description: "description1 has too much sugar has too much sugar has too much sugar has too much sugar ", price: 7.99, image:hamburger},
        {id:2, name: "food2", description: "description2 has too much sugar has too much sugar has too much sugar", price: 12.99, image:pizza},
        {id:3, name: "food3", description: "description3 has too much sugar has too much sugar has too much sugar", price: 5.99, image:frenchfries},
        {id:4, name: "food4", description: "description4 has too much sugar has too much sugar has too much sugar", price: 8.99, image:burrito},
        {id:5, name: "food5", description: "description5 has too much sugar has too much sugar has too much sugar", price: 6.99, image:burrito},
        {id:6, name: "food6", description: "description6 has too much sugar has too much sugar has too much sugar", price: 7.99, image:hamburger},
        {id:7, name: "food7", description: "description7 has too much sugar has too much sugar has too much sugar", price: 12.99, image:pizza},
        {id:8, name: "food8", description: "description8 has too much sugar has too much sugar has too much sugar", price: 5.99, image:frenchfries},
        {id:9, name: "food9", description: "description9 has too much sugar has too much sugar has too much sugar", price: 8.99, image:burrito},
        {id:10, name: "food10", description: "description10 has too much sugar has too much sugar has too much sugar5", price: 6.99, image:burrito}];

    const listFoods = foods.map(food => 
        <div key={food.id} className='food-card-content'>
            <img src={food.image} alt={food.name}></img>
            <h3>{food.name}</h3>
            <p>Description: {food.description}</p>
            <p>Price: {food.price}</p>
                <div>
                    Amount: <input className='order-amount-selection' type='number' min='0'></input>
                    <button onClick={addToCart}>Add to Cart</button>
                </div>
        </div>
    );
const itemCountNew = 10;
    return (
        <body>
            {CartButton({ itemCountNew })}
            <br></br>
            <div className='food-menu'>
                <div className='food-card'>{listFoods}</div>
            </div>
            <br></br>
        </body>

    );
}

export default Food
