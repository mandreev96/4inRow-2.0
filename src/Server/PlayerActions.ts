export const room = [];

export function addPlayer(data) : void {
    room.push({
        name: data.name,
        color: data.color,
        ip: data.ip,
    });
}
