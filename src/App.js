import React,{useEffect,useState} from 'react';
import Login from './components/login';
import {Routes, Route} from "react-router-dom"
import Register from './components/register';
import NavBar from './components/NavBar';



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
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
    </Routes>

    {/* navbar */}
    
   </div>
  );
}



export default App;
