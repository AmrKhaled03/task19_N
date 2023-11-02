import React from 'react'
import "../css/footer.css"
import logo from "../img/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import google from "../img/pay/play.jpg"
import app from "../img/pay/app.jpg"

import pay from "../img/pay/pay.png"
const Footer = () => {
 
  return (
    <div className="footer p-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
           
              <ul>
                <li>
                 <div className="logo">
              <img src={logo} className="img-fluid mb-5" alt='logo'/>
                </div>  
                </li>
                <li className="mb-4">
                  <strong>Contact</strong>
                </li>
                <li>
                  <p>Address : Cairo</p>
                  <p>Phone : 01551729880</p>
                  <p>Hours : 10:00 to 18:00 mon-sat</p>
                </li>
                <li className="my-4">
                  <strong> Follow Us</strong>
                </li>
                <li >
                  <FontAwesomeIcon icon={faFacebook}  className="i"/>
                  <FontAwesomeIcon icon={faTwitter} className="i"/>
                  <FontAwesomeIcon icon={faInstagram} className="i"/>
                  <FontAwesomeIcon icon={faYoutube} className="i"/>
                </li>
              </ul>
          
          </div>
          <div className="col-lg-3">
<ul>
  <li className="mb-4"><strong>About</strong></li>
  <li>
    About Us
  </li>
  <li>
    Delivery Information
  </li>
  <li>
    Privacy Policy
  </li>
  <li>
    Terms & Conditions
  </li>
  <li>
Contact Us
  </li>
</ul>
          </div>
          <div className="col-lg-3">

            <ul>
                 <li>
              <strong>
                My Account
              </strong>
            </li>
            <li>Sign In</li>
            <li>
              View Cart
            </li>
            <li>
              My Wishlist
            </li>
            <li>
              Track My Order
            </li>
            <li>
              Help
            </li>  
            </ul>
       
          </div>
          <div className="col-lg-3">
            <ul>
              <li>
                <strong>
                  Install App
                </strong>
              </li>
              <li>
                <p>From Appp Store or Google Play</p>
              </li>
              <li className="d-flex li">
               <img src={google} alt='google' />
               <img src={app}   alt='apple'/>
              </li>
              <li>
                <p>
                  Secured Payment Gateways
                </p>
              </li>
              <li>
              <img src={pay} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer