import React from 'react'
import useData from '../../customhook/useData'
import Card from '../share/Card'
import './about.css'

const About = () => {
    const {Data}= useData('./doctor.json') 
    return (
        <>
            <div className="about-container d-flex align-items-center justify-content-center">
                <h1 className="common-size text-white">About US</h1>
            </div>
            <div className=" container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-6 mt-5 ps-5 ">
                        <h1 className="" >The Health Center <br /> National Hospital</h1>
                        <div className="common-border" ></div>
                        <h6 className="text-muted">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies.</h6>
                        <h3>Victoria Fernandez</h3>
                        <h6 className="common-color">CARDIAC SURGERY</h6>
                        <img src="./img/h2-img-2.png" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <img src="./img/aboutus_img_02.jpg" className="img-fluid" alt="" />
                    </div>
                </div>

            </div>
            <div className="container">
                <h1 className="text-center">Meet Our Team</h1>
                <div className="common-border mx-auto"></div>
               
                <p className="text-muted text-center">Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. <br /> Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>
                <div className="row">
                 
                    {Data.slice(3).map((info)=><Card key={info.id} data={info}/>)}
                </div>
            </div>
        </>
    )
}

export default About
