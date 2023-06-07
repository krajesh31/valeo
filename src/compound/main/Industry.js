import React, { useEffect } from "react";
import '../css/industry.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Industry1 from '../img/industry1.png'
import Industry2 from '../img/industry2.png'
import Industry3 from '../img/industry3.png'
import Arrow from "./Arrow";
import { Link } from "react-router-dom";

function Industry() {
  useEffect(() => {
    AOS.init();
}, [])



  return (
    <section className="industry">
      <div className="container">

        <div className="industry-head">
          <h2 className="ind-serve py-4"  data-aos="fade-top">INDUSTRY WE SERVE</h2>
          {/* <p className="" data-aos="fade-top ">The term "industry" can refer to a broad range of fields and sectors involved in the production of goods or services. Some examples of industries include:</p> */}
        </div>
        <main className="grid">
          <article className="artical industry-artical">
            <div className="industry-artical-div industry-artical-new">
              <img src={Industry1} alt="" data-aos="fade-top"/>
              <div className="text industry-text panel-container industry-panel">
                <div className="panel-content">
                <h2 className="my-3 IndustryCardH2"data-aos="fade-top" >SOLAR PANEL</h2>
                <div className="newIndustryReadMore">
                  <button><Link className="newIndustryReadMoreLink">Read More</Link></button>
                </div>
                </div>
                </div>
            </div>

          </article>
          <article className="industry-artical2  industry-artical">
            <div  className="industry-artical-div industry-artical-new">
            <img src={Industry2} alt="" data-aos="fade-top"/>
            <div className="text industry-text new-indus panel-container">
              <h2 className="my-3">TRANSFORMER</h2>
              <div className="newIndustryReadMore">
                  <button><Link className="newIndustryReadMoreLink">Read More</Link></button>
                </div>
              {/* <p>The transformer industry is involved in the manufacturing, installation, and maintenance of transformers, which are electrical devices used to transfer electrical energy between circuits by means of electromagnetic induction. Transformers are commonly used in power distribution systems to step up or step down the voltage of electrical energy.</p> */}

            </div>
            </div>
          </article>
          <article className="industry-artical">
            <div  className="industry-artical-div industry-artical-new">
            <img src={Industry3} alt="" data-aos="fade-top"/>
            <div className="text industry-text panel-container">
              <h2 className="my-3" data-aos="fade-top">AUTOMOTIVE</h2>
              <div className="newIndustryReadMore">
                  <button><Link className="newIndustryReadMoreLink">Read More</Link></button>
                </div>
              {/* <p data-aos="fade-top">Automotive manufacturing involves the production of vehicles and their components, including engines, transmissions, brakes, and electrical systems. Many different materials are used in the production of vehicles, including metals, plastics, rubber, and glass. Copper is also used in the production of automotive components, such as wiring, electrical connectors, and radiators.</p> */}

            </div>
            </div>
          </article>

        </main>
      </div>
      <Arrow/>
    </section>



  )
}

export default Industry;



