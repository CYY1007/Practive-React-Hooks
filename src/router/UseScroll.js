
import { Link } from "react-router-dom";
import UseScrollHook from "../hooks/UseScrollHook";

const UseScroll = () =>{
    const {y} = UseScrollHook();
    return(
        <div style={{height: "1000vh"}}>
            <h1 style={{position: "fixed", color: y > 100 ? "red":"blue"}}>Hi</h1>
            <div>
                <Link to="/"><strong>Go Home</strong></Link>
            </div>
        </div>
    )
}

export default UseScroll;