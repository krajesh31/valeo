import React, {useEffect} from 'react';
import ContactForm from '../compound/main/ContactForm';
import '../compound/css/contact.css'
import Maps from '../compound/main/Maps';
function Contact(){
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return(
        <section>
            <ContactForm/>
            <Maps/>
        </section>
    )
}

export default Contact; 