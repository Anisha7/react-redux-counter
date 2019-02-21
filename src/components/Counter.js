import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../actions/'

class Counter extends Component {
  render() {
    const { index, increment, decrement, reset, counters } = this.props
    return (
      <div>
        <h1>{counters[index]}</h1>
        <p>
          <button onClick={() => increment(index)}> + </button>
          <button onClick={() => decrement(index)}> - </button>
          <button onClick={() => reset(index)}> reset </button>
        </p>
      </div>
    )
  }
}

// takes state and maps it to redux
const mapStateToProps = (state) => {
  return {
    counters: state.counters
  }
}

// map increment, decrement action objects to our component (counter reducer) and connect it to the store 
const mapDispatchToProps = () => {
  return {
    increment,
    decrement,
    reset
  }
}

// connect takes in some info and returns a modified information,
// such that counter is available in store
// and properties in mapStateToProps will be available in counter
// pass in map dispatch as a function call because we need to pass in the object it returns
// this is necessary for counterReducer to be called
export default connect(mapStateToProps, mapDispatchToProps())(Counter)
