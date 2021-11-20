import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid p-0 bg-dark m-0">
                <div className="row m-0 p-5 ">
                    <div className="col-lg-4">
                    <Link className=" nav-link text-white fw-bolder p-0" to="/"><h2>Pedia<span className="common-color ">trics</span></h2></Link>
                    <div className="common-border" ></div>
                        <p className='text-white'>The Educamp Online Learning portal provides a gateway for the public to access Educamp’s extensive learning content.</p>
                        <hr />
                    <div className="d-flex justify-content-around">
                        <p className="footer-link"><i className="fab common-color fa-2x fa-facebook-f"></i></p>
                        <p className="footer-link"><i className="fab common-color fa-2x fa-twitter "></i></p>
                        <p className="footer-link"><i className="fab common-color fa-2x fa-google-plus-g  "></i></p>
                        <p className="footer-link"><i className="fab common-color fa-2x  fa-instagram"></i></p>
                    </div>

                    </div>
                    <div className="col-lg-4 mx-auto">
                        <h4 className="text-white">Quick Links</h4>
                        <div className="common-border" ></div>
                        <div>
                            <ul className="list-unstyled">
                                <li>
                                    <Link  className="nav-link text-white " to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-white "  to="/About">AboutUs</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-white "  to="/service">Service</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-white "  to="/doctor">Doctors</Link>
                                </li>
                            </ul>
                            </div>
                    </div>
                    <div className="col-lg-4">
                            <h4 className="text-white">Our Address</h4>
                            <div className="common-border" ></div>
                            <div>
                                <p className="d-flex text-white"><i className="fas me-3 common-color fa-map-marker-alt"></i><span>60 Grant Ave. Central New Road 0708, UK</span></p>
                                <p className="d-flex text-white"><i className="fas me-3 common-color fa-phone-alt"></i><span>+880 1723 801 729</span></p>
                                <p className="d-flex text-white"><i className="fas me-3 common-color fa-envelope"></i><span>enviroco@gmail.com</span></p>
                            </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer