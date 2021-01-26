import React from 'react'

const heading = {
    fontSize : '50px',
    color: 'red'
}

function Inline() {
    return (
        <div>
            <h1 className ='error'>This is error sample</h1>
            <h1 style ={heading}>This is inline styling using predefined object at the top of file</h1>
        </div>
    )
}

export default Inline
