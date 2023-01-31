import { combineReducers, legacy_createStore as createStore } from 'redux';
import colorReducer from './reducer/colorReducer';

const store = createStore(combineReducers({ colorReducer }));

export default store;
