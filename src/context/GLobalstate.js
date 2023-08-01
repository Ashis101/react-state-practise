import { createContext,useReducer } from "react";
import appReducer from "./appReducer";

const initialState={
    value:0
}

export  const Mycontext=createContext(initialState);

export const MycontextProvider=({children})=>{

    const [state,dispatch]=useReducer(appReducer,initialState);

    function incre(){
        dispatch({
            type:"INCREMENT",
            payload:1
        })        

    }

    function decre(){
        dispatch({
            type:"DECREMENT",
            payload:1
        })
    }


    return ( <Mycontext.Provider value={{
        value:state.value,
        incre,
        decre
    }} >  
        {children}
    </Mycontext.Provider> 
    )

}

