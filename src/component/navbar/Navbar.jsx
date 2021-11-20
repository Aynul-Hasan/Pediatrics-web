import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../customhook/useAuth'
import "./nav.css"
const Navbar = () => {
    const {user,logout}=useAuth()
    console.log(user)
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bolder ms-5" to="/"><h2>Pedia<span className="common-color ">trics</span></h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto pe-5 mb-2 mb-lg-0">
                    <li className="nav-item me-4 fw-bolder">
                    <Link className="nav-link  nav-link-hover" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item me-4 fw-bolder">
                    <Link className="nav-link nav-link-hover" to="/about">About US</Link>
                    </li>
                    <li className="nav-item me-4 fw-bolder">
                    <Link className="nav-link nav-link-hover" to="/service">Our Service</Link>
                    </li> 
                    <li className="nav-item me-4 fw-bolder">
                    <Link className="nav-link nav-link-hover" to="/doctor">Doctors</Link>
                    </li>

                    <li className="nav-item me-4 fw-bolder">
                    <Link className="nav-link nav-link-hover" to="/Contact">Contact US</Link>
                    </li>
                
                </ul>
                <span className='common-color me-2'>{user?.displayName}</span>
                {user?.email?<button onClick={logout} className="nav-btn">LogOut</button>:
                 <Link className="nav-link text-center " to="/login"><button className="nav-btn w-100">Login</button></Link>}
               
                </div>
            </div>
            </nav>
                        
        </>
    )
}

export default Navbar
