import { INCREMENT, DECREMENT, RESET, ADDCOUNTER } from '../actions/'

const defaultState = [0, 0, 0]
// redux will call every reducer twice with undefined state value
// thus, initialize value in function parameters
const counterReducer = (state = defaultState, action) => {
    // action object that we had in our action creator in index.js
    switch(action.type) {
        case INCREMENT:
            return state.map((count, index) => {
                if (action.payload === index) {
                    return count += 1
                }
                return count
            })
        case DECREMENT:
            return state.map((count, index) => {
                if (action.payload === index) {
                    return count -= 1
                }
                return count
            })
        case RESET:
            return state.map((count, index) => {
                if (action.payload === index) {
                    return 0
                }
                return count
            })
        case ADDCOUNTER:
            defaultState.push(0)
        // if not modified
        default:
            return state
    } 
}

export default counterReducer