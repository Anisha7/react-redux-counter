// combine reducers
import { combineReducers } from 'redux'
import counterReducer from './counterReducer';

// object store
export const reducers = combineReducers( {
    counters: counterReducer
})
