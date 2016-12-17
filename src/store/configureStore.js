import { createStore, combineReducer } from 'redux';

import counterReducer from '../reducers/counterReducer';

const rootReducer = combineReducers ({
        counterReducer
})

export default createStore(rootReducer);