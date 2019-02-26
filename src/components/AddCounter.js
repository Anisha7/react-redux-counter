// react needed for jsx
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../actions/'

class AddCounter extends Component {
    render() {
        const { addCounter } = this.props
        return (
            <div>
                <button onClick = {() => addCounter()}>Add Counter</button>
            </div>
        )
    }
}

// send messages to store
const mapDispatchToProps = () => {
    return {
        addCounter: addCounter
        // same as addCounter: addCounterå
    }       
}

// connect AddCounter so it calls the ACTION addCounter
// calling mapDispatchToProps because we wanna get the object
export default connect(null, mapDispatchToProps())(AddCounter)