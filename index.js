//node Server to handle socket io connections
const io =require('socket.io')(8000)

const user ={};

io.on('connection',socket=>{
    socket.on('new-user-joined',userName=>{
        console.log('new-user-joined',userName)
        user[socket.id]=userName;
        socket.broadcast.emit('user-joined',userName);

    });

    socket.on('send',message=>{
        console.log(`${userName} sent ${message}` )
        socket.broadcast.emit('receive',{message:message,userName:user[socket.id]})
    });


})