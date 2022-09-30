//-------------------- Props Functional Component --------------------
// import React from 'react'

// export default function Props(props) {
//     return (
//         <>
//     <h1>Hello {props.name}. You are the best {props.nick}</h1>    
//     </>
//   )
// }
//-------------------- Props Functional Component --------------------

//-------------------- Props Class Component --------------------
// In class componets propertiess are available by this.prop which are reserved in class components
import React, { Component } from 'react'

export default class Props extends Component {
    render() {
        return (
    <h1>Hello {this.props.name}. You are the best {this.props.nick}</h1>    
        )
    }
}
    //-------------------- Props Class Component --------------------