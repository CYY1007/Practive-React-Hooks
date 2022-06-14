import { useState } from "react";

const useTabsHook = (init, alltabs) =>{
    const [currentIndex, setCurrentIndex] = useState(init);
    if (!alltabs || !Array.isArray(alltabs))
        return;
    return {
        currentItem : alltabs[currentIndex],
        changeItem: setCurrentIndex
    };
}
export default useTabsHook;