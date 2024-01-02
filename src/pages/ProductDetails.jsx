import React, { useContext, useState } from 'react'
import { useParams, Link } from "react-router-dom"


import "../css/products.css"
import Newtxt from '../components/Newtxt'
import { ShoppingContext } from '../components/ShoppingContext'
const ProductDetails = (props) => {
  const{products=[],addCart}=useContext(ShoppingContext);
  const { productId } = useParams();
  const productItem = products.find(product => product.id === parseInt(productId));
  // const mainImg = productItem.img;
const[mainImg , setMainimg]=useState(productItem.imgs[0])
const handleClick =(i)=>{
  const slider=productItem.imgs[i];
  setMainimg(slider);
}
  return (
    <>
    <div key={productId} className="container px-3 py-5 mt-5 detail">
      <div className="row my-5 bg-dark ">
        <div className="col-12">
          <ul className="d-flex justify-content-start m-auto align-items-center">
            <li>
              <Link to="/" className="text-white " >Home</Link> /
            </li>
            <li><Link to="/product" className="text-white">Products</Link> /</li>
            <li className="text-white">{productItem.title}</li>
          </ul>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-lg-6">
          <div className="main-img">
            <img src={mainImg} alt="main" className="img-fluid  main" />
            </div>
            <div className="row my-3 previews d-flex justify-content-center align-items-center ms-1">

            {productItem.imgs.map((img, index) => (
              
              <div className="col-3" key={index}>   

            
                <img className="w-100" src={img} onClick={() => handleClick(index)}  alt='smalls'/>
 </div>
            
             
              ))}
          
          </div>
  
        </div>
        <div className="col-lg-6">

          <h5>
            {productItem.title}
          </h5>
          <h3>
            {productItem.price}$
          </h3>
          <p>{productItem.description}</p>
          <div className="cart" onClick={() =>addCart(productItem)} >
            <button className=" btn btn-primary">
              ADD TO CART
            </button>






          </div>

        </div>
      </div>
  
    </div>
        <Newtxt />
    </>
  )
}

export default ProductDetails