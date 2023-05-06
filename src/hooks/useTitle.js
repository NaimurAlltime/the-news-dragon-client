import { useEffect } from "react";

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - The News Dragon`
    } , [title])
}

export default useTitle;