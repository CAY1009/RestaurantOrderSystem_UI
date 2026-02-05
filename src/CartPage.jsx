import React, { useContext } from 'react';

function CartPage({ cart }) {

  return (
    <div>
      <h2>Your Cart</h2>
       {Object.keys(cart).length === 0 && <p>Cart is empty.</p>}
      {Object.entries(cart).map(([id, count]) => (
        <div key={id} style={{ marginBottom: 10 }}>
        Item {id}: {count}
        </div>
      ))}
    </div>
  );
}

export default CartPage
