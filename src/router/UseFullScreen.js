import UseFullScreenHook from "../hooks/UseFullScreenHook";

const UseFullScreen = () =>{
    const onFulls = (isFull) =>{
        console.log(isFull? "full" : "not full");
    }
    const {element,triggerFullScreen,exitfull} = UseFullScreenHook(onFulls);
    return (
        <div>
            <div ref={element}>
                <img src="https://images.unsplash.com/photo-1649631712005-b9cbfd563b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                <button onClick={exitfull}>exitfull</button>
            </div>
            <button onClick={triggerFullScreen}>Make FullScreen</button>
        </div>
    )
}

export default UseFullScreen;