import { useState } from "react"


export default function Friendly(){


    const [friendly, setfriendly] = useState(true)

    function Changing(){
        setfriendly((next)=>{

            return(
               !next
            )

        })
    }

    return(
        <div className="ade">
            <h1>{friendly ? "Ade is a boy": "Bisola is a girl"}</h1>

            <button onClick={Changing}>Change</button>
        </div>
    )
}