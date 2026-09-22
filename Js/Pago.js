const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let precio = 0;

app.post('/seleccionar-plan', (req, res) => {
  const plan = req.body.plan;
  switch (plan) {
    case 'inscripcion-normal':
      precio = 40;
      break;
    case 'plan-premium-cocina':
      precio = 60;
      break;
    case 'plan-premium-nutricion':
      precio = 50;
      break;
    case 'plan-premium-cocina-y-nutricion':
      precio = 65;
      break;
    default:
      precio = 0;
  }
  res.send(`Usted va a pagar ${precio}€`);
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});