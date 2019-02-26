import { INCREMENT, DECREMENT, RESET, ADD_COUNTER } from '../actions/'

// const defaultState = [0, 0, 0]
const defaultState = [{name:"Apples", count: 0}, {name:"Oranges", count: 0}, {name:"Lychees", count: 0}]
// redux will call every reducer twice with undefined state value
// thus, initialize value in function parameters
const counterReducer = (state = defaultState, action) => {
    // action object that we had in our action creator in index.js
    switch(action.type) {
        case INCREMENT:
            return state.map((obj, index) => {
                console.log(obj)
                if (action.payload === index) {
                    obj.count += 1
                }
                return obj
            })
        case DECREMENT:
            return state.map((obj, index) => {
                if (action.payload === index) {
                    obj.count -= 1
                }
                return obj
            })
        case RESET:
            return state.map((obj, index) => {
                if (action.payload === index) {
                    obj.count = 0
                }
                return obj
            })
        case ADD_COUNTER:
            // must create new array. Lets use spread operator then add one more val at end
            // a shallow copy
            console.log([...state, { name:action.payload, count:0 }])
            return [...state, { name:action.payload, count:0 }]
        // if not modified
        default:
            return state
    } 
}

export default counterReducer