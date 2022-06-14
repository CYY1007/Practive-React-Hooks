import defaultAxios from "axios";
import { useEffect, useState } from "react";
const UseAxiosHook = (opts, axiosInstance=defaultAxios) =>{ 
    const [check,setCheck] = useState(true);
    const [state,setState] = useState({
        loading: true,
        error:null,
        data:null
    });
    const refetch = () =>{
        setState({
            ...state,
            loading : true,
        })
        setTrigger(Date.now());
    }
    const [trigger,setTrigger] = useState(0);
    useEffect(()=>{
       if(!opts){
        setCheck(false); }
       axiosInstance(opts).then(data =>{
           setState({
               ...state,
               loading : false,
               data

           })
       }).catch(error=>{
           setState({...state, loading:false, error});
       }) 
    
    },[trigger]);
    if(!check){
        return;
    }
    
    return {...state,refetch}
}

export default UseAxiosHook;