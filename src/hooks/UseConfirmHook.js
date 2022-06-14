const UseConfirmHock = (message="",callback) =>{
    if(callback && typeof callback !== "function")
        return;
    const confirmAction = () =>{
        if(window.confirm(message))
            callback();
    }
    return confirmAction;
}

export default UseConfirmHock;