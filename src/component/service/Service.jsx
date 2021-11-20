import React, { useState } from 'react'
import ServiceCard from './ServiceCard'
import CountUp from 'react-countup';
import useData from '../../customhook/useData';
import useCard from '../../customhook/useCard';


const Service = () => {
    const {Data}= useData('./service.json') 
   
     const {card,setcard}=useCard()
    const servicecart=(data)=>{
         setcard([...card ,data])
    }
  
    return (
        <>
            <div className="service-container d-flex align-items-center justify-content-center">
                <h1 className="text-white">OUR Service</h1>

            </div>
            <div className="container-fluid service-counter">
                <div className="row my-auto">
                    <div className="col-lg-3 common-size text-center text-white my-auto">
                        <CountUp end={235} duration={7} delay={1} start={0} />
                        <div className="common-border mx-auto" ></div>
                        <h5>Specialist Clinics</h5>
                    </div>
                    <div className="col-lg-3 common-size text-center text-white">
                        <CountUp end={630} duration={7} delay={1} start={0} />
                        <div className="common-border mx-auto" ></div>
                        <h5>Eye Exams Done </h5>
                    </div>
                    <div className="col-lg-3 common-size text-center text-white">
                        <CountUp end={2350} duration={7} delay={1} start={0} />
                        <div className="common-border mx-auto" ></div>
                        <h5>Satisfied Customers  </h5>
                    </div>
                    <div className="col-lg-3 common-size text-center text-white">
                        <CountUp end={859} duration={7} delay={1} start={0} />
                        <div className="common-border mx-auto" ></div>
                        <h5>Range of Services </h5>
                    </div>
                </div>
            </div>
            <div className="service-card">
                <div className="container">
                <div className="row g-4 pt-5">
                    {Data.map((info)=><ServiceCard key={info.id} event={servicecart}  data={info}/>)}
                </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default Service
