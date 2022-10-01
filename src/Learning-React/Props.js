import React, { Component } from 'react'
//-------------------- Props Functional Component --------------------
// import React from 'react'

function FuncProps(props) {
    return (
        <>
            <h1>Hello {props.funcName}. You are the best {props.funcNick}</h1>
        </>
    )
}
<br />
//-------------------- Props Functional Component --------------------

//-------------------- Props Class Component --------------------
// In class componets propertiess are available by this.prop which are reserved in class components

class ClassProps extends Component {
    render() {
        return (
            <h1>Hello {this.props.name}. You are the best {this.props.nick}</h1>
        )
    }
}
//-------------------- Props Class Component --------------------

export {
    FuncProps,
    ClassProps
}