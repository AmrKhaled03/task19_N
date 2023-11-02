import React from 'react'
import "../css/products.css"
import ProductItem from "../components/ProductItem"

import "../css/products.css"
import Newtxt from '../components/Newtxt'






const Products = (props) => {

   
    return (


<>

<div className="panner2 text-center d-flex flex-column justify-content-center align-items-center">
<h1>
    #stayhome
</h1>
<p>Save more with coupons & up to 70% off!</p>
</div>




        <div className="container">
            <div className="row  mt-5 d-flex justify-content-center align-items-center text-center">




                {props.products.map((product) => (



 <div className="col-lg-3{ card mx-3 " key={product.id}>

    <ProductItem img={product.img} title={product.title} quantity={product.quantity} price={product.price} addToCart={() => props.addCart(product)} id={product.id}/>



                    






                    </div>

                 
                

                  
                ))}


            </div>
        </div>
<Newtxt />
</>































    )
}

export default Products