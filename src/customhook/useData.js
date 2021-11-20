import { useEffect, useState } from "react";

const useData=(url)=>{
    const [Data, setData] = useState([])
   
    useEffect(() => {
      const  gerData=async()=>{
            const data=await fetch(url)
            const res= await data.json()
            setData(res)
           
        }
       gerData()
    }, [url])
    return{Data}
}
export default useData;