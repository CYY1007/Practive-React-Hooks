import { useEffect, useState } from "react";

const UseScrollHook = () =>{
    const [state,Setstate] = useState({x:0,y:0});
    useEffect(()=>{
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[])
    const onScroll = () =>{
        Setstate({y: window.scrollY, x: window.scrollX});
    }
    return state;
}

export default UseScrollHook;