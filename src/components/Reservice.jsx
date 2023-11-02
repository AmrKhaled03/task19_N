import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
const Reservice = () => {
    return (
        <div className="reserv p-5  mt-3 d-flex justify-content-center align-items-center flex-column">
            <h4>
                Repair Services
            </h4>
            <h2>
Up to <span>70% off</span> - All t-shirts & Accessories
            </h2>
            <button>
                <Link to="/product" className="ex">
                    Explore More
                </Link>
            </button>
        </div>
    )
}

export default Reservice