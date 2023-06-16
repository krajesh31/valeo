import React, { useEffect } from "react";
import Productimg1 from '../img/productimg1.png'
import Productimg4 from '../img/productimg4.png'
import Productimg5 from '../img/productimg5.png'
import Productimg7 from '../img/productimg7.png'
import AOS from 'aos';
import 'aos/dist/aos.css';



import '../css/product.css'
import { Link } from "react-router-dom";
function Product() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section>
            <div className="title-head">
                <h3>PRODUCTS</h3>
            </div>

            <div className="row">

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 p-0">
                <img src={Productimg1} alt=""  width="100%" height="100%" />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-12  p-0 product-child " >
                    <div className=" px-5">
                        <div>
                            <h2 data-aos="fade-top">WINDING WIRE</h2>
                            <p data-aos="fade-top">We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.</p>
                            <div className="newIndustryReadMore product-read-child pb-3">
                                <button><a className="newIndustryReadMoreLink" href="wire">Read More</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-12  p-0 child2 product-child " >
                    <div className=" px-5">
                        <div>
                            <h2 data-aos="fade-top">RENEWABLE ENERGY</h2>
                            <p data-aos="fade-top">We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.</p>
                            <div className="newIndustryReadMore product-read-child pb-3">
                                <button><a className="newIndustryReadMoreLink" href="Pv">Read More</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 p-0">
                    <img src={Productimg4} alt=""  width="100%" height="100%" />
                </div>                
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 p-0">
                    <img src={Productimg5} alt=""  width="100%" height="100%" />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-12  p-0 product-child child3" >
                    <div className=" px-5">
                        <div>
                            <h2 data-aos="fade-top">PACKAGING OPTION</h2>
                            <p data-aos="fade-top">We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.</p>
                            <div className="newIndustryReadMore product-read-child pb-3">
                                <button><a className="newIndustryReadMoreLink" href="Energy">Read More</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-12  p-0 product-child child4" >
                    <div className=" px-5">
                        <div>
                            <h2 data-aos="fade-top">QUALITY ASSURANCE</h2>
                            <p data-aos="fade-top">We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.</p>
                            <div className="newIndustryReadMore product-read-child pb-3">
                                <button><a className="newIndustryReadMoreLink" href="Quality">Read More</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 p-0">
                <img src={Productimg7} alt=""  width="100%" height="100%"/>
                </div>
            </div>           
        </section>
    )
}

export default Product;