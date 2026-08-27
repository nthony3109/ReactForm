import { useEffect, useState } from "react"

const EarlyReturn = () => {
    const [loading,setLoading] = useState(true)

    useEffect(() =>{
      setTimeout( ()=>{setLoading(false)},3000)  
    },[])

    if (loading) return <h1>Loading... please wait</h1>

    return (
        <>
        <h2>data loaded here zi</h2>
        </>
    )
}
export default EarlyReturn