import React from 'react'

const Contact = () => {
    return (
        <>
        <div className="contact-container d-flex align-items-center justify-content-center text-white">
            <h1>Contact US</h1>
        </div>
            <div className="container">
                <div className="row my-5 p-0">
                    <div className="col-lg-6">
                        <div className="row p-0 ">
                            <div className="col-lg-6">
                                <h5 className=" fs-1 fw-bolder">New York</h5>
                                <div className="common-border" ></div>
                                <p className=" text-muted">198 West 21th Street, Suite 721 <br /> New York NY 10010 <br /> Email: housemed@qode.com <br /> Phone: +88 (0) 101 0000 000</p>
                            </div>
                            <div className="col-lg-6">
                                <h5 className=" fs-1 fw-bolder">Amsterdam</h5>
                                <div className="common-border" ></div>
                                <p className=" text-muted">198 West 21th Street, Suite 721 <br /> New York NY 10010 <br /> Email: housemed@qode.com <br /> Phone: +88 (0) 101 0000 000</p>
                            </div>
                            <div className="col-lg-6">
                                <h5 className=" fs-1 fw-bolder">London</h5>
                                <div className="common-border" ></div>
                                <p className=" text-muted">198 West 21th Street, Suite 721 <br /> New York NY 10010 <br /> Email: housemed@qode.com <br /> Phone: +88 (0) 101 0000 000</p>
                            </div>
                            <div className="col-lg-6">
                                <h5 className=" fs-1 fw-bolder">San Francisco</h5>
                                <div className="common-border" ></div>
                                <p className=" text-muted">198 West 21th Street, Suite 721 <br /> New York NY 10010 <br /> Email: housemed@qode.com <br /> Phone: +88 (0) 101 0000 000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" placeholder="Name"  className="contact-input" /><br />
                        <input type="text" placeholder="Email" className="contact-input" /><br />
                        <textarea placeholder="Message" className="contact-input textarea" name="" id="" cols="50"></textarea><br />
                        <button className="card-btn">Send</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
