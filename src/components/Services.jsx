import React from 'react'
import"../App.css"
import img1 from "../img/features/f1.png"
import img2 from "../img/features/f2.png"
import img3 from "../img/features/f3.png"
import img4 from "../img/features/f4.png"
import img5 from "../img/features/f5.png"
import img6 from "../img/features/f6.png"

const Services = () => {
    const services= [
        {
            id:1,
img : img1,
title:"Free Shipping",
        },
        {
id:2,
img: img2,
title:"Online Order",
        },
        {
            id:3,
            img: img3,
            title:"Save Money",
        },
        {
            id:4,
            img: img4,
            title:"Promotions",
        },
        {
            id:5,
            img: img5,
            title:"Happy Sell",
        }, {
            id:6,
            img: img6,
            title:"F24/7 Support",
        },
    ];
 
  return (
   <div className="services my-5">
       <div className="container">
           <div className="row g-3 ">
               {services.map((service)=>
               {
                   return (
                   
                   <div className="col-lg-2 mx-3 my-5" key={service.id}>
                 <img src={service.img} alt="" className="img-fluid"  />
                 <h6 className="mt-3">{service.title}</h6>
               </div>  
               )})}
             
                

           </div>
       </div>
   </div>
  )
}

export default Services