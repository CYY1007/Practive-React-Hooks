import UseClickHook from"../hooks/UseClickHook";
import {Link} from "react-router-dom";

const UseClick = () =>{
    const sayHello = () => console.log("say hello");
    const title = UseClickHook(sayHello);
   
   return(<div>
        <h1 ref={title}>Hi</h1>
        <Link to="/"><strong>Go Home</strong></Link>
    </div>)
}

export default UseClick;