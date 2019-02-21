import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'

class CounterList extends Component {

    renderCounters() {
        // index is coming in to counter as props
        return this.props.counters.map((count, index) => <Counter key={index} index={index} />)
    }

    render() {
        return (
            <div>
                {this.renderCounters()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // need to change counter in reducers to counters
        counters: state.counters
    }
}

export default connect(mapStateToProps)(CounterList)