
import React,{useState,useEffect } from 'react'
import Homepage from "./component/Homepage"
//  import './App.css'
import NavBar from './components/NavBar';
import Login from './components/login';
import Register from './components/register';
import { Routes, Route} from "react-router-dom"
import Cart from './components/Cart';
import Logout from './components/logout';
import Product from './components/Product';





function App() {
  

const [cartItems, setCartItems] = useState([]);
let[isloggedIn, setIsLoggedin]= useState(false)

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
    <NavBar loggedIn={isloggedIn}/>
   
    <Routes>
          <Route path='/' element={<Homepage plants={plants} addToCart={addToCart} cartItems={cartItems}/>}></Route>
          <Route path='/login' element={<Login setloggedin={setIsLoggedin}/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/product/:id' element={<Product plants={plants}/>}></Route>
          
    </Routes>
     

    {/* navbar */}
    
   </div>
  );
}





export default App;