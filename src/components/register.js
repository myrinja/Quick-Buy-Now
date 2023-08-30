import { Link } from "react-router-dom";
import { useState } from "react"
import registerValidator from "./validations/registerValidator";

function Register(){
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
        setErrors(registerValidator(formData))
    }
    return(
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" >
                <div className="bg-white p-3 rounded w-25">
                    <h2>Sign up</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                            <label htmlFor="name" style={{fontSize:"1.2rem"}}><strong>Name</strong></label>
                            <input  onChange={handleInput} type="text" placeholder="Enter name" className="form-control rounded-0"/>
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" style={{fontSize:"1.2rem"}}><strong>Email</strong></label>
                            <input onChange={handleInput}  type="email" placeholder="Enter email" className="form-control rounded-0"/>
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" style={{fontSize:"1.2rem"}}><strong>Password</strong></label>
                            <input onChange={handleInput}  type="password" placeholder="Enter password" className="form-control rounded-0"/>
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                        <button className="btn btn-success w-100"><strong>Sign Up</strong></button>
                        <p>You agree to the terms and conditions</p>
                        <Link  to="/login" className="btn btn-default-border bg-secondary w-100">Login</Link>
                    </form>
                </div>
            </div>
         )
}


export default Register;