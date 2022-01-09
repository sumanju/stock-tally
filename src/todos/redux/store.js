import { createStore, combineReducers } from 'redux';
import { todos } from './reducer'

const reducer = {
    todos,
}

const rootReducer = combineReducers(reducer);
export const configureStore = () => createStore(rootReducer);