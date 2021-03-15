import React from 'react';
import Counter from './Counter';
import History from './History';

const App = () => {

    return (
        <div>
            <h1>A React Redux Counter App</h1>
            <Counter />
            <History />
        </div>
    );
}

export default App;