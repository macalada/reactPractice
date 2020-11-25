import React from 'react';

// function Greet(){
//     return <h1>Hello Yanti</h1>
// }

const Greet = (props) =>{
    return (
        <div>
            <h1>Hello {props.name} and my hobby is {props.hobby}</h1>
            {props.children}
        </div>
    )
}



export default Greet;
