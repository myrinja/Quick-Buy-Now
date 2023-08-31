import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginValidator from "./validations/loginValidator";
function Login({setloggedin}){
    const[users, setUsers] = useState()
    let navigate= useNavigate()
    useEffect(()=>{
        fetch("http://localhost:4000/users")
        .then(res=>res.json())
        .then(data=> {
            setUsers(data)})
        .catch(e=>console.log(e))
    }, [])

    const[ formData, setFormData]=useState({
      
    })

    const[errors, setErrors]=useState({})
    function handleInput(e){
        let name= e.target.name
        let value= e.target.value
        let data ={
            ...formData,
            [name]: value
        }
        setFormData(data)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        let user=users.filter(user=> (user.email === formData.email && user.password === formData.password))
        if (user.length>0){
            setloggedin(true)
            navigate("/")
        }else{
            setErrors({"login": "user does not exist"}) 
        }
        
    }

     return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" >
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" style={{fontSize:"1.2rem"}}><strong>Email</strong></label>
                        <input type="email" placeholder="Enter email" className="form-control rounded-0" onChange={handleInput} name="email"/>
                        {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" style={{fontSize:"1.2rem"}}><strong>Password</strong></label>
                        <input type="password" placeholder="Enter password" className="form-control rounded-0" onChange={handleInput} name="password"/>
                        {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
                    </div>
                    <button className="btn btn-success w-100"><strong>Log in</strong></button>
                    {errors.login && <span className="text-danger">{errors.login}</span>}
                    <p>You agree to the terms and conditions</p>
                    <Link  to="/signup" className="btn btn-default-border bg-secondary w-100">Create account</Link>
                </form>
            </div>
        </div>
     )
}


export default Login;