require('dotenv').config();

const express = require('express')
const morgan = require('morgan')
const cors = require('./middlewares/cors')
const SocketIO = require('socket.io')
require('./config/database')

const app = express()

//
app.use(morgan('dev'))
app.use(cors)
app.use(express.json())

// Settings
app.set('PORT', process.env.PORT || 4000)

// Inicializamos el servidor
const server = app.listen(app.get('PORT'), () => {
  console.log('Server on port', app.get('PORT'))
})

// Inicialización de Sockets

const io = SocketIO(server)

app.use((req, res, next) => {
  req.io = io
  next() 
})

// Obtener conexiones de Sockets
io.on('connection', (socket) => {
  console.log('New connection', socket.id)
})

// Rutas

app.use('/messages', require('./routes/messages'))
app.use('/users', require('./routes/users'))