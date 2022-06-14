import UseInputHook from "../hooks/UseInputHook";
import {Link} from "react-router-dom";

const UseInput = ()=>{
    const maxLen = value => value.length < 10;
    const name = UseInputHook("Mr.",maxLen);

    return (
        <div>
            <h1>UseInput hook!</h1>
            <input placeholder="nmae" vlaue={name.vlaue} onChange={name.onChange}/>
            <div><Link to="/"><strong>Go home</strong></Link></div>
        </div>
    )
}
export default UseInput;