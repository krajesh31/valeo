import React, { useEffect } from "react";
import '../css/partners.css'
import Client1 from '../img/clients/client1.jpg'
import Client2 from '../img/clients/client2.jpg'
import Client3 from '../img/clients/client3.jpg'
import Client4 from '../img/clients/client4.jpg'
import Client5 from '../img/clients/client5.jpg'
import Client6 from '../img/clients/client6.jpg'
import Client7 from '../img/clients/client7.jpg'
import Client8 from '../img/clients/client8.jpg'
import Client9 from '../img/clients/client9.jpg'
import Client10 from '../img/clients/client10.jpg'
import Client11 from '../img/clients/client11.jpg'
import Client12 from '../img/clients/client12.jpg'

import partner2 from '../img/partner4.png'
import Arrow from "./Arrow";
import AOS from 'aos';
import 'aos/dist/aos.css';


function PartnersHeader() {
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <section>
            <div class="team-boxed">
                <div className="partners-head">
                        <h2 id="partners-h2"  data-aos="fade-top">.</h2>
                    </div>
                <div class="mx-5">

                    <div className="mt-1 mb-3" data-aos="fade-top">
                        <h2 className="part-h2 ">Partners</h2>
                        <p className="part-p mt-5">We have been associated with a few of the Industry leaders in manufacturing who proudly have in their possession racking systems made by Smart Storage Technologies.</p>
                    </div>
                    
                    <div class=" people container ">
                        
                        <div className=" my-3" data-aos="fade-top">
                            <div className="card client">
                            <div className=""> 
                            <img src={Client1} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>

                        <div className=" my-3 " data-aos="fade-top">
                            <div className="card client">
                            <div className=""> 
                            <img src={Client2} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>
                        
                        <div className=" my-3 ">
                            <div className="card client" data-aos="fade-top">
                            <div className=""> 
                            <img src={Client3} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>
                        
                         <div className=" my-3 ">
                            <div className="card client" data-aos="fade-top">
                            <div className=""> 
                            <img src={Client4} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>
                        
                        <div className=" my-3 " data-aos="fade-top">
                            <div className="card client">
                            <div className=""> 
                            <img src={Client5} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>

                        
                        <div className=" my-3 ">
                            <div className="card client" data-aos="fade-top">
                            <div className=""> 
                            <img src={Client6} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>

                        
                        <div className=" my-3 " data-aos="fade-top">
                            <div className="card client">
                            <div className=""> 
                            <img src={Client7} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>
                        
                        <div className=" my-3 " data-aos="fade-top">
                            <div className="card client">
                            <div className=""> 
                            <img src={Client8} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>
                        
                        <div className=" my-3 " data-aos="fade-top">
                            <div className="card client">
                            <div className=""> 
                            <img src={Client9} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>

                        
                        <div className=" my-3 " data-aos="fade-top">
                            <div className="card client">
                            <div className=""> 
                            <img src={Client10} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>

                        
                        <div className=" my-3 " data-aos="fade-top">
                            <div className="card client">
                            <div className=""> 
                            <img src={Client11} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>

                        
                        <div className=" my-3 " data-aos="fade-top">
                            <div className="card client">
                            <div className=""> 
                            <img src={Client12} alt="" className="img-fluid part-img"/>
                            </div>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
            <Arrow/>
        </section>
    )
}

export default PartnersHeader;