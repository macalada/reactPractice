import React from 'react'

function Column() {
    return (
        <React.Fragment>
            <td>Name</td>
            <td>Maca</td>
        </React.Fragment>
    )
}
//React.Fragment can be use with key attribute, if you dont need that you can just use <> </> empty container
export default Column
