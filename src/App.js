import React,{useEffect,useState} from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Login from './components/login';
import {Routes, Route} from "react-router-dom"
import Register from './components/register';



function App() {
const[product, setProduct]=useState([])
useEffect(()=>{
  fetch("http://localhost:8000/products")
  .then(res => res.json())
  .then(data => setProduct(data))
},[])


  return (
   <div>
    <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
        </Routes>
  
   
   <Homepage product ={product}/>
   </div>
  );
}



export default App;
