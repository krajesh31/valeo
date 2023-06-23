import React, { useEffect, useState } from "react";
import logo from '../img/logo2.png';
import callusbg from "../img/callus-bg.png";
import {FaHeadphonesAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Callus() {
  
  return (
    <section className="callus-section" style={{ backgroundImage: `url(${callusbg})` }}>
            
    <div className="container pt-5 pb-5">
        <div className="row align-items-center">
            
            <div className="col-xl-2 offset-xl-1 col-lg-6 col-md-6">
                <div className="mb-30">
                    <div className="d-sm-flex align-items-center wow fadeInUp2  animated" data-wow-delay=".3s">
                        <div className="callus-logo mb-2">
                        <img src={logo} alt=""  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-8 col-lg-6 col-md-6 mt-2">
                <div className="callus-content">
                    <div className="text-start wow fadeInUp2  animated" data-wow-delay=".3s">
                        <h6><span><FaHeadphonesAlt /></span> <span>Product Support</span></h6>
                        <h2>We provide dedicated support for our product-related queries ?</h2>
                        <Link to='/contact' className="popup-button btn btn-primary">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Callus;
