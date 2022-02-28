import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import loginReducer from './RLoginReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  login: loginReducer
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;