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
      <div className="container-xxl py-5 bg-dark hero-header ">
        <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0 my-color">
            <Link to="/" className="navbar-brand p-0">
              <h1
                className=" m-0 "
                style={{ color: "var(--primary)" }}
              >
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
              data-bs-target="#navbarCollapse"
              style={{ color: "#FEA116" }}
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0 pe-4">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  className="nav-item nav-link"
                  style={{ color: "black" }}
                >
                  About
                </Link>
                <Link to="/restaurant" className="nav-item nav-link" style={{ color: "black" }}>
                  Restaurant
                </Link>
                <Link
                  to="/menu"
                  className="nav-item nav-link"
                  style={{ color: "#black" }}
                >
                  Menu
                </Link>
              </div>
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
