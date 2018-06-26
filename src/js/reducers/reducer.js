/* eslint indent: off */
import * as types from '../actions/actions';

const INITIAL_STATE = {
    teams: [],
    groups: [],
    rounds: []
};

export default function (state = INITIAL_STATE, action) {
    const newState = { ...state };

    switch (action.type) {
        case types.SET_TEAMS:
            newState.teams = action.data;
            break;
        case types.SET_GROUPS:
            newState.groups = action.data;
            break;
        case types.SET_ROUNDS:
            newState.rounds = action.data;
            break;
    }

    return newState;
}
