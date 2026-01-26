import React from "react"; // Import React
import { NavLink } from "react-router-dom"; // Import routing components
function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4 mt-4">
        <div className="container   text-md-left">
          <div className="row   text-md-left">
            <div className="col-md-4 col-lg-2 col-xl-4   mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-warning">
                Usefull Links
              </h6>
              <ul>
                <li>
                  {" "}
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p> © 2025 Copyright </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
