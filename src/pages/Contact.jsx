import React ,{useRef} from 'react'
import Newtxt from '../components/Newtxt'
import { Link } from 'react-router-dom'
import "../css/products.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ib9q8mf', 'template_7hn7tqe', form.current, 'Go-F8wtSOy7rYOqzq')
    Swal.fire(
      'Your message is sent successfully!',
      'You clicked the button!',
      'success'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <div className="panner4 d-flex flex-column justify-content-center align-items-center text-center">
<h1>
  #let's _talk
</h1>
<p>LEAVE A MESSAGE, We love to hear from you!</p>
      </div>
<div className="container">
        <div className="row my-5 bg-dark ">
          <div className="col-12">
            <ul className="d-flex justify-content-start m-auto align-items-center">
              <li>
                <Link to="/" className="text-white " >Home</Link> /
              </li>
              <li><Link to="/contact" className="text-white">Contact Us</Link> </li>

            </ul>
          </div>
        </div>
        <div className="row  ">
<div className="col-lg-5">
  <span className="mx-5 ">GET IN TOUCH</span>
            <h2 className="mx-5 mt-3">
    Visit one of our agency locations <br/> or contact us today
  </h2>
            <strong >
              <p className="mx-5 mt-3">
       Head Office  
    </p>
 
  </strong>
  <ul className="mx-2" >
    <li>
                <FontAwesomeIcon icon={faLocationDot} />
               : Cairo
    </li>
    <li>
                <FontAwesomeIcon icon={faEnvelope} /> : kamr4014@icloud.com
    </li>
    <li>
                <FontAwesomeIcon icon={faPhone} /> : 01551729880
    </li>
    <li>
                <FontAwesomeIcon icon={faClock} /> : 10:00 to 18:00 mon-sat
    </li>
  </ul>
</div>
<div className="col-lg-7">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.398749937961!2d31.135649800000003!3d29.0643597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a26e87b338521%3A0x73f0ee0bd7bc8f42!2z2LfYsdmK2YIg2KzYp9mF2LnYqSDYp9mE2YbZh9i22KnYjCDZhdit2KfZgdi42Kkg2KjZhtmKINiz2YjZitmB!5e0!3m2!1sar!2seg!4v1689018052681!5m2!1sar!2seg" title='video'/>
</div>
        </div>
        <div className="row mx-2 my-5 contact">
          <div className="col-lg-12">
<span className="m-2">
  LEAVE A MESSAGE 
  </span>
            <h2 className="m-2">
    We love to hear from you
  </h2>
            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column justify-content-center align-items-center text-center">


              <div className="row ">


                <div className="col-md-12 m-2">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control" placeholder="Name" />

                  </div>
                </div>
    
</div>
              <div className="row ">
                <div className="col-md-12 m-2">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control" placeholder="Email"/>
    
                  </div>
                </div>
          

              </div>
        

        
              <div className="row">
                <div className="col-md-12 m-2">
                  <div className="md-form mb-0">
                    <input type="text" id="phone" name="phone" placeholder="Phone" className="form-control"/>
 
                  </div>
                </div>
              </div>
        

        
              <div className="row">

          
                <div className="col-md-12 m-2">

                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder="Message"></textarea>
                   
                  </div>

                </div>
              </div>
           
<div className="row">
  <div className="col-md-12">
                  <input type="submit" value="Send" className="btn btn-warning m-2"/>
  </div>
</div>
            </form>
          </div>


        </div>
</div>


      <Newtxt/>
    </div>
  )
}
// width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
export default Contact