import { useEffect, useState } from "react";

const UseNotificationHook = (title,opts) =>{
    const [check,setCheck] = useState(true);
    useEffect(()=>{
        if(!("Notification" in window))
            setCheck(false);
    })
    const notif = () =>{
        if(Notification.permission !== "granted")
        {
            Notification.requestPermission().then(permission => {
                if(permission ==="granted")
                    new Notification(title,opts);
                else{
                    return;
                }
            })
        }else{
            new Notification(title,opts)
        }
    };
    return notif;
}

export default UseNotificationHook;