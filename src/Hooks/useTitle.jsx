import { useEffect } from "react";

// Custom hook for Router Title
const useTitle = (title) => {
        useEffect(()=>{
            document.title = `Toy Verse | ${title}`;
        }, [title])
};

export default useTitle;