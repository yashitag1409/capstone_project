import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FM() {
  // const menuArr = [];
  const [menu, setMenu] = useState([]);

  const setMenuAr = async () => {
    const formateData = await axios.get("http://localhost:4164/displaymenu");
    setMenu(formateData.data);
  };
  useEffect(() => {
    setMenuAr();
  }, []);

  return (
    <div className="white-bgc">
      <div className="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="section-title ff-secondary text-center  fw-normal">
              Food Menu
            </h5>
            <h1 class="mb-5">Most Popular Items</h1>
          </div>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li class="nav-item">
                <a
                  class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active anchor"
                  data-bs-toggle="pill"
                  href="#tab-4"
                >
                  {/* <i class="fa fa-coffee fa-2x text-primary"></i> */}
                  {/* <i class="fa-solid fa-cake-slice fa-2x "></i> */}
                  {/* <i
                    class="fa-duotone fa-cake-slice fa-2x text-primary"
                    style={{
                      "--fa-primary-color": "#0f63f5",
                      "--fa-secondary-color": "#105ada",
                    }}
                  /> */}
                  <i class="fa fa-coffee fa-2x " style={{ color: "var(--primary)" }}></i>

                  <div class="ps-3">
                    <small class="text-body">Popular</small>
                    <h6 class="mt-n1 mb-0 text-dark" >Sweets</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 "
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <i className="fa fa-coffee fa-2x " style={{ color: "var(--primary)" }}></i>
                  <div className="ps-3 anchor" style={{ textDecoration: "none" }}>
                    <small class="text-body">Popular</small>
                    <h6 class="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 pb-3 anchor"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <i className="fa fa-hamburger fa-2x " style={{ color: "var(--primary)" }}></i>
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="anchor d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <i class="fa fa-utensils fa-2x " style={{ color: "var(--primary)" }}></i>
                  <div class="ps-3">
                    <small class="text-body">Lovely</small>
                    <h6 class="mt-n1 mb-0">Dinner</h6>
                  </div>
                </a>
              </li>
            </ul>
            <div class="tab-content">
              {/* tab 1  : Breakfast Tab  */}
              <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="row g-4">
                  {menu
                    .filter((item) => item.type.includes("breakfast"))
                    .map((item, index) => {
                      return (
                        <>
                          <div id={index} className="col-lg-6">
                            <div className="d-flex align-items-center">
                              {/* <img class="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style="width: 80px;">  */}
                              <div className="w-100 d-flex flex-column text-start ps-4">
                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                  <span>{item.item_name}</span>
                                  <span className="text-primary">
                                    &#8377; {item.item_price}
                                  </span>
                                </h5>
                                <small className="fst-italic">
                                  {/* Ipsum ipsum clita erat amet dolor justo diam */}
                                  {item.res_name}
                                </small>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
              {/* Tab 2 : Lunch tab */}
              <div id="tab-2" className="tab-pane fade show p-0">
                <div class="row g-4">
                  {menu
                    .filter((item) => item.type.includes("lunch"))
                    .map((item) => {
                      return (
                        <>
                          <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                              {/* <img class="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style="width: 80px;">  */}
                              <div className="w-100 d-flex flex-column text-start ps-4">
                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                  <span>{item.item_name}</span>
                                  <span className="text-primary">
                                    &#8377; {item.item_price}
                                  </span>
                                </h5>
                                <small className="fst-italic">
                                  {/* Ipsum ipsum clita erat amet dolor justo diam */}
                                  {item.res_name}
                                </small>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
              {/* tab 3 : Dinner tab */}
              <div id="tab-3" className="tab-pane fade show p-0">
                <div class="row g-4">
                  {menu
                    .filter((item) => item.type.includes("dinner"))
                    .map((item) => {
                      return (
                        <>
                          <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                              {/* <img class="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style="width: 80px;">  */}
                              <div className="w-100 d-flex flex-column text-start ps-4">
                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                  <span>{item.item_name}</span>
                                  <span className="text-primary">
                                    &#8377; {item.item_price}
                                  </span>
                                </h5>
                                <small className="fst-italic">
                                  {/* Ipsum ipsum clita erat amet dolor justo diam */}
                                  {item.res_name}
                                </small>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
              <div id="tab-4" class="tab-pane fade show p-0 active">
                <div class="row g-4">
                  {menu
                    .filter((item) => item.type.includes("Sweet"))
                    .map((item, index) => {
                      return (
                        <>
                          <div id={index} className="col-lg-6">
                            <div className="d-flex align-items-center">
                              {/* <img class="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style="width: 80px;">  */}
                              <div className="w-100 d-flex flex-column text-start ps-4">
                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                  <span>{item.item_name}</span>
                                  <span className="text-primary">
                                    &#8377; {item.item_price}
                                  </span>
                                </h5>
                                <small className="fst-italic">
                                  {/* Ipsum ipsum clita erat amet dolor justo diam */}
                                  {item.res_name}
                                </small>
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
        </div>
      </div>
    </div>
  );
}
