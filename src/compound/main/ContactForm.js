import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Row, Form } from "react-bootstrap";
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
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const [formState, setFormState] = useState(true);
    const formik = useFormik({
        initialValues: {
            yourName: "",
            yourEmail: "",
            yourSubject: "",
            yourPhone: "",
            yourCompany: "",
            yourAddress: "",
            yourMessage: ""
        },
        validationSchema: Yup.object({
            yourName: Yup.string()
              .required("Required"),
            yourEmail: Yup.string().email()
              .required("Required"),
            yourSubject: Yup.string()
              .required("Required"),
            yourPhone: Yup.number()
              .required("Required"),
            yourCompany: Yup.string()
              .required("Required"),
            yourAddress: Yup.string()
              .required("Required"),
            yourMessage: Yup.string()
              .required("Required")
        }),
        onSubmit: (values, { resetForm }) => {
        }
    })
    return (
        <>
            <div className="contact-head">
                <h3 data-aos="fade-top">.</h3>
            </div>
            <section class="cform-section pt-5 pb-5">
                <div className="contact-form-lable container mt-4 mb-3">
                    {/* <div>
                    <h2>Contact Form</h2>
                    </div> */}
                    <div className="row ">
                        <div className="col-sm-5 pt-4">
                            <div className="form-grid2-head" >
                                <h2 className="mx-4 pt-4 pb-4" >Valeo Product LLP</h2>
                                <div className="cont-flex my-3">
                                    <div>
                                    <div className="location-contact location-last-contact px-1">
                                        <FaLocationArrow className="contact-last-icon" />
                                    </div>
                                    </div>
                                    <div><h6 className="con-info"> Sy No. 192, 195, 196, 199, <br/>Kucharam(V), Toopran(M), Medak(D) -502 336,<br/> Telangana, India.</h6></div>

                                </div>

                                <div className="cont-flex my-3 mt-0">
                                    <div className="location-contact px-1">
                                        <FaEnvelope />
                                    </div>

                                    <div><h6 className="con-info mt-2">lavi@muthametal.com</h6></div>

                                </div>

                                <div className="cont-flex my-3 mt-3">
                                    <div className="location-contact loc-con px-1">
                                        <FaPhoneAlt />
                                    </div>
                                    <div><h6 className="con-info ">+91 8000013445</h6></div>

                                </div>

                                {/* <div className="cont-flex my-3">
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

                                </div> */}

                            </div>
                            
                        </div>    
                        <div className="col-sm-7">
                            <div className="form-new-gridHead">
                                <div>
                                    <h1 className="mb-4">Contact Form</h1>
                                </div>
                                <Form className="text-start" onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <Form.Group controlId="yourName" className="mb-3 form-input-last-update">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control
                                                name="yourName"
                                                type="text"
                                                className="walletfundmanager-form-input"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.yourName}
                                                />
                                                <Form.Text className="text-danger">
                                                {formik.touched.yourName && formik.errors.yourName ? (
                                                    <div className="text-danger">{formik.errors.yourName}</div>
                                                ) : null}
                                            </Form.Text>
                                        </Form.Group>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Group controlId="yourEmail" className="mb-3 form-input-last-update">
                                            <Form.Label>Your Email</Form.Label>
                                            <Form.Control
                                                name="yourEmail"
                                                type="text"
                                                className="walletfundmanager-form-input"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.yourEmail}
                                                />
                                                <Form.Text className="text-danger">
                                                {formik.touched.yourEmail && formik.errors.yourEmail ? (
                                                    <div className="text-danger">{formik.errors.yourEmail}</div>
                                                ) : null}
                                            </Form.Text>
                                        </Form.Group>
                                    </div>


                                    <div className="col-md-6">
                                        <Form.Group controlId="yourSubject" className="mb-3 form-input-last-update">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control
                                                name="yourSubject"
                                                type="text"
                                                className="walletfundmanager-form-input"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.yourSubject}
                                                />
                                                <Form.Text className="text-danger">
                                                {formik.touched.yourSubject && formik.errors.yourSubject ? (
                                                    <div className="text-danger">{formik.errors.yourSubject}</div>
                                                ) : null}
                                            </Form.Text>
                                        </Form.Group>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Group controlId="yourPhone" className="mb-3 form-input-last-update">
                                            <Form.Label>Your Phone</Form.Label>
                                            <Form.Control
                                                name="yourPhone"
                                                type="text"
                                                className="walletfundmanager-form-input"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.yourPhone}
                                                />
                                                <Form.Text className="text-danger">
                                                {formik.touched.yourPhone && formik.errors.yourPhone ? (
                                                    <div className="text-danger">{formik.errors.yourPhone}</div>
                                                ) : null}
                                            </Form.Text>
                                        </Form.Group>
                                    </div>


                                    <div className="col-md-6">
                                        <Form.Group controlId="yourCompany" className="mb-3 form-input-last-update">
                                            <Form.Label>Your Company</Form.Label>
                                            <Form.Control
                                                name="yourCompany"
                                                type="text"
                                                className="walletfundmanager-form-input"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.yourCompany}
                                                />
                                                <Form.Text className="text-danger">
                                                {formik.touched.yourCompany && formik.errors.yourCompany ? (
                                                    <div className="text-danger">{formik.errors.yourCompany}</div>
                                                ) : null}
                                            </Form.Text>
                                        </Form.Group>
                                    </div>


                                    <div className="col-md-6">
                                        <Form.Group controlId="yourAddress" className="mb-3 form-input-last-update">
                                            <Form.Label>Your Address</Form.Label>
                                            <Form.Control
                                                name="yourAddress"
                                                type="text"
                                                className="walletfundmanager-form-input"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.yourAddress}
                                                />
                                                <Form.Text className="text-danger">
                                                {formik.touched.yourAddress && formik.errors.yourAddress ? (
                                                    <div className="text-danger">{formik.errors.yourAddress}</div>
                                                ) : null}
                                            </Form.Text>
                                        </Form.Group>
                                    </div>

                                    <div className="col-md-12">
                                        <Form.Group controlId="yourMessage" className="mb-3 form-input-last-update">
                                            <Form.Label>Enter Your Message*</Form.Label>
                                            <Form.Control
                                            name="yourMessage"
                                            as="textarea"
                                            className="walletfundmanager-form-input"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.yourMessage}
                                            />
                                            <Form.Text className="text-danger">
                                            {formik.touched.yourMessage && formik.errors.yourMessage ? (
                                                <div className="text-danger">{formik.errors.yourMessage}</div>
                                            ) : null}
                                            </Form.Text>
                                        </Form.Group>
                                    </div>
                                    <div class="col-6 form-input-last-update">
                                    <Button
                                        className="btn btn-primary form-update-submit"
                                        variant="primary"
                                        type="submit"
                                        onClick={values => setFormState(values)}
                                        // disabled={formState}
                                    >
                                        Submit
                                    </Button>
                                    </div>

                                </div>
                                </Form>
                            </div>
                        </div>               
                    </div>
                </div>
            </section>
            <section class="cform-section pt-5 pb-5 bg-white">
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
            </section>
        </>
    )
}

export default ContactForm;