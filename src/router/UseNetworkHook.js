import UseNetworkHook from "../hooks/UseNetworkHook";

const UseNetwork = () =>{
    const handleNetworkChange = online =>{
        alert(online? "Online!!" : "Offline!!");
    }
    const online = UseNetworkHook(handleNetworkChange);
    return(
        <div>
            <h1>{online? "Online" : "Offline"}</h1>
        </div>
    )
}

export default UseNetwork;