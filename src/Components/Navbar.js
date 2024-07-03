import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "bootstrap/js/src/collapse.js";

const Navbar = () => {
  return (
    <nav className="navbar bg-secondary navbar-expand-lg sticky-top" data-bs-theme="dark">
  <div className="container-fluid justify-content-center">
    <a className="navbar-brand text-dark" href="#">Gameholic</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Shooter</a></li>
            <li><a className="dropdown-item" href="#">Anime</a></li>
            <li><a className="dropdown-item" href="#">Battle Royale</a></li>
            <li><a className="dropdown-item" href="#">Strategy</a></li>
            <li><a className="dropdown-item" href="#">Fantasy</a></li>
            <li><a className="dropdown-item" href="#">MOBA</a></li>
            <li><a className="dropdown-item" href="#">Sci-Fi</a></li>
            <li><a className="dropdown-item" href="#">Card Games</a></li>
            <li><a className="dropdown-item" href="#">Racing</a></li>
            <li><a className="dropdown-item" href="#">Fighting</a></li>
            <li><a className="dropdown-item" href="#">Social</a></li>
            <li><a className="dropdown-item" href="#">Sports</a></li>
            <li><a className="dropdown-item" href="#">MMORPG</a></li>

            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link ">PC Games</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar