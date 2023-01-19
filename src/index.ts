import { WebSocketServer, createWebSocketStream } from 'ws'
import commandPalette from './handlers/index'

const PORT = 8080
const options = { host: 'localhost', port: PORT }

const wss = new WebSocketServer(options, () => {
  console.log(
    `WebSocket Server started on ws://${options.host}:${options.port}`
  )
  console.log(options)
})

const runServer = () => {
  wss.on('connection', (ws) => {
    console.log(`Connected`)

    const stream = createWebSocketStream(ws, {
      encoding: 'utf8',
      decodeStrings: false,
    })

    stream.on('data', async (data) => {
      const [command, ...options] = data.toString().split(' ')

      try {
        const cmd = commandPalette[command]
        const result = await cmd(options.map((o: string) => parseInt(o, 10)))

        console.log('send: %s', command, result || '')

        stream.write(`${command} ${result}`)
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
