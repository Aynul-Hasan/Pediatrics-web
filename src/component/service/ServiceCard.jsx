import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const ServiceCard = (props) => {
    return (
        <>
        <div className="col-lg-4">
        <div className="card border-0 position-relative" >
            <img src={props?.data.img} className=" service-card-img" alt="..."/>
            <button className="service-price-btn">${props?.data.price}</button>
            <div className="card-body">
                <h5 className="card-title">{props?.data.title}</h5>
                <p className="card-text">{props?.data.desc}  <Link to={`/service/${props?.data.id}`} className="nav-link text-dark m-0" >Read More</Link></p>
              
           <Link to={`/shop/${props?.data.id}`}> <button className="card-btn" ><i className="fas me-2 fa-shopping-bag"></i>Buy Now</button></Link>  
            </div>
            </div>
        </div>
            
        </>
    )
}

export default ServiceCard
