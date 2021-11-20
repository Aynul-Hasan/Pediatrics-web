import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <>
            <div className=" container-fluid p-0 notfound text-center">
                <img src="./img/pngegg.png" alt="" width='400' /><br />
                <p className=" text-warning">404</p>
                <button className="home-btn my-4 "><Link className="text-decoration-none link-dark" to="/"><i className="fas fa-arrow-left"></i> Go to home</Link></button>
            </div>
        </>
    )
}

export default Notfound