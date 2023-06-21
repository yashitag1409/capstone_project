import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
// import logo from "./../../assest/img/"
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
      <div className="container-xxl m-0 head-container ">
        <div className="container-xxl position-relative sticky-top">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-lg-5 py-3 py-lg-0 my-color sticky-top">
            <Link to="/" className="navbar-brand p-0">
              <h1 className=" m-0 " style={{ color: "var(--primary)" }}>
                <i
                  className="fa fa-utensils me-3 "
                  style={{ color: "var(--primary)" }}
                ></i>
                Restoran
              </h1>
              {/* <img src="img/logo.png" alt="Logo" /> */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#headerCollapse"
              style={{ color: "#FEA116" }}
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="headerCollapse">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link to="/" className="nav-link " style={{ color: "black" }}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/menu"
                    className="nav-link"
                    style={{ color: "#black" }}
                  >
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/aboutus"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/restaurant"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    Restaurant
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/foodvlog"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    Food Vlog
                  </Link>
                </li>
              </ul>

              <Link to="/signup" className="btn btn-danger py-2 px-4">
                Signup
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
