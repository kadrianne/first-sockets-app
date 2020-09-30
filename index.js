const express = require('express')
const app = express()
const http = require('http')
const httpApp = http.createServer(app)
const socketIO = require('socket.io')
const io = socketIO(httpApp)

io.on('connection', socket => {
    console.log('Someone connected')
    socket.on('message', message => {
        socket.broadcast.emit('message', message)
    })
})

httpApp.listen(3000)