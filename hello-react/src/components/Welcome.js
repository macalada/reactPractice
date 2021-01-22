import React, {Component} from 'react';

class Welcome extends Component {
    render (){
        const {name, hobby} = this.props
        return <h1>Welcome {name} and my hobby is {hobby}</h1>
    }
}

export default Welcome;