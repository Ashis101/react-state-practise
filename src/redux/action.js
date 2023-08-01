export  function incre(){
    return({
        type:"INCREMENT",
        payload:1
    })        

}

export function decre(){
    return({
        type:"DECREMENT",
        payload:1
    })
}


