import React from 'react'
import Person from '../components/Person';

function NameList() {
    const persona = [{
        id:1,
        name:"Bebana",
        age:2,
        skill: "eat",
    },
    {
        id:2,
        name:"Papana",
        age:45,
        skill: "work",
    },
    {
        id:3,
        name:"Mamana",
        age:33,
        skill: "sleep",
    }]
    // const names = ['Bebana', 'Papana', 'Mamana']
    const personList = persona.map(person => <Person key ={person.id} person={person}/>)
    return <div>{personList}</div>
}

export default NameList
