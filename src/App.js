
import React,{useState,useEffect } from 'react'
import Homepage from './component/Homepage';
import './App.css'
import NavBar from './components/NavBar';
import Login from './components/login';
import Register from './components/register';




function App() {


  
const[plants, setPlants]=useState([])
useEffect(()=>{ fetch("http://localhost:8000/plants") 
.then(res => res.json())
  .then(data => setPlants(data))
 },[])


  return (
   <div>
    <NavBar />
    <Login />
    
    <Homepage  plants={plants} />
   
    

    {/* navbar */}
    
   </div>
  );
}





export default App;