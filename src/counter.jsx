import { useState } from "react"

export default function Counter () {

    const [count ,setCount] = useState(0);

    const haldelAdd = () => {
const newCount = count + 1;
setCount(newCount)
    }


    const handelReduce = ()=>{
        const newCount = count - 1;
        setCount(newCount)

    }

    return(
        <div style={{border:"2px solid red",borderRadius:"15px", padding:"15px"}}>
            <h3> Counter :{count} </h3>
            <button onClick={haldelAdd}>add</button>

            <button onClick={handelReduce}>reduce</button>
        </div>
    )
}