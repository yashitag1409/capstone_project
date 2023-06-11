import React from "react";
import about1 from "../../assest/img/about-1.jpg";
import about2 from "../../assest/img/about-2.jpg";
import about3 from "../../assest/img/about-3.jpg";
import about4 from "../../assest/img/about-4.jpg";
import CountUp from "react-countup";
import "../../Components/Header/header.css";
import "./aboutus.css";
import $ from "jquery";
export default function Aboutus() {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <div class="row g-3">
                <div class="col-6 text-start">
                  <img
                    class="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src={about1}
                  />
                </div>
                <div class="col-6 text-start">
                  <img
                    class="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={about2}
                    // style="margin-top: 25%;"
                  />
                </div>
                <div class="col-6 text-end">
                  <img
                    class="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={about3}
                  />
                </div>
                <div class="col-6 text-end">
                  <img
                    class="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={about4}
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h5
                class="section-title ff-secondary text-start  fw-normal"
                style={{ color: "var(--primary)" }}
              >
                About Us
              </h5>
              <h1 class="mb-4">
                Welcome to{" "}
                <i
                  class="fa fa-utensils  me-2"
                  style={{ color: "var(--primary)" }}
                ></i>
                Restoran
              </h1>
              <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit.
              </p>
              <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div class="row g-4 mb-4">
                <div class="col-sm-6">
                  <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                    {/* <h1
                      class="flex-shrink-0 display-5 text-primary mb-0 counter"
                      //   data-toggle="counter-up"
                    >
                      15
                    </h1> */}
                    <CountUp
                      end={15}
                      start={1}
                      className="flex-shrink-0 display-5  mb-0 counter"
                    />
                    <div class="ps-4">
                      <p class="mb-0">Years of</p>
                      <h6 class="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                    <CountUp
                      end={50}
                      start={1}
                      className="flex-shrink-0 display-5  mb-0 counter"
                    />
                    <div class="ps-4">
                      <p class="mb-0">Popular</p>
                      <h6 class="text-uppercase mb-0">Restaurants</h6>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="btn  py-3 px-5 mt-2 border border-danger"
                style={{ color: "var(--primary)" }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
