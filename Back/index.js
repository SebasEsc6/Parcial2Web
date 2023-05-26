const http = require('http');
const express = require('express')

const server = http.createServer();
const app = express();

app.use('/api/messages', require('./routes/messaje'))

const io = require('socket.io')(server, 
    {cors: {origin: '*' }
});

io.on('connection', (socket) => {
    console.log('Conectadito')

    socket.broadcast.emit('mensaje', {
        usuario: 'Aviso',
        mensaje: 'Se ha conectado una persona'
      });

    socket.on('mensaje', (data) => {
        io.emit('mensaje', data);
    })
});

server.listen(4000);