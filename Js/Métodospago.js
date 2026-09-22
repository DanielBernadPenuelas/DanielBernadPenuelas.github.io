const sendData = async () => {
  const nombre = document.getElementById('nombre').value;
  const numero = document.getElementById('numero').value;
  const fecha = document.getElementById('fecha').value;
  const cvv = document.getElementById('cvv').value;

  try {
    const response = await fetch('http://localhost:3000/metodos-pago', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, numero, fecha, cvv })
    });

    if (response.ok) {
      console.log('Datos enviados correctamente');
    } else {
      console.error('Error al enviar datos');
    }
  } catch (error) {
    console.error('Error de conexión:', error);
  }
};

document.getElementById('enviar').addEventListener('click', sendData);