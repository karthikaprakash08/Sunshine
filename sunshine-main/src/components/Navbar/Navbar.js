import React from 'react';
import '../Navbar/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png"


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bluecolor">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo"  className='navlogo'/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto px-5 forntsixe">
              <li className="nav-item">
                <a className="nav-link  white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link white" href="#">Program</a>
              </li>
              <li className="nav-item">
                <a className="nav-link white" href="#">Franchise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link white" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='newline'></div>
    </div>
    
  );
}

export default Navbar;
