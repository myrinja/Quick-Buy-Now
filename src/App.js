
import React,{useState,useEffect } from 'react'
import Homepage from "./component/Homepage"
// import './App.css'
import NavBar from './components/NavBar';
import Login from './components/login';
import Register from './components/register';
import { Routes, Route } from "react-router-dom"




function App() {


  
const[plants, setPlants]=useState([])
useEffect(()=>{ fetch("http://localhost:8000/plants") 
.then(res => res.json())
  .then(data => setPlants(data))
 },[])


  return (
   <div>
    <NavBar/>
    <Routes>
          <Route path='/' element={<Homepage plants={plants}/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
    </Routes>

    {/* navbar */}
    
   </div>
  );
}





export default App;