import React,{useEffect,useState} from 'react';
import Login from './components/login';
import {Routes, Route} from "react-router-dom"
import Register from './components/register';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';



function App() {
const[product, setProduct]=useState([])
// useEffect(()=>{
//   fetch("http://localhost:8000/products")
//   .then(res => res.json())
//   .then(data => setProduct(data))
// },[])


  return (
   <div>
    <NavBar/>
    <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
    </Routes>
    
   </div>
  );
}



export default App;
