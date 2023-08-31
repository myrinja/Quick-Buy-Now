import React, { useState } from 'react';
import  { useCart } from "react-use-cart"

function Homepage({ plants,addToCart }) {
  // const [cartItems, setCartItems] = useState([]);
  const { addItem }= useCart();
  
  // function addToCart(item){
  //   setCartItems([...cartItems, item]);
  //   alert("Item added to cart successfully");
  // }
  

  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
        {plants.map((item) => (
          <div className='col-11 col-md-5 col-lg-3 mx-0 mb-4' key={item.id}> 
            <div className='card p-0 overflow-hidden h-100 shadow'>
                <img src={item.image}  className='card-img-top img-fluid' alt={item.name} style={{ height:"100%"}}/>
                <div className='card-body'>
                    <h5 className='card-Title'>{item.name}</h5>
                    <h5 className='card-Title'>$ {item.price}</h5>
                    <p className='card-text'>{item.category}</p>
                    <button  onClick={() => addItem(item)} className='btn btn-success'>addToCart</button>
                </div>
            </div>
            </div>
   ))}
        </div>
      </section> 
    </>
  );
}

export default Homepage;