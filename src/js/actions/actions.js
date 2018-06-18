import api from '../services/api';

export const SET_TEAMS = 'SET_TEAMS';
export const SET_GROUPS = 'SET_GROUPS';

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
