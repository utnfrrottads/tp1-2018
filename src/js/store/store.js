import {createStore, applyMiddleware} from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import allReducers from './../reducers';

const store = createStore(
    allReducers,
    applyMiddleware(apiMiddleware, logger, thunk)
);

export default store;
