import { combineReducers } from 'redux';
import counter from '../reducers/counter';


//HERE WE COMBINE ALL OF OUR REDUCERS
//INTO A SINGLE OBJECT VIA COMBINEREDUCERS
export default rootReducers = combineReducers({counter: counter});