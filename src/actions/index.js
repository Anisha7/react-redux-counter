// create action objects
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'
// add counter feature
export const ADDCOUNTER = 'ADDCOUNTER'

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

export const addcounter = () => {
    return {
        type: ADDCOUNTER
    }
}