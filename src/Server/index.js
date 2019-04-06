"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var socketIO = require("socket.io");
var cors = require("cors");
var bodyParser = require("body-parser");
var FieldActions_1 = require("./FieldActions");
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(cors());
app.use(bodyParser.json());
server.listen(3001, function () {
    console.log('node start');
});
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
app.get('/game', function (req, res) {
    res.send(FieldActions_1.gameField);
});
app.post('/playerInformation', function (req, res) {
    console.log(req.body);
    var player = generatePlayer(req.body);
    addPendingPlayer(player, req.body.gameType);
    res.send(player);
});
function generateID() {
    return "f" + (+new Date).toString(Math.floor(Math.random() * (16 - 9)) + 9);
}
function addPendingPlayer(player, gameType) {
    if (gameType === SINGLE_PLAYER) {
        pendingSinglePlayer.push(player);
    }
    if (gameType === MULTIPLAYER) {
        pendingMultyPlayer.push(player);
    }
}
function generatePlayer(body) {
    return {
        name: body.name,
        color: body.color,
        id: generateID()
    };
}
var SINGLE_PLAYER = 'SINGLE_PLAYER';
var MULTIPLAYER = 'MULTIPLAYER';
var pendingSinglePlayer = [];
var pendingMultyPlayer = [];
