import axios from 'axios';
import {GAME_TYPE} from "../constants";

export default class Services {
    static getGameField() {
        return axios.get('http://localhost:3001/game')
            .then((response) => {console.log(response)});
    }
    static addToSinglePlayer(name, color, difficulty) {
        const data = {
            name,
            color,
            mode: {
                mode: GAME_TYPE.SINGLE_PLAYER,
                difficulty,
            },
        };
        return axios.post('http://localhost:3001/addPlayer', data)
            .then((response) => Promise.resolve(response.data))
            .catch((reject) => Promise.reject(reject));
    }
    static move(indexColumn) {
        const data = {
            indexColumn,
        };
        return axios.post('http://localhost:3001/move', data)
            .then((response) => Promise.resolve(response.data))
            .catch((resolve) => Promise.reject(resolve));
    }


    static addToMultiplayer(name, color, mode) {
        const data = {
            name,
            color,
            mode: {
                mode,
            },
        };
        return axios.post('http://localhost:3001/addPlayer', data)
            .then((response) => console.log(response.data))
            .catch((reject) => console.log(reject));
    }
}
