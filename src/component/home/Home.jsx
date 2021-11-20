import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../customhook/useAuth'
import useData from '../../customhook/useData'
import ServiceCard from '../service/ServiceCard'
import './home.css'
const Home = () => {
    const {Data}= useData('./service.json') 
    return (
        <>
        <div className="home-container P-0">
          <div className="row m-0">
              <div className="col-lg-4"></div>
              <div className="col-lg-5  ps-5 mt-5">
              <h1 className="mt-5 common-size">Taking a <span className="common-color">holistic</span>  <br />Approach to Health.</h1>
              <div className="common-border" ></div>
              <h5 className="text-muted mt-4">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime place? </h5>
            <button className="home-btn mt-4" >PURCHASE</button>
              </div>
              <div className="col-lg-3 mt-5">
                  
                    <img className="mt-5 home-rocket-img"  src="./img/h3-slider-1.2.png" width="250"  alt="" />
              </div>
          </div>
        </div>
        <div className="container mt-5">
          <h1 className="text-center">Our Advantages</h1>
          <div className="common-border mx-auto " ></div>
          <h6 className="text-center mb-5">Our AdvantagesAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis <br /> praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias</h6>
            <div className="row text-center mb-5">
            <div className="col-lg-3">
              <img  className='home-img-border'src="./img/h3-img-1.png" alt="" />
              <h6 className="fw-bolder">The Flu Problems</h6>
              <p className="text-muted">Nemo enim ipsam voluptatem quia voluptas</p>
            </div>
            <div className="col-lg-3">
              <img className='home-img-border' src="./img/h3-img-2.png" alt="" />
              <h6 className="fw-bolder">Kids Dentist</h6>
              <p className="text-muted">Nemo enim ipsam voluptatem quia voluptas</p>
            </div>
            <div className="col-lg-3 m-0">
              <img className='home-img-border' src="./img/h3-img-3.png" width="270" alt="" />
              <h6 className="fw-bolder">Convenient Place</h6>
              <p className="text-muted">Nemo enim ipsam voluptatem quia voluptas</p>
            </div>
            <div className="col-lg-3">
              <img className='home-img-border' src="./img/h3-img-4.png" alt="" />
              <h6 className="fw-bolder">Illness & Injuries</h6>
              <p className="text-muted">Nemo enim ipsam voluptatem quia voluptas</p>
            </div>
               
            </div>
            {/* card section */}
            <div className="row mb-5">
              <h1 className="text-center mb-5">Our Service</h1>
              {/* <div className="common-border" ></div> */}
            {Data.slice(4).map((info)=><ServiceCard key={info.id} data={info}/>)}
            <Link to="/service" className="nav-link text-dark text-center"><button className="home-service-btn">See All <i className="fas ms-2 fa-arrow-right"></i></button></Link>

            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <img src="./img/h3-img-5.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 mt-5">
              <div className="d-flex justify-content-evenly align-items-center">
             <div className="home-icon">
             <i className="fas fa-heartbeat "></i>
             </div>
                <div className="ps-3" >
                  <h5>The Highest Quality Healthcare.</h5>
                  <p>Nam libero tempore, cum soluta nobis est eligendi. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
                </div>
              </div>
              <div className="d-flex  align-items-center my-3">
              <div className="home-icon">
              <i className="fas fa-phone-alt"></i>
             </div>
                <div className="ps-3">
                  <h5>Improving the Quality of Your Life.</h5>
                  <p>Nam libero tempore, cum soluta nobis est eligendi. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
              <div className="home-icon">
             <i className="fas fa-heartbeat "></i>
             </div>
                <div className="ps-3" >
                  <h5>Leading the Way in Excellence.</h5>
                  <p>Nam libero tempore, cum soluta nobis est eligendi. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
                </div>
              </div>
              </div>
            </div>

        </div>

            
        </>
    )
}

export default Home
