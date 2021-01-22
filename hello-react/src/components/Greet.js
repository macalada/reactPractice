import React from 'react';

// function Greet(){
//     return <h1>Hello Yanti</h1>
// }

const Greet = (props) =>{
    //deconstructor props 1. straight in the function parameter {name, hobby, children} 2.using const {name ,hobby} = props
// const Greet =({name,hobby,children}) => { 
    const {name, hobby, children} = props;
    return (
            <div>
                {/* // <h1>Hello {props.name} and my hobby is {props.hobby}</h1> */}
                <h1>Hello {name} and my hobby is {hobby}</h1>
                {children}
            </div>
        )
}



export default Greet;
