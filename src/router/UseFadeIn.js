import { Link } from "react-router-dom";
import UseFadeInHook from "../hooks/UseFadeInHook";

const UseFadeIn = () =>{
    const fadeHello = UseFadeInHook(1,2);
    const fadep = UseFadeInHook(3,4);
    return (
        <div>
            <h1 {...fadeHello}>Hello</h1>
            <p {...fadep}>lorem ipsum lalalalala</p>
            <div>
                <Link to="/"><strong>Go Home</strong></Link>
            </div>
        </div>

    )
}

export default UseFadeIn;