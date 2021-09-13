

import {
    Increment,
    Decrement
} from "../actions/actionType.js";
const _initState = {
    num: 1
}
export default function loginReducer(initState = _initState, action) {
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