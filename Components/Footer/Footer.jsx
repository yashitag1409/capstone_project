import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h4 class="section-title ff-secondary text-start  fw-normal mb-4">
                Company
              </h4>
              <Link to="/aboutus" className="btn btn-link">
                About US
              </Link>
              <Link to="/aboutus" className="btn btn-link">
                Contact Us
              </Link>
              {/* <Link to="/aboutus" className="btn btn-link">Reservation</Link> */}
              <Link to="/aboutus" className="btn btn-link">
                Privacy Policy
              </Link>
              <Link to="/aboutus" className="btn btn-link">
                Terms & conditions
              </Link>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="section-title ff-secondary text-start   fw-normal mb-4">
                Contact
              </h4>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>143 Street, Dil ki
                Nagri Delhi
              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope me-3"></i>yashitagrawal1409@gmail.com
              </p>
              <div class="d-flex pt-2">
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-youtube"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <h4 class="section-title ff-secondary text-start  fw-normal mb-4">
                Newsletter
              </h4>
              <p className="nl-p">
                welcome to the world of food with best taste and hygiene
              </p>
              <div class="position-relative mx-auto">
                <input
                  class="form-control border-danger w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  class="btn btn-danger py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="conatiner">
          <div className="row ">
            <div className="col-md-12">
              <div class=" pro-head text-center text-md-center mb-3 mb-md-0">
                This project is created for LU as a capstone project
              </div>
              <br />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <Link to="/">Restoran Project </Link> &nbsp; All Right
                Reserved. Designed By & controlled by : &nbsp;
                <span id="name">Yashit</span>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <div class="footer-menu">
                  <Link to="/">Home</Link>
                  <Link>Cookies</Link>
                  <Link to="/contact">Help</Link>
                  <Link>FAQS</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
