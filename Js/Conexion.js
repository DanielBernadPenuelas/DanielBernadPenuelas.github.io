

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'tudbhost',
  user: 'tuusuario',
  password: 'tupassword',
  database: 'tudatabase'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('¡Conexión a la base de datos exitosa!');
});

function consultaUsuario(usuario, contraseña, callback) {
  connection.query(`SELECT * FROM usuario WHERE usuario = '${usuario}' AND contraseña = '${contraseña}'`, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}


const express = require('express');
const bodyParser = require('body-parser');

const expr = express();
const PUERTO = process.env.PUERTO || 3000;

expr.use(bodyParser.urlencoded({ extended: true }));
expr.use(bodyParser.json());


expr.post('/login', (req, res) => {
  const { usuario, contraseña } = req.body;

  if (usuario === 'usuario' && contraseña === 'contraseña') {
    res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
  } else {
    res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }
});

expr.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
