import React, { useContext } from 'react'
import "../css/products.css"

import { Link } from "react-router-dom";
import { ShoppingContext } from './ShoppingContext';
const New = () => {
    const{news=[],addCart}=useContext(ShoppingContext);
  return (
      <div className="new text-center p-5  mt-3">
          <h1>New Arrivals</h1>
          <p>Summer Collection New Modern Design</p>
          <div className="row  mt-5 d-flex justify-content-center align-items-center text-center">
              {news.map((product) => (
                  <div className="col-lg-3 card mx-3 " key={product.id}>
                      <div className="img">
                          <img src={product.img} className="img-fluid" alt={product.title}/>
                      </div>
                      <div className="topics">
                          <h4>{product.title}</h4>
                          <span>{product.price}$</span>

                          <div className="cart" onClick={() => addCart(product)} >
                              <Link className="btn btn-success">Add To Cart </Link>


                          </div>
                          <Link to={`/product/${product.id}`} className="btn btn-warning mt-2">
                              Details
                          </Link>
                      </div></div>

              ))}
          </div>
      </div>
  )
}

export default New