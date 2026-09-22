const mysql = require('mysql');
const usuario = document.querySelector('#usuario');
const inputContraseña = document.querySelector('#contraseña');
const connection = mysql.createConnection({
  host: 'tudbhost',
  user: 'tuusuario',
  password: 'tupassword',
  database: 'tudatabase',
  port: 3000
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