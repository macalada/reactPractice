import React, { Component } from 'react'

//1. use this.clickHandler.bind(this) on the onclick
//2. use arrow function onclick
//3. bind in the constructor (reccomended)
//4. arrow function handler (recc too)

 class EventBinding extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: 'Hello'
         }
        //  this.clickHandler = this.clickHandler.bind(this)
     }
    //  clickHandler (){
    //      this.setState({
    //          message: "Goodbye"
    //      })
    //     console.log(this)
    //  }
    clickHandler = () => {
        this.setState({
            message :"Goodbye"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Change Me</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Change Me</button> */}
                <button onClick={this.clickHandler}>Change Me</button>
            </div>
        )
    }
}

export default EventBinding
