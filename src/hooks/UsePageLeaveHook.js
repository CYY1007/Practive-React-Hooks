import { useEffect } from "react";

const UsePageLeaveHook = (onBefore) =>{
    useEffect(()=>{document.addEventListener("mouseleave",handle)
    return () => document.removeEventListener("mouseleave",handle);
    },[])
    const handle = event=>{
        const {clientY} = event;
        if(clientY <= 0)
            onBefore();
    }
}

export default UsePageLeaveHook;