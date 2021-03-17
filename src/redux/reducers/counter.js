import {INCREMENT, DECREMENT, RESET} from '../actions/actionTypes'

//A SLICE OF REDUCER
//WHICH IS ITSELF AN OBJECT

//step 01: create an initial state
const INITIAL_STATE = {
    count: 0,
    history: []
}

//step 02: update the initial state upon action type
const counter = (state = INITIAL_STATE, action) => {
    const {count, history} = state;

    switch(action.type) {
        case INCREMENT:
            return {count: count + 1, history: [count + 1, ...history]};
        case DECREMENT:
            return {count: count - 1, history: [count - 1, ...history]};
        case RESET:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default counter;