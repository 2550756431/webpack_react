import {
    Increment,
    Decrement
} from "../actions/actionType"
const initState = {
    num: 1
}
export default function dataReducer(initState, action) {
    switch (action.type) {
        case Increment:
            initState.num = initState.num + action.num
            return {
                ...initState
            }
        case Decrement:
            initState.num = initState.num - action.num
            return {
                ...initState
            }
        default:
            return {
                ...initState
            }

    }
}