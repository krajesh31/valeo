import React, { useEffect, useState } from  'react'
import {FaAngleDoubleUp} from 'react-icons/fa'
import '../css/dropdown.css'


function Arrow()
{
    const [backToButton, setBackToButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100 ) {
                setBackToButton(true)
            } else {
                setBackToButton(false)
            }
        })
    },[])

    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
      <section>
             {
                backToButton && (
                    <button style={{
                        position:"fixed",
                        bottom:"50px",
                        right:"50px",
                        height:"50px",
                        width:"50px",
                        fontSize:"30px",
                        border:"none",
                        borderRadius:"5px",
                        backgroundColor:"#0095DA",
                        color:"#fff"
                        
                        // color:"black"
                    }}
                    onClick={scrollup}
                    className='arrow'
                    ><FaAngleDoubleUp/></button>
                )
             }
      </section>
    )
}

export default Arrow;