import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    
    const updatedTotalPrice = totalPrice + item.price;
    setTotalPrice(updatedTotalPrice);
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      
      <p className="mt-3">Total: ${totalPrice}</p>
      
      <div className="mt-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => addItemToCart({ name: "Item 1", price: 10 })}
        >
          Add Item 1
        </button>
        <button
          className="btn btn-primary"
          onClick={() => addItemToCart({ name: "Item 2", price: 20 })}
        >
          Add Item 2
        </button>
        {/* ... more buttons for adding items */}
      </div>
    </div>
  );
}

export default Cart;


// function cart(){
//  return(
//     <>
// <h1>Testing

// </h1>
    
//     </>
//  )
// }