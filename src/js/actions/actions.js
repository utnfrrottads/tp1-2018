import api from '../services/api';

export const SET_TEAMS = 'SET_TEAMS';
export const SET_GROUPS = 'SET_GROUPS';
export const SET_ROUNDS = 'SET_ROUNDS';

export const setRounds = (data) => {
    return {
        type: SET_ROUNDS,
        data
    };
};

export const setTeams = (data) => {
    return {
        type: SET_TEAMS,
        data
    };
};

export const setGroups = (data) => {
    return {
        type: SET_GROUPS,
        data
    };
};

export function getRounds() {
    return (dispatch) => {
        api.getRounds()
            .then((response) => {
                const { rounds } = response.data; 
                dispatch(setRounds(rounds));
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export function getTeams() {
    return (dispatch) => {
        api.getTeams()
            .then((response) => {
                const { teams } = response.data;
                dispatch(setTeams(teams));
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export function getGroups() {
    return (dispatch) => {
        api.getGroups()
            .then((response) => {
                const { groups } = response.data;
                dispatch(setGroups(groups));
            })
            .catch((error) => {
                console.log(error);
            });
    };

}
