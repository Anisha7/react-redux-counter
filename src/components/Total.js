import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { increment, decrement, reset } from '../actions/'

class Total extends Component {
  render() {
    const { total } = this.props
    return (
      <div>
        <h1> {total} </h1>
      </div>
    )
  }
}

// takes state and maps it to redux
const mapStateToProps = (state) => {
  return {
    total: state.counters.reduce((acc, count) => acc + count)
  }
}


// connect takes in some info and returns a modified information,
// such that counter is available in store
// and properties in mapStateToProps will be available in counter
// pass in map dispatch as a function call because we need to pass in the object it returns
// this is necessary for counterReducer to be called
export default connect(mapStateToProps)(Total)
