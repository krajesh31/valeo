import React, {useEffect} from 'react';
// import Slider from '../compound/main/Slider';
import Industry from '../compound/main/Industry';
import '../compound/css/slider.css'
import Blog from '../compound/main/Blog';
import Product from '../compound/main/Product';
import Arrow from '../compound/main/Arrow';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import slider1 from "../compound/img/slider1.jpg";
import slider2 from "../compound/img/slider2.jpg";
import slider3 from "../compound/img/slider3.jpg";
import slider4 from "../compound/img/slider4.jpg";

function Home() {    
    const content = [
        {
            title: "WE ARE LEADING MANUFUCTURE OF COPPER PRODUCTS",
            description:"We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.",
            image: slider1,
            button: "Know More"
        },
        {
            title: "WE ARE LEADING MANUFUCTURE OF COPPER PRODUCTS",
            description:"We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.",
            image: slider2,
            button: "Know More"
        },
        {
            title: "WE ARE LEADING MANUFUCTURE OF COPPER PRODUCTS",
            description:"We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.",
            image: slider3,
            button: "Know More"
        },
        {
            title: "WE ARE LEADING MANUFUCTURE OF COPPER PRODUCTS",
            description:"We are supplying copper wires and rods that have high electrical conductivity, good forming properties, tight dimensional tolerances and excellent surface.",
            image: slider4,
            button: "Know More"
        }
      ];
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section>
            <Slider className="slider-wrapper" autoplay="3000">
            {content.map((item, index) => (
                <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                <div className="inner">
                    <div className="inner-content">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        {/* <div className="text-center"><button>{item.button}</button></div> */}
                    </div>
                </div>
                {/* <section>
                    <img src={item.userProfile} alt={item.user} />
                    <span>
                    Posted by <strong>{item.user}</strong>
                    </span>
                </section> */}
                </div>
            ))}
            </Slider>
            <Industry />
            <Product />
            <Blog />
            <Arrow />
        </section>
    )
}

export default Home; 