import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:' ',
              comment:' ',
              skills:'React'
         }
     }
     handleUsernameChange = event =>{
         this.setState({
             username : event.target.value
         })
     }
     handleCommentChange = event =>{
        this.setState({
            comment : event.target.value
        })
    }
    handleTopicChange = event =>{
        this.setState({
            topic : event.target.value
        })
    }
    handleSubmit = event =>{
        alert (`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
     
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
            </div>
            <div>
                <label>Comment</label>
                <textarea type='text' value={this.state.comment} onChange={this.handleCommentChange}></textarea>
            </div>
            <div>
                
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option>React</option>
                    <option>Python</option>
                    <option>vue</option>

                </select>
                
            </div>
            <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
