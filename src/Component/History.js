import React from 'react';
import { connect } from 'react-redux';

const History = ({history}) => {

    return (
        <div>
            <h2>History</h2>
            <ul>
                {/*map over the history state and put them in <li>*/}
                {history.map((count, idx) => {
                    return (
                        <li key={idx}>{count}</li>
                    )
                })}
            </ul>
        </div>
    );
}

const mapStateToProp = (state) => {

    return {history: state.counter.history}
}

export default connect(mapStateToProp, null)(History);