import "../App.css"
import { Link } from "react-router-dom";

function NavBar(){

    return(
       <div> 
        <nav class="navbar navbar-expand-lg navbar-light py-10" style={{
            backgroundColor:"#99bbff"
        }}>
            <div className="container">
            <a class="navbar-brand" href="#">
              Plant Store
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{
                display:"flex",
                justifyContent:"space-between"
            }}>
                <ul class="navbar-nav mw-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                
                </ul>
               <div className="buttons" >
                    <Link to="/login" className="btn btn-outline-dark ms-2"> <i className="fa fa-sign-in me-1"></i>Login</Link>
                    <Link to="/login" className="btn btn-outline-dark"> <i className="fa fa-user-plus ms-2"></i>Register</Link>
                    <Link to="/login" className="btn btn-outline-dark"> <i className="fa fa-shopping-cart ms-2"></i>Cart (0)</Link>
               </div>
            </div>
            </div>
        </nav>
        </div>
    )

}

export default NavBar;