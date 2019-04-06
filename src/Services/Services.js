import axios from 'axios';

export default class Services {
    static getGameField() {
        return axios.get('http://localhost:3001/game')
            .then((response) => {console.log(response)});
    }
    static addPlayer(player) {
        return axios.post('http://localhost:3001/playerInformation', player)
            .then((response) => {console.log(response)});
    }
}
