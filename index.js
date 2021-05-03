const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send(JSON.stringify(control1));
});

let control1 = {
    type: 1,
    dev: 1,
    devOutTotal: 1
}

let control2 = {
    type: 2,
    dev: 2,
    devOutTotal: 2
}

let control3 = {
    type: 3,
    dev: 3,
    devOutTotal: 3
}

let part = {
    name: "Part A",
    features: [
        {
            name: "feature 1",
            controls: [control1, control2]
        },
        {
            name: "feature 2",
            controls: [control3]
        }
    ]
}



console.log(part)