
import React,{useState,useEffect } from 'react'
import Homepage from './component/Homepage';
import './App.css'




function App() {
const[plants, setPlants]=useState([])
useEffect(()=>{ fetch("http://localhost:8000/plants") 
.then(res => res.json())
  .then(data => setPlants(data))
 },[])


  return (
   <div>
  
    <Homepage  plants={plants} />

    {/* navbar */}
    
   </div>
  );
}



export default App;