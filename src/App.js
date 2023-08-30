import React,{useEffect,useState} from 'react';
import './App.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Homepage';



function App() {
const[product, setProduct]=useState([])
useEffect(()=>{
  fetch("http://localhost:8000/products")
  .then(res => res.json())
  .then(data => setProduct(data))
},[])


  return (
   <div className="app">
   
   <NavBar /> 
   <Cart />
   <Homepage product ={product}/>
   </div>
  );
}

export default App;
