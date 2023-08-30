import logo from './logo.svg';
// import './App.css';
import Login from './components/login';
import {Routes, Route} from "react-router-dom"
import Register from './components/register';


function App() {
  return (
    <div>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
