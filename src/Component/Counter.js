import React from 'react';
import { connect } from 'react-redux';
import { decreaseCount, increaseCount, resetCount } from '../redux/actions';

const Counter = ({counter, increaseCount, decreaseCount, resetCount}) => {

    return (
        <div>
            <h2>Counter</h2>
            {/*Here lies the actual counter, we fetch it from state*/}
            <h3>{counter}</h3> 
            {/*we fire an action creator upon onClick*/}
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
        </div>

    );
}

const mapStateToProp  = (state) => {
    return {counter: state.counter.count}
}

export default connect(mapStateToProp, {
    increaseCount: increaseCount,
    decreaseCount: decreaseCount,
    resetCount: resetCount
})(Counter);