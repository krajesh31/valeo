import React, {useEffect} from 'react'
import last from '../img/about-last.png'
import Arrow from "./Arrow";
import '../css/facility.css'
import about from '../img/aboutcard.png'
import facility from '../img/clients/cottan.jpeg'

function Facility() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>

            <div className="about-header-Facility" data-aos="fade-top">
                <h2>.</h2>
            </div>


            <div className="row mx-5 my-5 services">
                {/* <h2 className="my-4" data-aos="fade-top" >OUR COMPANY</h2> */}
                <div className="col-md-7 mx-auto my-4 facility-img" data-aos="fade-top">
                    <img src={about} alt="" className="AboutUpdateImage" />
                </div>
                <div className="col-md-5 about-child facility-child my-3" data-aos="fade-top">
                    <div className="About-update-header">
                        <h3 className=" mb-4">INFRASTRUCTURE</h3>
                    </div>
                    <p>

                        Equipped with first-rate infrastructure of modern machinery and quality raw material, the company has ISO 9001:2000 and RoHS certifications for its products. We believe that the best products can be produced and quality services can be offered to our customers always, only if we equip ourselves with the standards and values that help up manage our pepple well, keep our processes up-to-date and maintain long-lasting relationships with our clients. Infrastructure is tha following strenghts.
                    </p>

                   

                    {/* <p data-aos="fade-top">

                        It is the era of the internet, and every businesses of all magnitudes, from a
                        small-scale manufacturer to a conglomerate, need a strong internet presence.
                        And Adworld digital services helps you with exactly that. We have a strong
                        ensemble of web developers, designers, SEO experts who can mould your
                        business strategy with page optimization, manual search engine submissions,
                        making sure your brand reaches the target audience, at the right time, using
                        accurate keywords, with requirement based strong content driven service.

                    </p> */}
                </div>

            </div>
            <div className="facility-grid2">
                <div className="row  my-5">


                    <div className="col-md-6 container ">
                        <div className="mx-5">
                            <div>
                                <p data-aos="fade-top">

                                    Our Facilities have complete wire processing facilities for processing up to 10.000 MT of copper into various allied products.
                                    Our wire drawing process is advanced, having rod break-down.
                                    {/* in-line annealing, intermediate wire drawing machines of 1-lenrich. Alind, Cook etc. The company has state-of-the-an technology with enameling equipment from Italia Implant (Italy), which is a pioneer in the field of enameling plants. 
Enameling process is canted out in a dust free atmosphere. Tin coating setup lines setup to produce Rons Compliant Tin plated wire along with other alloy coated wires. Production capacity of 100 MT/ month, bunching lines from Lauder and other indigenous manufacturer’s setup to bunch wires up to 200 Sq.mm for domestic and automobile cable manufactures. */}

                                </p>

                                <p> It is the era of the internet, and every businesses of all magnitudes, from a
                                    small-scale manufacturer to a conglomerate, need a strong internet presence. Equipped with first-rate infrastructure of modern machinery and quality raw material, the company has ISO 9001:2000 and RoHS certifications for its products. We believe that the best products can be produced and quality services can be offered to our customers always, only if we equip ourselves with the standards and values that help up manage our pepple well, keep our processes up-to-date and maintain long-lasting relationships with our clients. Infrastructure is tha following strenghts.
</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="mx-1">
                            <div className="facility-img-2">
                                <img src={facility} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Arrow />

        </>
    )
}
export default Facility;