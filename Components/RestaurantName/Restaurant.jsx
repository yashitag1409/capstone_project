import React, { useEffect, useState } from "react";
import "./restaurant.css";
import axios from "axios";
import restImage from "../../assest/img/hero.png";
import Menu from "../Menu/Menu";
// import restImg1 from "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByZXN0YXVyYW50fGVufDB8fDB8fHww&w=1000&q=80";
export default function Restaurant() {
  const [restaurant, setRestaurant] = useState([]);
  const [resName, setResName] = useState("");
  const fetchRes = async () => {
    const res = await axios.post("http://localhost:4164/displayRes");
    // console.log(res.data.data);
    setRestaurant(res.data.data);
  };
  useEffect(() => {
    fetchRes();
  });
  // console.log(resName);
  return (
    <div className="res-container">
      <div class="container-xxl pt-5 pb-5 ">
        
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1
              class="section-title ff-secondary text-center   fw-normal mb-5"
              style={{ color: "var(--primary)" }}
            >
              Restaurant
            </h1>
            <h3 class="mb-5">
              <div class="mb-3">
                {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                <input
                  type="text"
                  class="form-control"
                  id="restaurantSearchBar"
                  value={resName}
                  placeholder="Search your favorite restaurant"
                  onChange={(e) => {
                    setResName(e.target.value);
                  }}
                />
                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
              </div>
            </h3>
          </div>
          <div class="row g-4">
            {restaurant
              .filter((res) => res.res_name.toLowerCase().includes(resName))
              .map((res, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="col-lg-3 box-div col-md-6 wow fadeInUp"
                      // data-wow-delay="0.3s"
                    >
                      <div className="team-item text-center rounded overflow-hidden">
                        <div className="img-div overflow-hidden m-4">
                          <img
                            className="img-fluid"
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByZXN0YXVyYW50fGVufDB8fDB8fHww&w=1000&q=80"
                            alt=""
                          />
                        </div>
                        <div className="team-content">
                          <h5 className="mb-0">{res.res_name}</h5>
                          <small>Address: {res.address}</small> <br />
                          {/* <br /> */}
                          <small>Contact no : {res.phone_no}</small>
                        </div>
                        <br />
                        <div>
                          <input
                            type="button"
                            className="btn chMenu"
                            value="Check Menu"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
