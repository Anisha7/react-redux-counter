// react needed for jsx
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../actions/'

class AddCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counterName: ""
        }
    }

    render() {
        const { addCounter } = this.props
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.counterName} 
                    onChange={(e) => this.setState({ counterName: e.target.value })}
                />
                <button class = "addCounter" onClick = {() => {
                    addCounter(this.state.counterName)
                    this.setState({ counterName: "" })
                }}>Add Counter</button>
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