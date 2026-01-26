
import React from 'react'; // Import React
import { NavLink } from 'react-router-dom'; // Import routing components

 function Header() { // Capitalize component name
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand or logo */}
        <NavLink className="navbar-brand" to="/">
          React Demo
        </NavLink>
        {/* Toggler for responsive collapse */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* NavLink automatically applies 'active' class when route matches */}
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/data"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                API Data
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</>
  );
} 
export default Header;