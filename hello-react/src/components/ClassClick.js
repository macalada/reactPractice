import React, { Component } from 'react'

 class ClassClick extends Component {
     clickHandler(){
         console.log("Class is clicked")

     }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me Too</button>
                
            </div>
        )
    }
}

export default ClassClick
