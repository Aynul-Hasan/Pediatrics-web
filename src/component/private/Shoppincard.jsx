import React from 'react'
import { useParams } from 'react-router'
import useAuth from '../../customhook/useAuth'
import useCard from '../../customhook/useCard'
import useData from '../../customhook/useData'

const Shoppincard = () => {
    // const {card}= useCard()
    const{id}=useParams()
    const{Data}=useData('/service.json')
   const oneData= Data.filter((d)=> d.id===id)
   console.log(oneData,id)
    const {user}= useAuth();
    
    console.log(user)
    return (
        <>
        <div className="book-container d-flex justify-content-center align-items-center">
            <h1 className="text-white">BOOK SERVICE</h1>
        </div>
        <div className=" service-card ">
            <div className="container">
            <div className="row pt-5">
                    <div className="col-lg-5 bg-color">
                     <h6 className="common-color text-center">We are here for you</h6>
                     <h4 className="common-color text-center mb-4">Book Service</h4>
                    <input type="text" value={oneData[0]?.title} placeholder="Service Name" name="" className="contact-input" />
                    <input type="text" value={user?.displayName} placeholder="Name" name="" className="contact-input" />
                    <input type="email" value={user?.email} placeholder="Email" name="" className="contact-input" />
                    <input type='date'   placeholder="" name="" className="contact-input" required />
                    <input type="number" placeholder="Phone" name="" className="contact-input" />
                    <div>
                    <select className="contact-input" aria-label="Default select example">
                    <option selected>Select Doctors</option>
                    <option value="Victor Fernandez">Victor Fernandez</option>
                    <option value="Paul Dixon">Paul Dixon</option>
                    <option value="Jordan Kelley">Jordan Kelley</option>
                    <option value="Anne Elliot">Anne Elliot</option>
                    <option value="Donald Cox">Donald Cox</option>
                    <option value="Brandon Burns">Brandon Burns</option>                    
                    </select>
                    </div>
                    <button  className="card-btn mb-5">Apply</button>
                    </div>
                    <div className="col-lg-7 text-center ps-5">
                        <img src="../../IMG/—Pngtree—cartoon hand drawn mobile appointment_5437868.png" className="img-fluid" alt="" />
                    </div>
            </div>
            </div>
           
        </div>
            
        </>
    )
}

export default Shoppincard
