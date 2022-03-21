import { useEffect, useRef, useState } from "react";

export function useToggle(initial){
   
    const[val , setval] =  useState( (JSON.parse(localStorage.getItem("data"))))

    const ref = useRef()

    const gum = function(){
        setval(ref.current.value)
        setval([...val,ref.current.value])  
       

       
    }

    useEffect(function(){
        localStorage.setItem("data",JSON.stringify(val))
     },[val])

    const handleLocalClear = function(){
        localStorage.clear()
        setval(val.splice())
    }

    const handleGet = function(){
        setval(JSON.parse(localStorage.getItem("data")))
    }
    

    return[
        val,
        gum,
        ref,
        handleLocalClear,
        handleGet
    ]
}

