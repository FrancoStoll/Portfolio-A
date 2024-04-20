const formulario = document.querySelector('#contacto');
const nombre = document.querySelector('input[name="nombre"]');
const email = document.querySelector('input[name="email"]');
const asunto = document.querySelector('input[name="asunto"]');

formulario.addEventListener('submit', enviarFormulario);

function enviarFormulario(e) {
  e.preventDefault();

  if ([nombre.value, email.value, asunto.value].includes('')) {
    return alert('Completa todos los campos');
  }

  return alert('Enviado');
}
