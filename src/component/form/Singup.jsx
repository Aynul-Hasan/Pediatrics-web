import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../customhook/useAuth'
import { useHistory, useLocation } from 'react-router'

const Singup = () => {
    const {singIngoogle,createnewAccount ,setUser,setisLoading}=useAuth();
    const location = useLocation();
    const histrioy= useHistory();
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState(false)
    //  console.log(error,)

    const handelLogin=()=>{
        if(!email||!password||!name){
           return seterror(true)

        } else if(password.length<6){
               return seterror(true)
        }else{
            seterror(false)
             createnewAccount(email,password,name)
           
         histrioy.push(location?.state?.from?.pathname||'/login')
        //  window.location.reload()
        }
      
    }
    const heandleGoogleLogin=async()=>{
          try{
            const res=await singIngoogle()
            if(res?.user){
            setUser(res.user)
            setisLoading(false)
            histrioy.push(location?.state?.from?.pathname||'/')
            }
          }catch(err){

          }
          
    }
    return (
        <>
         <div className="container my-5">
           <div className="row m-0 p-0">
               <div className="col-lg-6">
               <input type="text" onChange={(e)=>setname(e.target.value)}     value={name} placeholder="Name"  className={error?"contact-input border-danger":"contact-input"} required /><br />
             <input type="email"  onChange={(e)=>setemail(e.target.value)}    value={email}  placeholder="Email"  className={error?"contact-input border-danger":"contact-input"} required /><br />
            <input type='password'onChange={(e)=>setpassword(e.target.value)} value={password}  placeholder="Password" className={error?"contact-input border-danger":"contact-input"}required/><br />
            <button onClick={handelLogin} className="card-btn">Sign Up</button>

                <p className="text-muted text-center">or create account with</p>
                <div className="text-center">
                {/* <button className="google-btn me-2" ><img src="./img/google.png" alt="" width="30" /></button> */}
                <button onClick={heandleGoogleLogin} className="google-btn" ><img src="./img/google.png" alt="" width="30" /></button>
                </div>
            <hr />
            <Link className="nav-link common-color" to="/login">Alraedy have an accout?</Link>
               </div>
               <div className="col-lg-6 text-center">
                   <img src="./img/undraw_medicine_b1ol.svg" className="img-fluid" width="500" alt="" />
               </div>
           </div>
          </div>
        </>
    )
}

export default Singup
