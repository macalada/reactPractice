import React from 'react'

function ChildComp(props) {
    //to pass parameter in the onclick use arrow function
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={()=>props.greetHandler("Bebana")}>Greet Parent</button>
        </div>
    )
}

export default ChildComp
