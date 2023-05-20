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
                <h3>PRODUCT</h3>
            </div>

            <div class="product-grid">
                <div class="product-child product-img">
                    <img src={Productimg1} alt="" />
                </div>
                <div class="product-child product-desc px-2" >
                    <div>
                    <h2 data-aos="fade-top">WINDING WIRE</h2>
                    <p data-aos="fade-top">We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.</p>
                    <p data-aos="fade-top">Flat wire, Ribbon, String Wire, Photovoltaic Wire, PV Wire, Interconnecting tab, PV Copper Ribbon, Solar cell interconnect tabbing, Flattened copper wire, Solder plated copper ribbon, Tabbing Strip, Tabbing Ribbon , Stringing Ribbon.Solar cell interconnect tabbing, Flattened copper wire, Solder plated copper ribbon, Tabbing Strip, Tabbing Ribbon , Stringing Ribbon.</p>
                    
                    <div className="newIndustryReadMore product-read-child">
                  <button className="product-read-child"><Link className="newIndustryReadMoreLink" to="/wire">Read More</Link></button>
                  </div>
                </div>
                </div>
            </div>
            <div class="product-grid">
                <div class="product-child product-desc child2 px-2" >
                    <div>
                    <h2 data-aos="fade-top">RENEWABLE ENERGY</h2>
                    <p data-aos="fade-top">We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.</p>
                    <p data-aos="fade-top">Flat wire, Ribbon, String Wire, Photovoltaic Wire, PV Wire, Interconnecting tab, PV Copper Ribbon, Solar cell interconnect tabbing, Flattened copper wire, Solder plated copper ribbon, Tabbing Strip, Tabbing Ribbon , Stringing Ribbon.Solar cell interconnect tabbing, Flattened copper wire, Solder plated copper ribbon, Tabbing Strip, Tabbing Ribbon , Stringing Ribbon.</p>
                                      <div className="newIndustryReadMore product-read-child">
                  <button><Link className="newIndustryReadMoreLink ">Read More</Link></button>
                  </div>
                </div>

                                     </div>
                <div class="product-child product-img">
                    <img src={Productimg4} alt="" />
                </div>
            </div>
            <div class="product-grid">
                <div class="product-child product-img">
                    <img src={Productimg5} alt="" />
                </div>
                <div class="product-child product-desc child3 px-2" >
                    <div>
                    <h2 data-aos="fade-top">PACKAGING OPTION</h2>
                    <p data-aos="fade-top">We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.</p>
                    <p data-aos="fade-top">Flat wire, Ribbon, String Wire, Photovoltaic Wire, PV Wire, Interconnecting tab, PV Copper Ribbon, Solar cell interconnect tabbing, Flattened copper wire, Solder plated copper ribbon, Tabbing Strip, Tabbing Ribbon , Stringing Ribbon.Solar cell interconnect tabbing, Flattened copper wire, Solder plated copper ribbon, Tabbing Strip, Tabbing Ribbon , Stringing Ribbon.</p>
                                      <div className="newIndustryReadMore product-read-child">
                  <button><Link className="newIndustryReadMoreLink ">Read More</Link></button>
                  </div>
                </div>
                                     </div>
            </div>
            <div class="product-grid">
                <div class="product-child product-desc child4 px-2" >
                    <div>
                    <h2 data-aos="fade-top">QUALITY ASSURANCE</h2>
                    <p data-aos="fade-top">We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.</p>
                    <p data-aos="fade-top">Flat wire, Ribbon, String Wire, Photovoltaic Wire, PV Wire, Interconnecting tab, PV Copper Ribbon, Solar cell interconnect tabbing, Flattened copper wire, Solder plated copper ribbon, Tabbing Strip, Tabbing Ribbon , Stringing Ribbon.Solar cell interconnect tabbing, Flattened copper wire, Solder plated copper ribbon, Tabbing Strip, Tabbing Ribbon , Stringing Ribbon.</p>
                                      <div className="newIndustryReadMore product-read-child">
                  <button><Link className="newIndustryReadMoreLink ">Read More</Link></button>
                  </div>
                </div>           </div>
                <div class="product-child product-img">
                    <img src={Productimg7} alt="" />
                    
                </div>
            </div>
           
        </section>
    )
}

export default Product;