import { useState } from "react"

const Rendering = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        console.log("before count incre:",count);
        
        setCount( (prev) => prev+1)
        setCount( (prev) => prev+1)
        setCount( (prev) => prev+1)

        console.log("after incre :", count);
        
    }
    return (
        <>
            <button onClick={handleClick}>click</button>

            
                <h1>{count}</h1>
            
        </>
    )
}
export default Rendering