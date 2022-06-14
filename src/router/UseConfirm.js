import UseConfirmHock from "../hooks/UseConfirmHook";
import {Link} from "react-router-dom";

const UseConfirm = () =>{
    const deleteWorld = () => alert("You deleted the world...");
    const confirmMessage = UseConfirmHock("Are you sure",deleteWorld);
    return(
        <div>
            <button onClick={confirmMessage}>Delete the world</button>
            <div><Link to="/"><strong>Go Home</strong></Link></div>     
        </div>
    )
}

export default UseConfirm;