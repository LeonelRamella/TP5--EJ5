let tiempoInicio = 0;
let intervalo;
let estaPausado = false;
function iniciarCronometro() {
  if (!intervalo) {
    tiempoInicio = Date.now() - tiempoInicio;
    intervalo = setInterval(actualizarCronometro, 10);
  }
  estaPausado = false;
}
function pausarCronometro() {
  clearInterval(intervalo);
  intervalo = null;
  estaPausado = true;
}
function resetearCronometro() {
  clearInterval(intervalo);
  intervalo = null;
  tiempoInicio = 0;
  document.getElementById("tiempo").innerText = "00:00:00";
  estaPausado = false;
}
function actualizarCronometro() {
  if (!estaPausado) {
    const tiempoActual = Date.now() - tiempoInicio;
    const horas = Math.floor(tiempoActual / 3600000);
    const minutos = Math.floor((tiempoActual % 3600000) / 60000);
    const segundos = Math.floor((tiempoActual % 60000) / 1000);
    const milisegundos = Math.floor(tiempoActual % 1000);

    const tiempoFormateado = `${('0' + horas).slice(-2)}:${('0' + minutos).slice(-2)}:${('0' + segundos).slice(-2)}`;
    document.getElementById("tiempo").innerText = tiempoFormateado;
  }
}
resetearCronometro();