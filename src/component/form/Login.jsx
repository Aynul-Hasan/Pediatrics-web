import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../customhook/useAuth';
import { useHistory, useLocation } from 'react-router'

const Login = () => {
    const {singIngoogle ,loginwithEmail,setUser,setisLoading}=useAuth();
    const location = useLocation();
    const histrioy= useHistory();
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState(false)
    const handleLogin=async()=>{
        if(!email||!password){
            return seterror(true)
         }else{
             seterror(false)
              const res=await loginwithEmail(email,password)
             seterror(false)
             if(res===400){
               return seterror(true)
             }
            //  console.log(res)
             histrioy.push(location?.state?.from?.pathname||'/')
            //  window.location.reload()
         }
    }
    const heandleGoogleLogin=async()=>{
      try{
         const res= await singIngoogle()
        if(res?.user){
         setUser(res?.user)
         setisLoading(false)
         histrioy.push(location?.state?.from.pathname||'/')
        }
      }catch(err){

      }
 }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src="./img/undraw_doctors_hwty.svg" className="img-fluid" width="500" alt="" />
                </div>
                <div className="col-lg-6 mt-5">
                <input type="text" placeholder="Email"  className={error?"contact-input border-danger":"contact-input"} value={email} onChange={(e)=>setEmail(e.target.value)}  /><br />
               <input type='password' placeholder="Password" className={error?"contact-input border-danger":"contact-input"} value={password} onChange={(e)=>setpassword(e.target.value)} /><br />
                <button onClick={handleLogin} className="card-btn">Login</button>
                <p className="text-center">or login with </p>
              <div className="text-center">  <button onClick={heandleGoogleLogin} className="google-btn " ><img src="./img/google.png" alt="" width="30" /></button></div>
                <hr />
                <Link className="nav-link common-color" to="/signup">Create an new accout?</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
