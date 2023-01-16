import { WebSocketServer } from 'ws'
import commandPalette from './handlers/index'

const PORT = 8080

const wss = new WebSocketServer({ port: PORT }, () => {
  console.log(`WebSocket Server started on ws://localhost:${PORT}`)
})

const runServer = () => {
  wss.on('connection', (ws) => {
    console.log(`Connected`)

    ws.on('message', async (data) => {
      const [command, ...options] = data.toString().split(' ')

      try {
        const cmd = commandPalette[command]
        const result = await cmd(options.map((o) => parseInt(o, 10)))

        ws.send(`${command} ${result}`)
      } catch (e) {
        console.log(`Command not found: ${e}`)
      }
    })
  })
}

process.on('SIGINT', () => {
  console.log('WebSocket Server is stopped')
  wss.close()
  process.exit(1)
})

runServer()
