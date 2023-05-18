import React from 'react';
import Slider from '../compound/main/Slider';
import Industry from '../compound/main/Industry';
import '../compound/css/slider.css'
import Blog from '../compound/main/Blog';
import Product from '../compound/main/Product';
import Arrow from '../compound/main/Arrow';

function Home() {
    return (
        <section>
            <Slider />
            <Industry />
            <Product />
            <Blog />
            <Arrow />
        </section>
    )
}

export default Home; 