const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: [ "GET","POST"]
    }
});

let APP_PORT=3000;

const users = {};

io.on('connection', (socket)=>{
    console.log('Socket Connected');
    socket.on('new-user-joined', name => {
        console.log('new user' , name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
        
    });

    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });

    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
})

server.listen(APP_PORT,()=>{
    console.log(`SERVER RUNNING ON PORT : ${APP_PORT}`);
});