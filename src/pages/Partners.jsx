import React, {useEffect} from 'react';
import PartnersHeader from '../compound/main/PartnersHeader';

function Partners(){
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return(
        <section>
           <PartnersHeader/>
        </section>
    )
}

export default Partners; 