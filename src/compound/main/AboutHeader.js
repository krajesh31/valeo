import React, { useEffect } from "react";
import '../css/about.css'
import about from '../img/WhatsApp6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAngleLeft, FaAngleRight, FaBriefcase, FaMonero, FaVrCardboard } from 'react-icons/fa'
import Misson from '../img/clients/mision.jpg'
import Vision from '../img/clients/vision.jpg'
import Core from '../img/clients/quality.jpg'
import last from '../img/about-last.png'
import Arrow from './Arrow'


function AboutHeader() {
    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <section>
            <div className="about-header" data-aos="fade-top">
                <h2>.</h2>
            </div>

            <div className="row services my-5 mx-2">

                <div className="col-xxl-6 col-xl-6 mt-3">
                <img src={about} alt="" width="95%" style={{borderRadius:"20px"}} />
                </div>
                <div className="col-xxl-6 col-xl-6 about-child my-3">
                    <div className="About-update-header">
                        <h3 className=" mb-4">About Our Company</h3>
                    </div>
                    <p>

                        Established in 1984, Vartika Wire Products Private Limited is a leading manufacture of copper wire and allied products in South India. We have been manufacturing bunched & Stranded, Tin Plated, Super Enameled Copper Winding Wires (Magnet Wires) for the last 2 decades catering to the specific requirements of our customers. We have a manufacturing capacity about 10000 tones of copper wire allied products a year. the company caters to the specific requirements of various core industry sectors like machinery, telecom, power and automotive. The company holds an ISO 9001:2000 certification and RoHS certification for its products. Using state of the art technology to ensure quality and productivity.

                    </p>
                    <p>Established in 1984, Vartika Wire Products Private Limited is a leading manufacture of copper wire and allied products in South India. We have been manufacturing bunched & Stranded, Tin Plated, Super Enameled Copper Winding Wires (Magnet Wires) for the last 2 decades catering to the specific requirements of our customers. We have a manufacturing capacity about 10000 tones of copper wire allied products a year.</p>

                </div>


            </div>



            <div className="about-p  choose">
            <p>Established in 1984, Vartika Wire Products Private Limited is a leading manufacture of copper wire and allied products in South India. We have been manufacturing bunched & Stranded, Tin Plated, Super Enameled Copper Winding Wires (Magnet Wires) for the last 2 decades catering to the specific requirements of our customers. We have a manufacturing capacity about 10000 tones of copper wire allied products a year.</p>
            </div>
            <div className="about-header2">
                <h2 className="my-5" data-aos="fade-top">WHY CHOOSE US</h2>
                <div className="about-p  choose" data-aos="fade-top">
                    <p className="my-4">
                        Vartika Wire Products Private Limited is a leading Manufacturer of copper wires and allied products. Established in 1984, the company caters to the specific requirements of verious core industry sectors like machinery, telecom, power and automotive, The company holds an ISO 9001:2000 certification and users state of the art technology to ensure quality and productivity.
                    </p>
                    <p className="my-4">
                        The Story of copper is a history of human endeavor since man evolved from the Bronze Age. Wherever there is civilization there is copper. In fact development would not have been possible without copper. It is a basic necessity for growth. It is ubiquiltous metal and its contribution to every civilization has given it a unique position in the history of technology.
                    </p>
                    <p className="my-4">
                        The Consumption of copper is one of the development indices of a country. While the developed countries consume approximately 7000 grams of copper per person in emerging ad developing countries it is only at approximately 300 grams per person.
                    </p>

                </div>

            </div>

            <div>
                <div className="container mt-5 pb-3">


                    <main className="grid product-head">
                        <article>
                            <div className="industry-artical-div">
                                <img src={Misson} alt="" className="about-image" data-aos="fade-top" />
                                <div className="text industry-text" data-aos="fade-top">
                                    {/* <FaMonero className="famonero" /> */}
                                    <h4 className="my-3">OUR MISSION</h4>
                                    <p>We are dedicated to providing technologically superior products of execeptional velue to our customers to help them gain a competitive edge in their market, while providing a nurturing grouth ev]nvironment that encourages employees to be highly productive.
                                    </p>
                                </div>
                            </div>

                        </article>
                        <article>
                            <div className="industry-artical-div">
                                <img src={Vision} alt="" className="about-image" data-aos="fade-top" />
                                <div className="text industry-text" data-aos="fade-top">
                                    <h4 className="my-3">OUR VISSION</h4>
                                    <p>Our Success lies in the success of our customers. Being in the manufacturing industry we are important link in a long chain of events that must take place in order to bring a project to completion. As a customer driven company we ensure the uuality of our products through applications of new technology and best business practices.
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="industry-artical-div">
                                <img src={Core} alt="" className="about-image" data-aos="fade-top" />
                                <div className="text industry-text" data-aos="fade-top">
                                    <h4 className="my-3">QUALITY ASSURANCE AND RECOGNITION</h4>
                                    <p>The Testing Laboratories at Vartika Wire Products Private Limited consist of two lab sections— the Electric Properties Lab and the Dimensional and Material Properties Lab. While these two labs work hand in hand, each is directly responsible for different activities.</p>
                                </div>
                            </div>
                        </article>





                    </main>
                </div>

            </div>
            <Arrow />

        </section>
    )
}

export default AboutHeader;