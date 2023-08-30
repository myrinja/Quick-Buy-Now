import React, { useState } from 'react';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
        <>
        <li key={index}>{item.name} - ${item.price}</li>
          <img src={item.image} alt={item.name} />
          </>
        ))}
      </ul>
    </div>
  );
}

export default Cart;