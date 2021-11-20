import React from 'react'

const Card = (props) => {
    return (
        <>
          <div className="col-lg-4">
          <div class="card border-0 mb-4">
                <img  src={props?.data?.img} className="img-fit" width="220" height="220" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props?.data?.name}</h5>
                    <h6 className="common-color">{props?.data.work}</h6>
                    <p className="card-text text-muted">{props?.data.desc}</p>
                    <button className="card-btn">BOOK APPOINTMENT</button>
                    <div className="d-flex justify-content-evenly text-muted ">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>
                </div>
          </div>
        </>
    )
}

export default Card
