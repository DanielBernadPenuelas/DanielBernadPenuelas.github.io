const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const app = express();
const server = require('http').createServer(app);
const io = new Server(server);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const PUERTO = process.env.PORT || 3000;
server.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
async function crearLowdb() {
  const lowdb = await import('lowdb');
  const FileSync = lowdb.default.FileSync;
  const adaptador = new FileSync('db.json');
  const db = lowdb(adaptador);
  return db;
}
io.on('connection', async (socket) => {
  console.log('Nuevo cliente conectado');
  const db = await crearLowdb();
  socket.on('mensaje_chat', (mensaje) => {
    console.log(`Mensaje recibido: ${mensaje}`);
    db.get('mensajes')
      .push({ texto: mensaje })
      .write();
    io.emit('mensaje_chat', mensaje);
  });
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});