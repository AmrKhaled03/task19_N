import React from 'react'
import { Link } from 'react-router-dom'
import"../css/smalls.css"
const Small = () => {
  return (
    <div className="small  py-5  mt-5">
<div className="container-fluid py-5 px-5">
    <div className="row  d-flex justify-content-center align-items-center w-100">
        <div className="col-lg-6  d-flex flex-column justify-content-center align-items-start one">
<h4>crazy deals</h4>
<h2>buy 1 get 1 free</h2>
<span>The best classic dress is on sale at cara</span>
<button><Link to="/product" className="learn">Learn More</Link></button>
        </div>
                  <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start  two">
                      <h4>cspring/summer</h4>
                      <h2>upcomming season</h2>
                      <span>The best classic dress is on sale at cara</span>
                      <button><Link to="/product" className="learn">Collection</Link></button>
                  </div>
    </div>
              <div className="row  d-flex justify-content-center align-items-center mt-5 w-100 ">
<div className="col-lg-4 three ">
<h2>
    SEASIONL SALE
</h2>
<span>
    Winter Collection -50% Off
</span>
</div>
<div className="col-lg-4 four">
                      <h2>
                       NEW FOOTWARE COLLECTION
                      </h2>
                      <span>
                         Spring / Summer 2023
                      </span>
</div>
<div className="col-lg-4 five ">
                      <h2>
                       T-SHIRT
                      </h2>
                      <span>
                      New Travely Prints
                      </span>
</div>
</div>
</div>
    </div>
  )
}

export default Small