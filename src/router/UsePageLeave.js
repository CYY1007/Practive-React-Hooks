import { Link } from "react-router-dom";
import UsePageLeaveHook from "../hooks/UsePageLeaveHook";

const UsePageLeave = () =>{
    const begForLife = () => alert("Please do not leave..");
    UsePageLeaveHook(begForLife);
    return(
        <div>
            <h2>Hello!</h2>
            <div>
                <Link to="/"><strong>Go Home</strong></Link>
            </div>
        </div>

    )
}

export default UsePageLeave;