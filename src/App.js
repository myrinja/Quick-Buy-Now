
import React,{useState,useEffect } from 'react'
import Homepage from "./component/Homepage"
//  import './App.css'
import NavBar from './components/NavBar';
import Login from './components/login';
import Register from './components/register';
import { Routes, Route } from "react-router-dom"
import Cart from './components/Cart';





function App() {

const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    
    alert("Item added to cart successfully");
   
  };
  
const[plants, setPlants]=useState([])
useEffect(()=>{ fetch("http://localhost:8000/plants") 
.then(res => res.json())
  .then(data => setPlants(data))
 },[])


  return (
   <div>
    <NavBar/>
   
    <Routes>
          <Route path='/' element={<Homepage plants={plants} addToCart={addToCart} cartItems={cartItems}/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          
    </Routes>
     

    {/* navbar */}
    
   </div>
  );
}





export default App;