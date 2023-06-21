import axios from "axios";
import React, { useEffect, useState } from "react";
import "./menu.css";
export default function Menu() {
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
    <div className="food-menu-container">
      <div className="container-xxl py-5">
      <video autoplay muted loop id="res-bg-video">
          <source src="../../assest/img/smoke.mp4" type="video/mp4" />
        </video>
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="section-title ff-secondary text-center  fw-normal">
              Menu
            </h5>
            <h1 class="mb-5">Most Popular Items</h1>
            <div class="row g-4">
              {menu.map((item, index) => {
                return (
                  <>
                    {/* <div className="col-1"></div> */}
                    <div id={index} className="col-lg-6">
                      <div className="d-flex align-items-center">
                        {/* <img class="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style="width: 80px;">  */}
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span className="fst-italic">{item.item_name}</span>
                            <span className="fst-italic">
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
                    <div className="col-lg-6">
                      {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, soluta? */}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
