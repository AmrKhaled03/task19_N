import React from 'react' 
import { Link } from 'react-router-dom'
import"../css/products.css"
import about from "../img/about/a6.jpg"
import video from "../img/about/1.mp4"
import Services from '../components/Services'
import Newtxt from '../components/Newtxt'
const About = () => {
  return (
    <div className="about">
      <div className="panner3 text-center d-flex flex-column justify-content-center align-items-center">
  <h1>#KnowUs</h1>
  <p>Lorem ipsum dolor sit amet consectetur </p>
</div>

<div className="container mt-5 py-5">
        <div className="row my-5 bg-dark ">
          <div className="col-12">
            <ul className="d-flex justify-content-start m-auto align-items-center">
              <li>
                <Link to="/" className="text-white " >Home</Link> /
              </li>
              <li><Link to="/about" className="text-white">About Us</Link> </li>
       
            </ul>
          </div>
        </div>
  <div className="row">
    <div className="col-lg-6">
      <img src={about} className="img-fluid" alt='about'/>
    </div>
    <div className="col-lg-6">
      <h1>
        Who We Are?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sit cumque neque voluptatibus. Quam debitis fuga tempore molestiae sint voluptatibus quos perferendis ullam aspernatur eos commodi ut, obcaecati, officia corrupti.
      </p>
    </div>
  </div>
  <div className="row d-flex flex-column justify-content-center align-items-center text-center mt-5">
          <div className="col-12">
            <h1>
              Download Our App
            </h1>
          </div>
   <div className="col-12 video mt-5 " >
      <video src={video} autoPlay muted className="img-fluid" />
    </div>

  </div>
</div>
<Services />
<Newtxt />
    </div>
  )
}

export default About