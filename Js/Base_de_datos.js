
const sqlite3 = require('sqlite3').verbose();

const FUENTE_DB = "db.sqlite";

const db = new sqlite3.Database(FUENTE_DB, (err) => {
  if (err) {
    console.error("Error abriendo la base de datos:", err.message);
  } else {
    console.log("Conectado a la base de datos SQLite.");

    db.run(`CREATE TABLE IF NOT EXISTS metodospagos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            numero NUMBER,
            fecha DATE,
            cvv TEXT
        )`, (err) => {
      if (err) {
        console.error("Error creando la tabla de pagos:", err.message);
      } else {
        console.log("Tabla de pagos creada exitosamente.");
      }
    });
  }
  if (err) {
    console.error("Error abriendo la base de datos:", err.message);
  } else {
    console.log("Conectado a la base de datos SQLite.");

    db.run(`CREATE TABLE IF NOT EXISTS crearcuenta (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            correo TEXT,
            contraseña TEXT,
            direccion TEXT,
            código_postal TEXT,
            Pais TEXT,
            Ciudad TEXT
        );`, (err) => {
      if (err) {
        console.error("Error creando la tabla de crear_cuenta:", err.message);
      } else {
        console.log("Tabla de crear_cuenta creada exitosamente.");
      }
    });
  }
});

document.getElementById('registro').addEventListener('submit', async (event) => {
  event.preventDefault();

  const contraseña = document.getElementById('contraseña').value;
  const dirección = document.getElementById('dirección').value;

  try {
      const response = await fetch('/guardar-usuario', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ contraseña, dirección })
      });

      if (response.ok) {
          console.log('Usuario registrado correctamente');
      } else {
          console.error('Error al registrar el usuario');
      }
  } catch (error) {
      console.error('Error de conexión:', error);
  }
});

expr.post('/login', (req, res) => {
  const { usuario, contraseña } = req.body;

  consultarUsuario(usuario, contraseña)
   .then((row) => {
      if (row) {
        res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }
    })
   .catch((err) => {
      console.error(err);
      res.status(500).json({ mensaje: 'Error al consultar la base de datos' });
    });
});

module.exports = db;