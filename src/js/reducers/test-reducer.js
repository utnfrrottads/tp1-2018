/* eslint indent: off */
import _ from 'lodash';
import initialState from './initialState';

export default function (state = initialState.testReducer, action) {
    const newState = _.clone(state);

    switch (action.type) {
        case 'TEST_ACTION':
            newState.test = 'test';
            break;
    }

    return newState;
}
