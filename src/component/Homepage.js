import React, { useState } from 'react';


function Homepage({ plants,addToCart }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item){
    setCartItems([...cartItems, item]);
    alert("Item added to cart successfully");
  }
  

  return (
    <>
      <h1 className="title">Welcome to our Greenshop</h1>
      <div className="product-list">
        {plants.map((item) => (
          <div className="products" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>Plant name: {item.name}</h4>
            <h4>Plant price:$ {item.price}</h4>
            <h4>Plant Category: {item.category}</h4>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
     
    </>
  );
}

export default Homepage;