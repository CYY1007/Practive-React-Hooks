import { useState } from "react";

const UseInputHook = (init, validator)=>{
    const [value,SetValue] = useState(init);
    const onChange = (event) =>{
        const{
            target : {value}
        } = event;
        let willUpdate = true;
        if(typeof validator ==="function"){
            willUpdate = validator(value);
        }
        if (willUpdate){
            SetValue(value);
        }
        SetValue(value);
    }
    return {value,onChange};
};

export default UseInputHook;