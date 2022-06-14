import { useRef } from "react";

const UseFullScreenHook = (callback)=>{
    const element = useRef();
    const triggerFullScreen = () =>{
        if(element.current){
            element.current.requestFullscreen();
            if(callback && typeof callback === "function")
                callback(true);
        }
    }
    const exitfull = () =>{
        document.exitFullscreen();
        if(callback && typeof callback === "function")
        callback(false);
    }
    return {element,triggerFullScreen,exitfull};
}

export default UseFullScreenHook;