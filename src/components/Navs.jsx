import React, { useContext } from 'react'
import { Link  } from 'react-router-dom' ;
import "../App.css"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
import { faCartShopping , faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from "../img/logo.png"
import { ShoppingContext } from './ShoppingContext';
 const Navs = ( props) => {
  
const{cart}=useContext(ShoppingContext);



  return (

    <div>

          <Navbar expand="lg" className="body-tertiary navbar px-5 py-3">
              <Container className="container">
                  <Link  className=" brand "to="/">
                      <img src={logo} alt="" />
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto navs" >
                          <Link className="link p-2 " to="/">
                             Home </Link>
                          <Link className="link p-2" to="/about">About Us</Link>
                          <Link className="link p-2" to="/product">Products</Link>
                          <Link className="link p-2" to="/contact">Contact Us</Link>

            {!props.loggedInUser ? (

<>

  <Link className="link p-2" to="/register">
    Register
  </Link>


<Link className="link p-2" to="/login">
 Login
</Link>

</>

):<>
  
  <Link className="link p-2" to="/profile">
  <FontAwesomeIcon icon={faUser} />
  </Link>


  <button
    className="btn btn-outline-danger"
    onClick={props.handleLogout}
  >
    Logout
  </button>




</>


}
                          <Link className="link p-2 " onClick={props.openAside}  ><FontAwesomeIcon icon={faCartShopping}className="fa-cart"  /> <span className="count ms-sm-0 ps-lg-4 ms-lg-2 ">{cart.length}</span></Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>

    </div>
  )
}

export default Navs