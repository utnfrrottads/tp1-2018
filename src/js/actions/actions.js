import api from '../services/api';

export const SET_TEAMS = 'SET_TEAMS';

export const setTeams = (data) => {
    return {
        type: SET_TEAMS,
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
