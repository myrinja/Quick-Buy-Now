import React from "react";
import "./NavBar.css"; // Import your custom CSS file here

function NavBar() {
  return (
    <nav className="custom-navbar">
      <div className="container">
        <h1 className="brand">Quick Buy Now Shop</h1>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <ul className="nav-list">
          <li>
            <i className="bi bi-cart4"></i>
          </li>
          <li className="nav-item dropdown">
            <label htmlFor="nav-toggle" className="dropdown-label">
              Dropdown
            </label>
            <ul className="dropdown-menu">
              <li className="dropdown-item">Action</li>
              <li className="dropdown-item">Another action</li>
              <li className="dropdown-item">Something</li>
              <li className="dropdown-divider"></li>
              <li className="dropdown-item">Separated link</li>
            </ul>
          </li>
          <li>
            <button className="signin-button" id="signin">
              SIGN IN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
