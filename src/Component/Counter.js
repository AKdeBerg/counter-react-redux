import React from 'react';

const Counter = () => {

    return (
        <div>
            <h2>Counter</h2>
            {/*Here lies the actual counter, we fetch it from state*/}
            <h3></h3> 
            {/*we fire an action cretor upon onClick*/}
            <button onClick={}>Increase</button>
            <button onClick={}>Decrease</button>
            <button onClick={}>Reset</button>
        </div>

    );
}

export default Counter;