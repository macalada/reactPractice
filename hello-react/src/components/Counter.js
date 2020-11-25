import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increment(){
        //setState can have 2 parameters, first state object (or function), second callback function
        //when you have to update state based on previous value, pass in a function as an argument instead of regular object
        // this.setState({
        //     count : this.state.count + 1
        // },()=>{console.log("callback value", this.state.count)})
        this.setState(prevState => ({
            count : prevState.count + 1   
        }
            
        )

        )
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <div>count : {this.state.count}</div>
                <button onClick = {()=>this.incrementFive()}>Increment</button>

            </div>
        )
    }
}

export default Counter
