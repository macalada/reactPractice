import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Bebanica'
        }
        console.log("B constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("B get derived statefrom props")
        return null
    }
    componentDidMount(){
        console.log("B component did mount")
    }
    shouldComponentUpdate(){
        console.log("B should component update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('B snapshot before update')
        return null

    }
    componentDidUpdate(){
        console.log('B component did update')
    }
    
    render() {
        console.log("B rendering")
        return (

            
            <div>LifecycleB</div>
        )
    }
}

export default LifecycleB
