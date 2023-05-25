import React, {useEffect} from 'react';
import ProductHeader from '../compound/main/ProductHeader';
function Product(){
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return(
        <section>
            <ProductHeader/>
        </section>
    )
}

export default Product; 