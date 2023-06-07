import React, { useEffect } from "react";
import last from "../img/about-last.png";
import Arrow from "./Arrow";
import "../css/facility.css";
import about from "../img/aboutcard.png";
import facility from "../img/clients/cottan.jpeg";

function Facility() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about-header-Facility" data-aos="fade-top">
        <h2>.</h2>
      </div>

      <div className="row mx-2  mt-5">
        <div className="col-xxl-6 col-xl-6 col-md-6 mb-3" data-aos="fade-top">
          <img src={about} alt="" className="AboutUpdateImage" />
        </div>
        <div className="col-xxl-6 col-xl-6 col-md-6 about-child facility-child" data-aos="fade-top">
          <div className="About-update-header">
            <h3 className=" mb-4">INFRASTRUCTURE</h3>
          </div>
          <p>
            Equipped with first-rate infrastructure of modern machinery and
            quality raw material, the company has ISO 9001:2000 and RoHS
            certifications for its products. We believe that the best products
            can be produced and quality services can be offered to our customers
            always, only if we equip ourselves with the standards and values
            that help up manage our pepple well, keep our processes up-to-date
            and maintain long-lasting relationships with our clients.
            Infrastructure is tha following strenghts.
            <br />
            he company has ISO 9001:2000 and RoHS certifications for its
            products. We believe that the best products can be produced and
            quality services can be offered to our customers always, only if we
            equip ourselves with the standards and values that help up manage
            our pepple well, keep our processes up-to-date and maintain
            long-lasting relationships with our clients. Infrastructure is tha
            following strenghts.
          </p>
        </div>

        <div className="col-xxl-6 col-xl-6 col-md-6 my-4 about-child about-child2  facility-child" data-aos="fade-top">
          <p>
            Our Facilities have complete wire processing facilities for
            processing up to 10.000 MT of copper into various allied products.
            Our wire drawing process is advanced, having rod break-down.
          </p>
          <p>
            Small-scale manufacturer to a conglomerate, need a strong internet
            presence. Equipped with first-rate infrastructure of modern
            machinery and quality raw material, the company has ISO 9001:2000
            and RoHS certifications for its products. We believe that the best
            products can be produced and quality services can be offered to our
            customers always, only if we equip ourselves with the standards and
            values that help up manage our pepple well, keep our processes
            up-to-date and maintain long-lasting relationships with our clients.
            Infrastructure is tha following strenghts.
          </p>
        </div>

        <div className="col-xxl-6 col-xl-6 col-md-6 my-4" data-aos="fade-top">
          <img src={facility} alt="" className="AboutUpdateImage" />
        </div>
      </div>

      <Arrow />
    </>
  );
}
export default Facility;
