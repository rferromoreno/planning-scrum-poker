const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const Room = require('./modules/room');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

const roomsList = new Map();

io.on('connection', function (socket) {
  console.log(`User ${socket.id} connected`);

  socket.on('room:create', (roomId) => {
    if (roomsList.has(roomId)) {
      socket.emit('error', { message: 'Error while creating room. Room already exists!' });
    } 
    const newRoom = new Room(roomId);
    newRoom.addUser({ id: socket.id, admin: true });
    roomsList.set(roomId, newRoom);
    console.log(`Room created by ${socket.id} with room ID ${roomId}`);
    socket.emit('room:created', { roomId });
  });

  socket.on('room:join', (roomId) => {
    if (!roomsList.has(roomId)) {
      socket.emit('error', { message: 'Error while joinin room. Room does not exist!' });
    }
    const room = roomsList.get(roomId);
    room.addUser({ id: socket.id });
    socket.emit('room:joined', { roomId }); // probably broadcast to all, with the list of users.
    console.log(`User ${socket.id} is joining room ${roomId}`)
  })

  socket.on('score:send', () => {

  });

  socket.on('score:reveal', () => {

  });

  socket.on('score:reset', () => {

  })

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected. Bella ciao!`);
  })
});

const PORT = process.env.PORT || 3001;

http.listen(PORT, function () {
  console.log(`Server started. Listening on port ${PORT}`);
});
