import React from 'react'
import "../css/products.css"

import { Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const ProductItem = (props ) =>{
  return (


        <>

          <div className="img "  >
    <img src={props.img} alt={props.title} className="img-fluid" />
</div>
   
   
<div className="topics">
    <h4>{props.title}</h4>
    <span>{props.price}$</span>
                  <div className="cart" onClick={props.addToCart} >
                      <Link className="btn btn-success">Add To Cart</Link>
        

   



</div> 
        <Link to={`/product/${props.id}` } className="btn btn-warning mt-2" >
          Details
        </Link>
</div>   




 
</>
  )
}

export default ProductItem