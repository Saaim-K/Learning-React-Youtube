import React, { Component } from 'react'

function FuncEventHandling() {
    const funcClick = () => {
        console.log('Functional Component Clicked');
    }
    return (
        <>
            <button onClick={funcClick}>Function Click</button>
        </>
    )
}


class ClassEventHandling extends Component {
    classClick() {
        console.log("Class Component Clicked");
    }

    render() {
        return (
            <>
                <button onClick={this.classClick}>Class Click</button>
            </>
        )
    }
}






export { FuncEventHandling, ClassEventHandling };