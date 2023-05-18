import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pv1 from "../img/productimg1.png"
import Pv3 from "../img/productimg2.png"
import Pv13 from "../img/productimg3.png"
import Pv5 from "../img/productimg4.png"
import Emi from '../img/emi.jpg'
import '../css/plugin.css'
import PopUp from "./PopUp";

function PluginSlider()
{
  const [modalShow, setModalShow] = useState(false);
  

  return(
     <section className="">
    <div className="row container">
    <div className="col-xxl-5 col-xl-5 col-md-8">

 <Carousel autoPlay infiniteLoop  className="def-cal"  >
    <div>
      <img alt="" src={Pv1}  className="plugin-slider-img"/>
    </div>
    <div>
    <img alt="" src={Pv3} />
   </div>
    <div>
    <img alt="" src={Pv13} />
    </div>
    <div>
    <img alt="" src={Pv5} />
    </div>
  </Carousel>
  </div>

  <div className="col-xxl-4 col-xl-4 col-md-8 plugin-p " >
    <p >Pallet Racking provides your warehousing teams with unrestricted access to all your pallets at all times. The system delivers versatility and assembly as single- or double-depth racks. Pallet Racking easily adapts to your specific warehouse and storage requirements, thanks to a variety of widths, depths and heights. In fact, Racking will fit into any space available, and is suited to all kinds of pallets – whether they be Euro, disposable or captive pallets, mesh boxes or bins.</p>
  </div>
  
  <div className="col-xxl-3 col-xl-3 col-md-8  plugin-p" >
  <div class="box">
                <img src={Emi}/>
                <div class="box-content">
                     <PopUp/>
                </div>
                <ul class="social-links">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
  </div>
  </section>

  )
}
export default PluginSlider;