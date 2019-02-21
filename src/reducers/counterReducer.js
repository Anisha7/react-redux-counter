import { INCREMENT, DECREMENT, RESET } from '../actions/'

// redux will call every reducer twice with undefined state value
// thus, initialize value in function parameters
const counterReducer = (state = 0, action) => {
    // action object that we had in our action creator in index.js
    switch(action.type) {
        case INCREMENT:
            return state += 1
        case DECREMENT:
            return state -= 1
        case RESET:
            return 0
        // if not modified
        default:
            return state
    } 
}

export default counterReducer