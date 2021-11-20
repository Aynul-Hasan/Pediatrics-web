import React from 'react'
import useData from '../../customhook/useData'
import Card from '../share/Card'

const Doctor = () => {
    const {Data}= useData('./doctor.json') 
    return (
        <>
            <div className="doctor-container d-flex align-items-center justify-content-center">
                    <h1 className="common-size text-white" >Our Doctors</h1>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {Data.map((info)=><Card key={info.id} data={info}/>)}
                </div>
            </div>
        </>
    )
}

export default Doctor
