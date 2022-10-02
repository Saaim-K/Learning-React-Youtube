//-------------------- State Class Component --------------------

import React, { Component } from 'react'

export default class StateClass extends Component {
    constructor() { 
        super()
        //super() Refers to the parent class.If we are extending/inheriting anything from parent class(i.e. now Components) or any other class we use super() keyword.

        this.state = {
            message: 'Click here to set State',
            number: 1
        }
    }

    changeMessage() {
        this.setState({
            message: 'Congrats you switched the state',
            number: this.state.number + 1
        }
        )
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.changeMessage()}>Use State</button>
                {/* if we will not use arrow function here then the function will run automatically */}
            </>
        )
    }
}
//-------------------- State Class Component --------------------