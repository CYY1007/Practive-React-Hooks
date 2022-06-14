import { Link } from "react-router-dom";
import UseAxiosHook from "../hooks/UseAxiosHook";

const UseAxios = () =>{
    const {loading, error,data,refetch} = UseAxiosHook({url:"https://yts.mx/api/v2/list_movies.json"});
    return(
    <div>
        <h1>{data && data.status}</h1>
        <h2>{loading&&"Loading"}</h2>
        <button onClick={refetch}>Refetch</button>
        <div>
            <Link to="/"><strong>Go Home</strong></Link>
        </div>
    </div>
    )
}

export default UseAxios;