import React, { useEffect, useState } from 'react'
import wir from '../img/Winding.jpg'
import '../css/dropdown.css'
import tech1 from '../img/tech1.png'
import tech2 from '../img/tech2.png'
import tech3 from '../img/tech3.png'
import tech4 from '../img/tech4.png'
import tech6 from '../img/tech6.png'
import tech7 from '../img/tech7.png'
import tech8 from '../img/tech8.png'
import Arrow from './Arrow'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PopUp from './PopUp'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhatsApp6 from "../img/WhatsApp6.jpg"
import Whatsapp17 from "../img/WhatsApp7.jpg"
import WhatsApp7 from "../img/productimg3.png"
import Pv5 from "../img/productimg4.png"
import cal from '../img/cal.png'
import '../css/plugin.css'
import propv from '../img/clients/callaction.jpg'



function Wire() {
  useEffect(() => {
    AOS.init();
  }, [])
  const [modalShow, setModalShow] = useState(false);


  return (

    <section className='mt-5'>
      <div className='wire-img mx-auto'>
        <img src={wir} alt='' className='mx-auto' />
      </div>
      <div className="winding mb-5">
        <h2>Winding Wire</h2>
      </div>
      <div>

      </div>
      {/* <div className='Vartika container my-4' data-aos="fade-top">
        <h2 >Winding Wire</h2>
        <h5>Transforming power</h5>
      </div> */}
      <div className="row  my-5 mx-5">
        <div className="col-xxl-4 col-xl-4 col-md-4 my-4">

          <Carousel autoPlay infiniteLoop className="def-cal "  >
            <div>
              <img alt="" src={WhatsApp7} className="plugin-slider-img" />
            </div>
            <div>
              <img alt="" src={Whatsapp17} />
            </div>
            <div>
              <img alt="" src={WhatsApp6} />
            </div>
            {/* <div>
    <img alt="" src={Pv5} />
    </div> */}
          </Carousel>
        </div>

        <div className="col-xxl-4 col-xl-4 col-md-4 plugin-p my-4" >
          <p >Pallet Racking provides your warehousing teams with unrestricted access to all your pallets at all times. The system delivers versatility and assembly as single- or double-depth racks. Pallet Racking easily adapts to your specific warehouse and storage requirements, thanks to a variety of widths, depths and heights. In fact, Racking will fit into any space available, and is suited to all kinds of pallets – whether they be Euro, disposable or captive pallets, mesh boxes or bins.</p>
        </div>

        <div className="col-xxl-3 col-xl-3 col-md-4   plugin-p  " >
          <div class="box">
            <div className='pvuph'>
              <h1 className="pt-3">Valeo Calculator</h1>
            </div>
            <img src={cal} className="calImg" />
            <div class="box-content">
              <PopUp />
            </div>
            <ul class="social-links">
              <li><a href="#"><i class="fa fa-search"></i></a></li>
              <li><a href="#"><i class="fa fa-link"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className='container tech'>
        <img src={tech1} alt='' className='my-3 img-fluid' data-aos="fade-top" />
        <img src={tech2} alt='' className='my-3 img-fluid' data-aos="fade-top" />
        <img src={tech3} alt='' className='my-3 img-fluid' data-aos="fade-top" />
        <img src={tech4} alt='' className='my-3 img-fluid' data-aos="fade-top" />
        <img src={tech6} alt='' className='my-3 img-fluid' data-aos="fade-top" />
        <img src={tech7} alt='' className='my-3 img-fluid' data-aos="fade-top" />
        <img src={tech8} alt='' className='my-3 img-fluid' data-aos="fade-top" />

      </div> */}
      <div className="my-0">
        <img src={propv} alt="" className='calnew-img' />
      </div>
      <Arrow />
    </section>
  )
}

export default Wire;