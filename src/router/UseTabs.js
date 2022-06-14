import UseTabsHook from "../hooks/UseTabsHook";
import {Link} from "react-router-dom";

const content = [
    {
        tab : "Section 1",
        content : "I'm the conetnt of the section 1",
    },
    {
        tab : "Section 2",
        content : "I'm the content of the section2"
    }
]

const UseTabs = () =>{
    const {currentItem,changeItem} = UseTabsHook(0,content);
    return (
        <div>
            {content.map((section,index)=> <button onClick={()=>changeItem(index)}>{section.tab}</button>)}
            <div>{currentItem.content}</div>
            <div><Link to="/"><strong>Go home</strong></Link></div>
        </div>
    )
}

export default UseTabs;
