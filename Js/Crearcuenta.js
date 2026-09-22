const formulario = document.querySelector('form');
const inputCorreo = document.querySelector('#correo');
const inputContraseña = document.querySelector('#contraseña');
const inputDireccion = document.querySelector('#dirección');
const inputCodigoPostal = document.querySelector('#codigoPostal');
const inputPais = document.querySelector('#pais');
const inputCiudad = document.querySelector('#ciudad');
const inputAceptarTerminos = document.querySelector('#aceptarTerminos');

function guardarDatos() {
  const datos = {
    correo: inputCorreo.value,
    contraseña: inputContraseña.value,
    dirección: inputDireccion.value,
    códigoPostal: inputCodigoPostal.value,
    país: inputPais.value,
    ciudad: inputCiudad.value,
    términos: inputAceptarTerminos.checked
  };

  console.log(datos);
  fetch('http://localhost:3000/registro', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error(error));
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  guardarDatos();
});