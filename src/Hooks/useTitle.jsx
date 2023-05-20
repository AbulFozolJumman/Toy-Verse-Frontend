import { useEffect } from "react";


const useTitle = (title) => {
        useEffect(()=>{
            document.title = `Toy Verse | ${title}`;
        }, [title])
};

export default useTitle;