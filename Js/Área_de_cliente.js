document.addEventListener('DOMContentLoaded', () => {
  const formularioPlan = document.querySelector('form[action="/seleccionar-plan"]');
  const formularioClub = document.querySelector('form[action="/seleccionar-club"]');
  const formularioIncidencia = document.querySelector('form[action="/incidencia"]');

  function club() {
    formularioClub.addEventListener('submit', function(evento) {
      evento.preventDefault();

      const ubicacion = document.querySelector('#ubicación');

      console.log(`Ubicación seleccionada: ${ubicacion.value}`);

      borrarDatos();
    });
  }

  function plan() {
    formularioPlan.addEventListener('submit', function(evento) {
      evento.preventDefault();

      const plan = document.querySelector('#plan');

      console.log(`Plan seleccionado: ${plan.value}`);

      borrarDatos();
    });
  }

  function incidencia() {
    formularioIncidencia.addEventListener('submit', function(evento) {
      evento.preventDefault();

      const incidencia = document.querySelector('#incidencia').value;

      console.log(`Incidencia reportada: ${incidencia}`);
    });
  }

  function borrarDatos() {
    const ubicacion = document.querySelector('#ubicación');
    const plan = document.querySelector('#plan');

    if (ubicacion) {
      ubicacion.value = '';
    }

    if (plan) {
      plan.value = '';
    }
  }

  document.querySelector('#plan-button').addEventListener('click', plan);
  document.querySelector('#ubicacion-button').addEventListener('click', club);
});