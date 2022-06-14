import UseTitleHook from "../hooks/UseTitleHook";
import {Link} from "react-router-dom";

const UseTitle = () =>{
    const titleUpdater = UseTitleHook("Loading..");
    setTimeout(() =>titleUpdater("Home"), 1000);
    return (
        <div>
            <div><Link to="/"><strong>Go home</strong></Link></div>
        </div>
    )
}

export default UseTitle;