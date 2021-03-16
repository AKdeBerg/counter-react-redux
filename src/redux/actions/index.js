import {INCREMENT, DECREMENT, RESET} from './actionTypes'

//HERE WRITE ALL OF OUR ACTION CREATORS

export function increaseCount() {
    return {
        type: INCREMENT
    };
}
export function decreaseCount() {
    return {
        type: DECREMENT
    };
}
export function resetCount() {
    return {
        type: RESET
    };
}