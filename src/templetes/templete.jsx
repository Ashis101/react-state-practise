import {useContext, useState } from "react";
// import { Mycontext } from "../context/GLobalstate";  // method used for context api

import {useSelector,useDispatch} from 'react-redux';
import {incre,decre} from '../redux/action';
const  Templete=()=>{
    const [data,setData]=useState(0)
    // const {incre,decre,value}=useContext(Mycontext); // method used for context api
    const val=useSelector((state)=>state.value)
    const dispatch=useDispatch();


    return(
        <div className="container">
            <button className="btn minus" onClick={()=>dispatch(decre())}>-</button>
            <div className="value">{val}</div>
            <button className="btn plus" onClick={()=>dispatch(incre())}>+</button>
        </div>

    )

}


export default Templete;