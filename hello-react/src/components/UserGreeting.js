import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:true
         }
     }
     
    render() {
    //1. Conditional rendering with if else. If else doesnt work inside jsx
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Bebana</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }
    //2 . Conditional rendering with variable
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Bebana</div>
        // }
        // else {
        //     message = <div>Welcome guest</div>
        // }
            //return <div>{message}</div>
    //3. Ternary operator
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Bebana</div> :
        //         <div>Welcome Guest</div>    
        // )
    //4. Short circuit, if we want to render one thing and render nothing otherwise 
        return this.state.isLoggedIn && <div>Welcome Bebana</div>


    }
}

export default UserGreeting
