import axios from 'axios';

axios.defaults.baseURL = 'https://raw.githubusercontent.com/sanchezjuanmanuel93/tp1-2018/master/api/';

export default class {
    static getTeams() { return axios.get('/worldcup.teams.json'); }
}