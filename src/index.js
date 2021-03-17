import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './component/App';
import rootReducers from './redux/reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducers, composeWithDevTools());

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);  