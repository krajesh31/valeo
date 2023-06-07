import React from "react";
import '../css/productHeader.css'
import Kindle from '../img/kindle.png'
import Pv from '../img/pv-connect.png'
import Wire from '../img/wire.png'
import Coppersheet from '../img/coppersheet.jpg'
import Coppernugget from '../img/coppernugget.webp'
import Arrow from './Arrow'



function ProductHeader() {
    return (
        <section className="">
            <div className="product-header">
                <h2>Product</h2>
            </div>

            <div className="product-h mx-5 my-4">
                <h3></h3>
                <p>PV module is a array of solar cells. Photovoltaic cell interconnection, called stringing or tabbing, and the second step,PV module assembly, is called bussing. Tabbing and bussing are two applications that link individual solar cells together to form a solar module (or solar panel). These applications also provide a method to transfer power from the solar cells to a power output, the junction box. Solar cell interconnect occurs when individual solar cells are joined together with tabbing ribbon (also called stringing ribbon), forming a cluster of solar cells.</p>
                <p>This is frequently referred to as cell tabbing (or stringing). The tabbing ribbon carries the solar cell’s current to a larger ribbon, the bus ribbon, which then carries power from the cell clusters to the module’s junction box for final output.</p>
            </div>
            <div>
                <div className="container my-5">


                    <main className="grid product-head">
                        <article>
                            <div className="industry-artical-div">
                                <img src={Kindle} alt="" />
                                <div className="text industry-text pro-head">
                                    <h2 className="my-3">Kindle</h2>
                                    <h4>Powering Lives</h4>
                                    <p style={{color:"#000"}}>Copper wires are a type of electrical wire that is made from copper, a highly conductive metal. These wires are used to transmit electrical power or signals from one point to another in a wide range of applications, including electrical power distribution, telecommunications, and electronics.</p>
                                    <button className="pro-button">Read More</button>

                                </div>
                            </div>

                        </article>
                        <article>
                            <div className="industry-artical-div">
                                <img src={Pv} alt="" />
                                <div className="text industry-text pro-head">
                                    <h2 className="my-3">The PV Connect</h2>
                                    <h4>Reflecting Reliability</h4>
                                    <p style={{color:"#000"}}>Copper bus bars are flat, rectangular bars made from copper that are used to conduct electrical current in a variety of applications. They are commonly used in electrical power distribution systems, such as switchboards, panelboards, and distribution boards, as well as in industrial equipment and machinery.</p>
                                    <button className="pro-button">Read More</button>

                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="industry-artical-div">
                                <img src={Wire} alt="" />
                                <div className="text industry-text pro-head">
                                    <h2 className="my-3">Vartika Wire</h2>
                                    <h4>Vartika Wire</h4>
                                    <p className="ProductP">Copper foil is a highly conductive material that is commonly used in electronic devices, such as printed circuit boards (PCBs), flexible circuits, and electromagnetic shielding. The high conductivity of copper foil allows for efficient transmission of electrical signals and reduces the amount of energy lost as heat.</p>
                                    <button className="pro-button">Read More</button>
                                </div>
                            </div>
                        </article>

                    </main>
                </div>
            </div>
            <Arrow/>

        </section>


    )
}

export default ProductHeader;