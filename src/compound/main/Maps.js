import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Maps() {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div width="100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=A-52,%202nd%20Main%20Road,%20%202nd%20Stage,%20Peenya%20Industrial%20%20Area%20Bangalore%20-%20560058+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe></div>
    )
}
export default Maps