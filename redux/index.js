import {combineReducers} from 'redux';
import appReducer from './reducers';


const rootReducer = combineReducers({
   apps:appReducer
});

export default rootReducer;
