import { useState } from "react";

const useCard=()=>{
    const [card, setcard] = useState([])
 
    return{card, setcard }
}
export default useCard