function registerValidator(formdata) {
    console.log(formdata)
    let error={}
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+s/
    const passwordPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (formdata.name === null){
        error.name="should not be empty"
    }else{
        error.name=""
    }
  
    if (formdata.email === null){
        error.email="should not be empty"
    }else if(!emailPattern.test(formdata.email)){
        error.email="Email did not match"
    }else{
        error.email=""
    }
  
    if (formdata.password === null){
        error.password="should not be empty"
    }else if(!passwordPattern.test(formdata.password)){
        error.password="password did not match"
    }else{
        error.password=""
    }
  
      return error;
  }
  
    
  export default registerValidator;