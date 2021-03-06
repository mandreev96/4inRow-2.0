import express = require("express");
import http = require("http");
import socketIO = require("socket.io");
import cors = require("cors");
import bodyParser = require("body-parser");
import {addPlayer} from "./PlayerActions";
import {gameField} from './FieldActions';
import EasyBot from './EasyBot';

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(cors());
app.use(bodyParser.json());

server.listen(3001, () => {
    console.log('node start');
});

io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

app.post('/addPlayer', async (req, res) => {
    console.log(req.body);
    const player = generatePlayer(req.body);
    addPendingPlayer(player, req.body.gameType);
    res.send(player);
});

function generateID() {
    return `f${(+new Date).toString(Math.floor(Math.random() * (16 - 9)) + 9)}`
}


function generatePlayer(body) {
    return {
        name: body.name,
        color: body.color,
        id: generateID(),
    }
}

function addPendingPlayer(player : any, gameType : string) {
    if (gameType === SINGLE_PLAYER) {
        pendingSinglePlayer.push(player);
    }
    if (gameType === MULTIPLAYER) {
        pendingMultyPlayer.push(player);
    }
}

const SINGLE_PLAYER = 'SINGLE_PLAYER';
const MULTIPLAYER = 'MULTIPLAYER';

const pendingSinglePlayer = [];
const pendingMultyPlayer = [];
