import UseNotificationHook from "../hooks/UseNotificatoinHook";

const UseNotification = () =>{
    const triggernotif = UseNotificationHook("Can I steal your kimchi",{body:"I Love kimchi"});
    return(
        <div>
            <button onClick={triggernotif}>trigger!</button>
        </div>
    )
}

export default UseNotification;