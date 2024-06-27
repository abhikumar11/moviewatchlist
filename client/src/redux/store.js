
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import movieReducer from './reducer';


const rootReducer = combineReducers({
  movie:movieReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
