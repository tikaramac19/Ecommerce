import React from "react";
import { useCounter } from "../../provider/Counter.provider";

interface Icounter{
    farwards:boolean
}


const BackwardCounter = () =>{
    const counter = useCounter<Icounter>(false);
    return <>

        <h1>{counter}</h1>
    
    </>
}

export default BackwardCounter;