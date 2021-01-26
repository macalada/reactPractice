import React from 'react'
import './myStyle.css' 

function Stylesheet(props) {
    let className = props.primary ? 'primary' : 'secondary'
    return (
        <div>
            <h1 className={`${className} font-xl`}>Hello, i had breakfast with my little man, bebana</h1>
        </div>
    )
}

export default Stylesheet
