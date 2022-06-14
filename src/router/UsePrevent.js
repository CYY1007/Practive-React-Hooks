import { Link } from "react-router-dom";
import UsePreventLeaveHook from "../hooks/UsePreventLeaveHook";

const UsePrevent = () => {
    const {enablePrevent, disablePrevent}= UsePreventLeaveHook();
    return (
        <div>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
            <div><Link to="/"><strong>Go Home</strong></Link></div>
        </div>
    )
}

export default UsePrevent;