const PartFactory = require('./src/lib/Part')
const { Server } = require('ws')
const wss = new Server({ port: 3000 })

wss.on('connection', function connection(ws) {
    setInterval(() => ws.send(JSON.stringify(PartFactory.createRandomPart())), 2000)
})