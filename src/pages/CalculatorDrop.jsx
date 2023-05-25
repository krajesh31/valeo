import React, {useEffect} from "react";
import Calculator from '../compound/main/Calculator'

function CalculatorDrop()
{
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return(
        <section>
           <Calculator/>
        </section>
    )
}
export default CalculatorDrop;