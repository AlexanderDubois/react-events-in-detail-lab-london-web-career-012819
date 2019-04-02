// Code CoordinatesButton Component Here

import React, {Component} from 'react'

class CoordinatesButton extends Component {

    handleButton = (event) => {
        const mouseX = event.clientX
        const mouseY = event.clientY

        this.props.onReceiveCoordinates([mouseX, mouseY])
    }
  
    render() {
        return (
            <button onClick={this.handleButton}>Log Mouse Cords</button>
        )
    }
}

export default Component