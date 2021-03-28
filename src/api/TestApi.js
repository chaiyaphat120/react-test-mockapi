import React, { useCallback, useEffect, useState } from "react"
import axios from "axios"
function Test() {
    const [data, setData] = useState([])
    const fetchApi = useCallback(async () => {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        )
        setData(res.data)
    }, [])
    useEffect(() => {
        fetchApi()
    }, [fetchApi])

    let Component = <h1>...</h1>
    if (data.length !== 0) {
        Component = <h1>{data.userId}</h1>
        
    }

    return <div>{Component}</div>
}

export default Test
