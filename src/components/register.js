import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import registerValidator from "./validations/registerValidator";

function Register(){
    const[ formData, setFormData]=useState({})
    const[errors, setErrors]=useState({})
    const[users, setUsers] = useState()
    const navigate=useNavigate()

    useEffect(()=>{
        fetch("http://localhost:4000/users")
        .then(res=>res.json())
        .then(data=> setUsers(data))
        .catch(e=>console.log(e))
    }, [])


    function handleInput(e){
        let name= e.target.name
        let value= e.target.value
        let data ={
            ...formData,
            [name]: value
        }
        setFormData(data)
    }

    function getUser(data, email){
        console.log(data, email)
        let user=data.filter(user=> user.email === email)
        console.log(user.length)
        if(user.length > 0 ){
            return true
        }
        return false
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!getUser(users, formData.email)){
            postUser(formData)
            .then(data=>{
            console.log(data)
            navigate("/login")
            })
            .catch(e=>console.log(e))
        }
        e.target.reset()
        setErrors({"data" : "user exists"})
        }

        // setErrors(registerValidator(formData))
    

    const postUser=async (receivedFormData)=>{
        let options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                accept:"application/json"
            },
            body:JSON.stringify(receivedFormData)
        }
        let response= await fetch("http://localhost:4000/users", options)
        if (response.status !== 201){
            throw new Error("data passed is invalid")
        }
        let data = await response.json()
        return data
    }
    return(
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" >
                <div className="bg-white p-3 rounded w-25">
                    <h2>Sign up</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                            <label htmlFor="name" style={{fontSize:"1.2rem"}}><strong>Name</strong></label>
                            <input  onChange={handleInput} type="text" placeholder="Enter name" className="form-control rounded-0" name="name"/>
                            {/* {errors.name && <span className="text-danger">{errors.name}</span>} */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" style={{fontSize:"1.2rem"}}><strong>Email</strong></label>
                            <input onChange={handleInput}  type="email" placeholder="Enter email" className="form-control rounded-0" name="email"/>
                            {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" style={{fontSize:"1.2rem"}}><strong>Password</strong></label>
                            <input onChange={handleInput}  type="password" placeholder="Enter password" className="form-control rounded-0" name="password"/>
                            {/* {errors.password && <span className="text-danger">{errors.password}</span>} */}
                        </div>
                        <button className="btn btn-success w-100"><strong>Sign Up</strong></button>
                        {errors.data && <span className="text-danger">{errors.data}</span>}
                        <p>You agree to the terms and conditions</p>
                        <Link  to="/login" className="btn btn-default-border bg-secondary w-100">Login</Link>
                    </form>
                </div>
            </div>
         )
}


export default Register;