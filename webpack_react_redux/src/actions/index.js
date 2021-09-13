import { Decrement, Increment } from "./actionType"

const num_increment = (payload = {}) => {
    return {
        type: Increment,
        ...payload
    }
}

const num_decrement = (payload = {}) => {
    return {
        type: Decrement,
        ...payload
    }
}

export {
    num_increment,
    num_decrement
}