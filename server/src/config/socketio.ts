import { Server } from 'socket.io'
import ChatService from '~/services/client/chat.service'
import axios from 'axios';
const configSocketIO = (server: any) => {
  const io = new Server(server, {
    cors: { origin: '*' }
  })

  // Event listener for new connections
  io.on('connection', (socket) => {
    console.log(socket.id, 'socket')
    // Chat
    socket.on('message', async (response: any) => {
      console.log(response, "response")
      if (!+response?.user?.userid) return
      try {
        const item = await ChatService.SaveAndGetMessage(response)
        socket.emit('message', item)
      } catch (error) {
        console.error('Error:', error)
      }
    })


    socket.on('room', async (roomid: number) => {
      console.log(+roomid, "roomid")
      const chatResponse = await ChatService.GetMessage(roomid)
      socket.emit('room', chatResponse)
    })
    // Event listener for 'disconnect' event
    socket.on('disconnect', () => {
      console.log('A user disconnected')
    })
  })
}

export default configSocketIO