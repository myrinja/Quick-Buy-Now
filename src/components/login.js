function Login(){
     return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" >
            <div className="bg-white p-3 rounded w-25">
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" style={{fontSize:"1.2rem"}}><strong>Email</strong></label>
                        <input type="email" placeholder="Enter email" className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" style={{fontSize:"1.2rem"}}><strong>Password</strong></label>
                        <input type="password" placeholder="Enter password" className="form-control rounded-0"/>
                    </div>
                    <button className="btn btn-success w-100"><strong>Log in</strong></button>
                    <p>You agree to the terms and conditions</p>
                    <button className="btn btn-default-border bg-secondary w-100">Create account</button>
                </form>
            </div>
        </div>
     )
}


export default Login;