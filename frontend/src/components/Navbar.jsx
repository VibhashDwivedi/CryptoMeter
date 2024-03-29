
import {NavLink } from 'react-router-dom'


const Navbar = () => {





  return (
   
    <nav className="navbar navbar-expand-lg header-bar">
  <div className="container">
    <NavLink className="navbar-brand  display-2 fs-2 fw-bold text-white title2" to="/home">
      CryptoMeter
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/home">
          <button className="btn btn-primary">Home</button> 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/news">
          <button className="btn btn-primary">News</button> 
          </NavLink>
        </li>


       
        <li className="nav-item">
          <NavLink className="nav-link" to="/CryptoMeter">
            <button className="btn btn-primary">About Us</button>
          </NavLink>
        </li>
       
      
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar