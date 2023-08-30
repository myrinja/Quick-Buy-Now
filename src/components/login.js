import { useState } from "react";
import { Link } from "react-router-dom";
import LoginValidator from "./validations/loginValidator";
function Login(){
    const[ formData, setFormData]=useState({
        "mail":"",
        "pass":""
    })
    const[errors, setErrors]=useState({})
    function handleInput(e){
            setFormData(prev=> ({...prev, [e.target.name]: [e.target.value]}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        setErrors(LoginValidator(formData))
    }

     return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" >
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" style={{fontSize:"1.2rem"}}><strong>Email</strong></label>
                        <input type="email" placeholder="Enter email" className="form-control rounded-0" onChange={handleInput} name="mail"/>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" style={{fontSize:"1.2rem"}}><strong>Password</strong></label>
                        <input type="password" placeholder="Enter password" className="form-control rounded-0" onChange={handleInput} name="pass"/>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button className="btn btn-success w-100"><strong>Log in</strong></button>
                    <p>You agree to the terms and conditions</p>
                    <Link  to="/signup" className="btn btn-default-border bg-secondary w-100">Create account</Link>
                </form>
            </div>
        </div>
     )
}


export default Login;