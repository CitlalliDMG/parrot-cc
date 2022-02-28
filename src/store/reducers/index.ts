import { combineReducers } from 'redux';
import loginReducer from './RLoginReducer';

const rootReducer = combineReducers({
  login: loginReducer
});

export default rootReducer;