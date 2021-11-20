import { useEffect, useState } from "react";
import firebaseInitapp from "../firebase/firebaseInti";
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut ,
     onAuthStateChanged,createUserWithEmailAndPassword , updateProfile ,signInWithEmailAndPassword} from "firebase/auth";



firebaseInitapp();
const useFirebase=()=>{
    const [user, setUser] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const singIngoogle=async()=>{
        try{
            setisLoading(true)
            const res= await signInWithPopup(auth, googleProvider)
           return res
        }catch(err){
                setUser(null)
        }
       
    }
    const pushusername=async(name)=>{
        const res=await  updateProfile(auth.currentUser, {
              displayName: name
            })
            console.log(res)
      }
    const createnewAccount=async(email,password,name)=>{
        setisLoading(true)
        try{
            const res=await createUserWithEmailAndPassword(auth, email, password)
            pushusername(name)
            setUser(res.user)
             setisLoading(false)
        }catch(err){
            setUser(null)
        }

    }
    const loginwithEmail=async(email,password)=>{
        try{
           const res=await  signInWithEmailAndPassword(auth, email, password)
           setUser(res.user)
           setisLoading(false)
        }catch(err){
            // console.log(err)
            setUser(null)
            return 400
        }

    }
    useEffect(() => {
       const unsubcribe= onAuthStateChanged(auth, (user) => {
           setisLoading(true)
            if (user) {
             setUser(user)
              
            } else {
             setUser(null)
            }
            setisLoading(false)
          });
          return ()=> unsubcribe
    }, [])

    const logout=async()=>{
        try{
            setisLoading(true)
            const res=signOut(auth)
            setUser(null)
            setisLoading(false)
        }catch(err){

        }
    }

    return{singIngoogle,user,logout,createnewAccount,loginwithEmail ,isLoading ,setUser,setisLoading}
}
export default useFirebase;