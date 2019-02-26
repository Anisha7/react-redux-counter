// create action objects
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'
// add counter feature
export const ADD_COUNTER = 'ADD_COUNTER'

export const increment = (index) => {
    return {
        type: INCREMENT,
        payload: index
    }
}

export const decrement = (index) => {
    return {
        type: DECREMENT,
        payload: index
    }
}

export const reset = (index) => {
    return {
        type: RESET,
        payload: index
    }
}

export const addCounter = () => {
    return {
        type: ADD_COUNTER
    }
}