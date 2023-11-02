import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
const Panner = () => {
  return (
    <div className="panner ">
      <div className="container">
          <div className="row">
         <div className="text col-lg-12">
        <span>
          Trade-in-offer
        </span>
        <h1>
          Super value deals 
        </h1>
        <h1 className="two">
          On all products
        </h1>
        <p>
          Save more with coupons & up to 70% off!
        </p>
      <Link to ="/product" className="link">Shop Now</Link>
      </div> 
      </div> 
      </div>
   
    
    </div>
  )
}

export default Panner