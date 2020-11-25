import React, { Component } from 'react'

 class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message : "Welcome visitor"
         
        }
    }
    changeMessage (){
        //setState accept object as an argument
        this.setState({
            message : "Thanks for subscribing"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {()=>this.changeMessage()}>Subscribe</button>
                {/* <button onClick = {this.changeMessage()}>Subscribe</button> */}
            </div>
        )
    }
}

export default Message
