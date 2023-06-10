const plazoElement = document.getElementById('plazo');
const fechaElement = document.getElementById('fecha');

// Función para obtener la fecha actual en el formato "DD/MM/YYYY"
function getCurrentDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

// Función para obtener la cantidad de días restantes hasta la fecha límite de inscripción
function getDaysRemaining() {
  const now = new Date();
  const deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 20);
  const differenceInTime = deadline.getTime() - now.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
 return `${differenceInDays} días`;}

// Actualizar la cantidad de días restantes y la fecha actual en la carta informativa
function updateDates() {
  plazoElement.textContent = getDaysRemaining();
  fechaElement.textContent = getCurrentDate();
}

// Ejecutar la función de actualización de fechas al cargar la página
document.addEventListener('DOMContentLoaded', updateDates);
