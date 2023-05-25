import React, {useEffect} from 'react';
import AboutHeader from '../compound/main/AboutHeader';

function About(){
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return(
        <section>
           <AboutHeader/>
        </section>
    )
}

export default About; 