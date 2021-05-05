const PartFactory = require('./src/lib/Part')
const { Server } = require('ws')
const wss = new Server({ port: 3000 })

wss.on('connection', function connection(ws) {
    setInterval(() => { 
        const part = JSON.stringify(PartFactory.createRandomPart())
        console.log(part)
        ws.send(part)
    }, 2000)
})