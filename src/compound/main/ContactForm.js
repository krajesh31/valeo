import React, { useEffect } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaPhone, FaPhoneAlt, FaPhoneSquareAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Arrow from "./Arrow";
import AOS from 'aos';
import 'aos/dist/aos.css';
import surat from '../img/surat.jpg'
import jai from '../img/jai.jpg'
import delhi from '../img/delhi.jpg'


function ContactForm() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="contact-head">
                <h3 data-aos="fade-top">.</h3>
            </div>
            
            <div className="contact-form-lable container mt-4 mb-3">
                {/* <div>
                <h2>Contact Form</h2>
                </div> */}
                <div className="row ">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-0 mb-5 form-updated-grid1" >
                        <div className="form-grid2-head" >
                            <h2 className="mx-4 pt-4 pb-4" >Valeo Product LLP</h2>
                            <div className="cont-flex my-3">
                                <div className="location-contact location-last-contact px-1">
                                    <FaLocationArrow className="contact-last-icon" />
                                </div>
                                <div><h6 className="con-info"> Sy No. 192, 195, 196, 199, <br/>Kucharam(V), Toopran(M), Medak(D) -502 336,<br/> Telangana, India.</h6></div>

                            </div>

                            <div className="cont-flex my-3">
                                <div className="location-contact px-1">
                                    <FaEnvelope />
                                </div>

                                <div><h6 className="con-info mt-2">lavi@muthametal.com</h6></div>

                            </div>

                            <div className="cont-flex my-3">
                                <div className="location-contact loc-con px-1">
                                    <FaPhoneAlt />
                                </div>
                                <div><h6 className="con-info ">+91 8000013445</h6></div>

                            </div>

                            <div className="cont-flex my-3">
                                <div className="location-contact loc-con px-1">
                                    <FaWhatsapp />
                                </div>
                                <div><h6 className="con-info ">  +91 8000013445</h6></div>

                            </div>

                            <div className="cont-flex my-3">
                                <div className="location-contact loc-con px-1">
                                    <FaMobileAlt />
                                </div>
                                <div><h6 className="con-info "> +91 8000013445 </h6></div>

                            </div>

                        </div>
                        
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 mt-0 mb-5 ">
                        <div className="form-new-gridHead">
                            <div>
                                 <h1 className="mb-4">Contact Form</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div class="mb-3 form-input-last-update">
                                        <label for="exampleFormControlInput1" class="form-label">Your Name*</label>
                                        <input type="email" class="form-control walletfundmanager-form-input " id="exampleFormControlInput1" placeholder="Enter Your Name"   required/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div class="mb-3 form-input-last-update">
                                        <label for="exampleFormControlInput1" class="form-label">Your Email*</label>
                                        <input type="email" class="form-control walletfundmanager-form-input " id="exampleFormControlInput1" placeholder="Enter Your Email"   required/>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div class="mb-3 form-input-last-update">
                                        <label for="exampleFormControlInput1" class="form-label">Enter Subject*</label>
                                        <input type="email" class="form-control walletfundmanager-form-input " id="exampleFormControlInput1" placeholder="Enter Subject"   required/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div class="mb-3 form-input-last-update">
                                        <label for="exampleFormControlInput1" class="form-label">Number</label>
                                        <input type="email" class="form-control walletfundmanager-form-input " id="exampleFormControlInput1" placeholder="Number"   required/>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div class="mb-3 form-input-last-update">
                                        <label for="exampleFormControlInput1" class="form-label">Enter Company*</label>
                                        <input type="email" class="form-control walletfundmanager-form-input " id="exampleFormControlInput1" placeholder="Enter Your Company"   required/>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div class="mb-3 form-input-last-update">
                                        <label for="exampleFormControlInput1" class="form-label">Address*</label>
                                        <input type="email" class="form-control walletfundmanager-form-input " id="exampleFormControlInput1" placeholder="Address" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div class="mb-3 form-input-last-update form-group">
                                        <label for="exampleFormControlInput1" class="form-label">Enter Your Message*</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="message..."></textarea>
                                    </div>
                                </div>
                                <div class="col-6 form-input-last-update">
                                    <button class="btn btn-primary form-update-submit " type="submit">Submit form</button>
                                </div>

                            </div>

                        </div>
                    </div>
                   
                </div>


            </div>
            <div class="container my-5">

                <div className="industry-head">
                    <h2 className="ind-serve py-1" data-aos="fade-top">BRANCH OFFICES</h2>
                    {/* <p className="" data-aos="fade-top ">The term "industry" can refer to a broad range of fields and sectors involved in the production of goods or services. Some examples of industries include:</p> */}
                </div>
                <main class="grid my-5">
                    <article className="artical ">
                        <div className="industry-artical-div">
                            <img src={surat} alt="" data-aos="fade-top" className="places" />
                            <div class="text industry-text" id="form-update-card">
                                <div class="panel-content">
                                    {/* <h2 className="my-3" data-aos="fade-top">SOLAR PANEL</h2> */}
                                    <div className="read" style={{ textAlign: "left" }}>
                                        <h1 className="mx-2">Surat</h1>
                                        <div className="branch-flex">
                                            <div>
                                                <FaLocationArrow className="mx-2" />
                                            </div>
                                            <div>
                                                <h5>Sy No. 192, 195, 196, 199, Kucharam(V), Toopran(M), Medak(D) -502 336, Telangana, India</h5>
                                            </div>
                                        </div>

                                        <div className="branch-flex">
                                            <div>
                                                <FaPhoneAlt className="mx-2" />
                                            </div>
                                            <div>
                                                <h5>+91 8000013445</h5>
                                            </div>
                                        </div>

                                        <div className="branch-flex">
                                            <div>
                                                <FaEnvelope className="mx-2" />
                                            </div>
                                            <div>
                                                <h5>lavi@muthametal.com</h5>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <p data-aos="fade-top">The solar panel industry is involved in the design, manufacturing, installation, and maintenance of solar panels, which are devices that capture and convert the energy from the sun's rays into usable electrical energy. Solar panels are typically made up of photovoltaic (PV) cells that generate electrical current when exposed to sunlight.</p> */}
                                </div>
                            </div>
                        </div>

                    </article>
                    <article className="industry-artical2">
                        <div className="industry-artical-div">
                            <img src={jai} alt="" data-aos="fade-top" className="places" />
                            <div class="text industry-text">
                                {/* <h2 className="my-3">TRANSFORMER</h2> */}
                                <div className="read" style={{ textAlign: "left" }} >
                                    <div className="read" style={{ textAlign: "left" }}>
                                        <h1 className="mx-2">Jaipur</h1>
                                        <div className="branch-flex">
                                            <div>
                                                <FaLocationArrow className="mx-2" />
                                            </div>
                                            <div>
                                                <h5>Sy No. 192, 195, 196, 199, Kucharam(V), Toopran(M), Medak(D) -502 336, Telangana, India</h5>
                                            </div>
                                        </div>

                                        <div className="branch-flex">
                                            <div>
                                                <FaPhoneAlt className="mx-2" />
                                            </div>
                                            <div>
                                                <h5>+91 8000013445</h5>
                                            </div>
                                        </div>

                                        <div className="branch-flex">
                                            <div>
                                                <FaEnvelope className="mx-2" />
                                            </div>
                                            <div>
                                                <h5>lavi@muthametal.com</h5>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* <p>The transformer industry is involved in the manufacturing, installation, and maintenance of transformers, which are electrical devices used to transfer electrical energy between circuits by means of electromagnetic induction. Transformers are commonly used in power distribution systems to step up or step down the voltage of electrical energy.</p> */}

                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="industry-artical-div">
                            <img src={delhi} alt="" data-aos="fade-top" className="places" />
                            <div class="text industry-text">
                                {/* <h2 className="my-3" data-aos="fade-top">AUTOMOTIVE</h2> */}
                                <div className="read" style={{ textAlign: "left" }}>
                                    <div className="read" style={{ textAlign: "left" }}>
                                        <h1 className="mx-2">Delhi</h1>
                                        <div className="branch-flex">
                                            <div>
                                                <FaLocationArrow className="mx-2" />
                                            </div>
                                            <div>
                                                <h5>Sy No. 192, 195, 196, 199, Kucharam(V), Toopran(M), Medak(D) -502 336, Telangana, India</h5>
                                            </div>
                                        </div>

                                        <div className="branch-flex">
                                            <div>
                                                <FaPhoneAlt className="mx-2" />
                                            </div>
                                            <div>
                                                <h5>+91 8000013445</h5>
                                            </div>
                                        </div>

                                        <div className="branch-flex">
                                            <div>
                                                <FaEnvelope className="mx-2" />
                                            </div>
                                            <div>
                                                <h5>lavi@muthametal.com</h5>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* <p data-aos="fade-top">Automotive manufacturing involves the production of vehicles and their components, including engines, transmissions, brakes, and electrical systems. Many different materials are used in the production of vehicles, including metals, plastics, rubber, and glass. Copper is also used in the production of automotive components, such as wiring, electrical connectors, and radiators.</p> */}

                            </div>
                        </div>
                    </article>

                </main>
            </div>

        </>
    )
}

export default ContactForm;