import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>My name is {person.name} and i am {person.age} and i know {person.skill}</h2>
        </div>
    )
}

export default Person
