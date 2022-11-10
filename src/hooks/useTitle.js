import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `  Pro Click- ${title} `;

    }, [title])
}

export default useTitle;