import React from "react";
import '../css/footer.css'
import logo from '../img/logo2.png';
import line from '../img/footerline.png'
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <section className="footer">
            <div className="footer-line">
                
            </div>
            <div className="footer-grid">
                <div className="row">
                    <div class="col-sm-6 col-lg-3 col-md-6 col-12">
                        <div className="footer-child">
                            <img src={logo} alt="" className="footer-img"/>
                            <p>We are supplying copper wires and rods that have high electrical conductivity, good forming properties.</p>
                            <div className="footer-icons">
                                <div>
                                    <span className="fb"><FaFacebook  className="footer-icons-span"/></span>
                                </div>
                                <div>
                                    <span className="insta"><FaInstagram className="footer-icons-span footer-insta"/></span>
                                </div>
                                <div>
                                    <span  className="twitter"><FaTwitter className="footer-icons-span footer-twitt"/></span>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 col-md-6 col-12">
                        <div className="footer-div-2">
                            <div className="footer2-grid">
                                <div className="grid-div-child quick" >
                                    <h6 className="footer-head">QUICK LINKS</h6>
                                    <h6 className="my-4"><Link to='/' className="grid-child-link"><FaAngleRight/>Home</Link></h6>
                                    <h6  className="my-4"><Link to='/about' className="grid-child-link"><FaAngleRight/> About Us</Link></h6>
                                    <h6  className="my-4"><Link to='/facility' className="grid-child-link"><FaAngleRight/> Facility</Link></h6>
                                    {/* <h6  className="my-4"><Link className="grid-child-link"><FaAngleRight/> Products</Link></h6> */}
                                    <h6  className="my-4"><Link to='/partners' className="grid-child-link"><FaAngleRight/> Partners</Link></h6>
                                    <h6  className="my-4"><Link to='/contact' className="grid-child-link"><FaAngleRight/> Contact</Link></h6>
                                    {/* <h6  className="my-4"><Link className="grid-child-link"><FaAngleRight/> Contact us</Link></h6> */}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 col-md-6 col-12">
                    <div className="footer-div-2">
                        <div className="footer2-grid ">
                                <div className="grid-div-child">
                                    <h6 className="footer-head">PRODUCTS</h6>
                                    <h6  className="my-4"><Link to='/wire' className="grid-child-link"><FaAngleRight/>Winding Wire</Link></h6>
                                    <h6  className="my-4"><Link to='pv' className="grid-child-link"><FaAngleRight/> Renewable Energy</Link></h6>
                                    <h6  className="my-4"><Link  className="grid-child-link"><FaAngleRight/> Technical Data</Link></h6>
                                    <h6  className="my-4"><Link to='/energy' className="grid-child-link"><FaAngleRight/> Packaging</Link></h6>
                                    <h6  className="my-4"><Link to='/quality' className="grid-child-link"><FaAngleRight/> Quality Assurance</Link></h6>
                                    {/* <h6 className="my-4"><Link to='/' className="grid-child-link my-5"><FaAngleRight/> Solar Fins</Link></h6> */}

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3 col-md-6 col-12">
                        <div className="footer-div-2">
                            <div className="footer2-grid">
                                <div className="grid-div-child  ">
                                    <h6 className="footer-head" >REACH US</h6>
                                    <h6 className="my-4"><Link to='/contact' className="grid-child-link"><FaAngleRight/> Contact Us</Link></h6>
                                    <h6  className="my-4"><Link className="grid-child-link"><FaAngleRight/> Help</Link></h6>
                                    <h6  className="my-4"><Link className="grid-child-link"><FaAngleRight/> Privacy</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                

                

                
            </div>

        </section>
    )
}
export default Footer;