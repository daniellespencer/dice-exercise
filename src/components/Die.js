import React, { Component } from 'react';

import '../styles/Die.css';

class Die extends Component {
    render(){
        return (
            <div>
                <i className={`Die fa fa-dice-${this.props.face} ${this.props.rolling && 'shaking'}`}></i>
            </div>
            
        )
    }

}

export default Die;