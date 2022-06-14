import { useEffect, useState } from "react";

const UseTitleHook = (init) =>{
    const [title, setTitle] = useState(init);
    const updateTitle = () =>{
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };

    useEffect(updateTitle,[title]);
    return setTitle;
}

export default UseTitleHook;