import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';
import Counter from './Counter'
import { reducers } from '../reducers/'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      // wrap in provider because it lets us pass things down to components
      // connects redux with react
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
