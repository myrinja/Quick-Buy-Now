import React,{useEffect,useState} from 'react';
import './App.css';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';


function App() {
const[product, setProduct]=useState([])
useEffect(()=>{
  fetch("http://localhost:8000/products")
  .then(res => res.json())
  .then(data => setProduct(data))
},[])


  return (
   <>
   
   <Homepage product ={product}/>
   </>
  );
}

export default App;
