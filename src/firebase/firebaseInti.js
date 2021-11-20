import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
const firebaseInitapp=()=>{
    initializeApp(firebaseConfig)
}
export default firebaseInitapp;