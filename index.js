const { generateRandomPart } = require('./src/RandomPartGenerator.js');
const { Server } = require('ws');
const wss = new Server({ port: 3000 })

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    setInterval(() => ws.send(JSON.stringify(generateRandomPart())), 2000)
});