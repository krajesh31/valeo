import React, { useEffect, useState } from 'react'
import wir from '../img/Qualityassurance.jpg'
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
import WhatsApp14 from "../img/WhatsApp14.jpg";
import Pv5 from "../img/productimg4.png"
import cal from '../img/cal.png'
import '../css/plugin.css'
import propv from '../img/clients/callaction.jpg'
import $ from "jquery";
import ImageGallery from 'react-image-gallery';

function Energy() {
  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [modalShow, setModalShow] = useState(false);
  const images = [
    {
      original: Whatsapp17,
      thumbnail: Whatsapp17,
    },
    {
      original: WhatsApp6,
      thumbnail: WhatsApp6,
    },
    {
      original: WhatsApp7,
      thumbnail: WhatsApp7,
    },
    {
      original: WhatsApp14,
      thumbnail: WhatsApp14,
    }
  ];

  $(".thumbnail").on("click", function () {
    var clicked = $(this);
    var newSelection = clicked.data("big");
    var $img = $(".primary").css(
      "background-image",
      "url(" + newSelection + ")"
    );
    clicked.parent().find(".thumbnail").removeClass("selected");
    clicked.addClass("selected");
    $(".primary").empty().append($img.hide().fadeIn("slow"));
  });
  const divStyle = {
    backgroundImage: `url(${WhatsApp7})`,
   
  };
  return (

    <section className='mt-5'>
      <div className='wire-img mx-auto'>
        <img src={wir} alt='' className='mx-auto' />
      </div>
      <div className="winding mb-5">
        <h2>Quality Assurance</h2>
      </div>

      <div className="row  my-5 mx-5 ">
        <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6 mx-5  mt-5 mb-4 final_product">
          <div className="slider-container">
            <ImageGallery items={images} thumbnailPosition="right" showPlayButton={false} />
          </div>
        </div>

        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12   plugin-p  ">
          <div className="box">
            <div className="pvuph">
              <h1 className="pt-3">Valeo Calculator</h1>
            </div>
            <img src={cal} className="calImg" />
            <div className="box-content">
              <PopUp />
            </div>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fa fa-search"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-link"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xxl-12 col-xl-12 col-md-12 plugin-p justify my-4">
          <p className="">
            Pallet Racking provides your warehousing teams with unrestricted
            access to all your pallets at all times. The system delivers
            versatility and assembly as single- or double-depth racks. Pallet
            Racking easily adapts to your specific warehouse and storage
            requirements, thanks to a variety of widths, depths and heights. In
            fact, Racking will fit into any space available, and is suited to
            all kinds of pallets – whether they be Euro, disposable or captive
            pallets, mesh boxes or bins.
            <br />
            <br />
            Pallet Racking provides your warehousing teams with unrestricted
            access to all your pallets at all times. The system delivers
            versatility and assembly as single- or double-depth racks. Pallet
            Racking easily adapts to your specific warehouse and storage
            requirements, thanks to a variety of widths, depths and heights. In
            fact, Racking will fit into any space available, and is suited to
            all kinds of pallets – whether they be Euro, disposable or captive
            pallets, mesh boxes or bins.
          </p>
        </div>
      </div>
       <div>
        <img src={propv} alt="" className='calnew-img' />
      </div>
      <Arrow />
    </section>
  )
}

export default Energy;