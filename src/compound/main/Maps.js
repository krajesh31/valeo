import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Maps() {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
<div style={{width: "100%"}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972944.7456529718!2d77.7982145671185!3d17.71797848322666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc77befc92daf1%3A0xfb4c3000de100406!2sValeo%20Products%20LLP!5e0!3m2!1sen!2sin!4v1685728950926!5m2!1sen!2sin"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe></div>    )
}
export default Maps