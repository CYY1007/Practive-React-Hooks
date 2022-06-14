import { useRef, useEffect } from "react";

const UseClickHook = (func)=>{
    const element = useRef();
    useEffect(()=>{
        if (typeof func !== "function")
            return;
        if(element.current)
            element.current.addEventListener("click",func);
        return () =>{
            if(element.current){
                element.current.removeEventListener("click",func);
            }
        }
    },[]);
    return element;
}

export default UseClickHook;