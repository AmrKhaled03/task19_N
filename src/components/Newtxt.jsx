import React from 'react'
import "../App.css"
const Newtxt = () => {
  return (
    <div className="newtxt d-flex justify-content-between align-items-center w-100">
<div className="container ">
    <div className="row ">
<div className="col-lg-6 d-flex flex-column ">
    
    <h4>
        Sign Up For Newsletters
    </h4>
    <p>
        Get E-mail updates about our latest shop and <span>special offers</span> 
    </p>
</div>
<div className="col-lg-6 col-md-12 col-sm-12">
    <form >
        <input type="text" placeholder="Your email address" />
        <button type="submit" className='pe-5'>Sign Up</button>
    </form>
</div>
    </div>
</div>
    </div>
  )
}

export default Newtxt