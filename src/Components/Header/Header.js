import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const nextBtn = () => {
    navigate(+1);
  };
  const backBtn = () => {
    navigate(-1);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <span className="buttons">
            <i className="fa-solid fa-arrow-left" onClick={backBtn}></i>
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_header"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar navbar-collapse" id="main_header">
            <ul className="navbar-nav mx-auto mb-0 mb-lg-2 ">
              <Link to="/" className="nav-link">
                <li className="nav-item">
                  Home
                  {/* <a className="nav-link">Home</a> */}
                </li>
              </Link>
              {/*  */}
              <Link to="/addrestaurant" className="nav-link">
                <li className="nav-item">
                  Add Restaurant
                  {/* <a className="nav-link">Dinner</a> */}
                </li>
              </Link>
              <Link to="/signup" className="nav-link">
                <li className="nav-item">
                  Sign up
                </li>
              </Link>
            </ul>
          </div>
          <span className="buttons">
            <i className="fa-solid fa-arrow-right" onClick={nextBtn}></i>
          </span>
        </div>
      </nav>
    </>
  );
}
