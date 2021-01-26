import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Bebana'
        }
        console.log("A constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("A get derived statefrom props")
        return null
    }
    componentDidMount(){
        console.log("A component did mount")
    }
    shouldComponentUpdate(){
        console.log("A should component update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('A snapshot before update')
        return null

    }
    componentDidUpdate(){
        console.log('A component did update')
    }
    handleClick = ()=>{
        this.setState({
            name:'Baby'
        })
    }
    
    render() {
        console.log("A rendering")
        return (

            <div>
                <div>LifecycleA</div>
                <button onClick={this.handleClick}>Change State</button>
                {/* <LifecycleB/> */}
            </div>
            
            
        )
    }
}

export default LifecycleA
