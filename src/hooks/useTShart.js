import { useEffect, useState } from "react"

const useTShart = () => {
    const [tshart, setTshart] = useState([])
    useEffect(() => {
        fetch('tshirts.json')
            .then(res => res.json())
            .then(data => setTshart(data))
    }, [])

    return [tshart, setTshart];
}

export default useTShart;