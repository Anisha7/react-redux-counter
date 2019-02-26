import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';
import CounterList from './CounterList'
import Total from './Total'
import { reducers } from '../reducers/'
import AddCounter from './AddCounter'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      // wrap in provider because it lets us pass things down to components
      // connects redux with react
      <Provider store={store}>
        <div className="App">
          <AddCounter />
          <CounterList />
          <Total />
        </div>
      </Provider>
    );
  }
}

export default App;
