"use strict";
exports.__esModule = true;
exports.room = [];
function addPlayer(data) {
    exports.room.push({
        name: data.name,
        color: data.color,
        ip: data.ip
    });
}
exports.addPlayer = addPlayer;
