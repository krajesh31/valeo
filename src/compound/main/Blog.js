import React, { useEffect } from "react";
import '../css/blog.css'
import blog1 from '../img/blog1.png'
import blog2 from '../img/blog2.png'
// import { FaCommentAlt, FaHeart, FaUser } from 'react-icons/fa'
import blog3 from '../img/blog3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Arrow from './Arrow'


function Blog() {
    

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className="blog">
            
            <div class="container">
                <div className="industry-head">
                    <h2 className="blog-header">BLOG</h2>

                </div>
                <main class="grid">
                    <article>
                        <div className="blog-artical-div">
                        <img src={blog1} alt="" data-aos="fade-top" />
                        <div class="text">
                            <h3 data-aos="fade-top">We are Best For Any Industry And Best Solution</h3>
                            <p className="blog-p" id="blog-id" data-aos="fade-top">Our expertise spans across various industries, making us the best choice for any business seeking a solution. .</p>
                        </div>
                        {/* <div className="blog-head-flex">
                            <div className="blog-flex">
                            <div>
                                <span className="blog-user-img">
                                <FaUser className="fauser"/>
                                </span>
                            </div>
                            <div>
                                <h3 className="blog-name">Name</h3>
                            </div>
                            </div>

                            <div className="blog-flex">
                                <span className="faheart">
                                <FaHeart />
                                </span>
                                <span className="hear-span">2</span>
                                <span className="facommant">
                                <FaCommentAlt />
                                </span>
                                <span className="hear-span">2</span> 
                           </div>
                            
                        </div> */}
                        </div>
                       
                    </article>
                    <article>
                        <div className="blog-artical-div">
                        <img src={blog2} alt=""data-aos="fade-top" />
                        <div class="text">
                            <h3 data-aos="fade-top">Design and Advanced Materials As a Driver of Innovation</h3>
                            <p className="blog-p" id="blog-id" data-aos="fade-top">The integration of advanced materials in design processes is driving innovation in various industries.</p>
                        </div>
                        {/* <div className="blog-head-flex">
                            <div className="blog-flex">
                            <div>
                                <span className="blog-user-img">
                                <FaUser className="fauser"/>
                                </span>
                            </div>
                            <div>
                                <h3 className="blog-name">Name</h3>
                            </div>
                            </div>

                            <div className="blog-flex">
                                <span className="faheart">
                                <FaHeart />
                                </span>
                                <span className="hear-span">2</span>
                                <span className="facommant">
                                <FaCommentAlt />
                                </span>
                                <span className="hear-span">2</span> 
                           </div>
                            
                        </div> */}
                   
                        </div>
                     
                    </article>
                    <article>
                        <div className="blog-artical-div">
                        <img src={blog3} alt=""data-aos="fade-top" />
                        <div class="text">
                            <h3 data-aos="fade-top">Latest Technolgy Upgrades Help Increase Quality and Productivity</h3>
                            <p className="blog-p" id="blog-id" data-aos="fade-top">The latest technology upgrades can enhance both the quality and productivity of  processes and systems. </p>
                        </div>
                        {/* <div className="blog-head-flex">
                            <div className="blog-flex">
                            <div>
                                <span className="blog-user-img">
                                <FaUser className="fauser"/>
                                </span>
                            </div>
                            <div>
                                <h3 className="blog-name">Name</h3>
                            </div>
                            </div>

                            <div className="blog-flex">
                                <span className="faheart">
                                <FaHeart />
                                </span>
                                <span className="hear-span">2</span>
                                <span className="facommant">
                                <FaCommentAlt />
                                </span>
                                <span className="hear-span">2</span> 
                           </div>
                            
                        </div>
                    */}
                        </div>
                       
                    </article>

                </main>
                
            </div>
            <Arrow/>
            
        </section>
    )
}

export default Blog;