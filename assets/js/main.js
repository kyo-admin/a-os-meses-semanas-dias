// 2.Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el

// El resultado debe ser 1 año, 1 semana y 1 día.
// Se debe considerar lo siguiente:
// 1 año tiene 365 días
// 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.

// Pedimos al usuario que ingrese la cantidad de días a convertir
var cantidadDias = prompt("Ingrese la cantidad de días a convertir:");

// Validamos que el valor ingresado sea un número
while (isNaN(cantidadDias) || cantidadDias < 0) {
  // Si el valor ingresado no es un número, mostramos un mensaje de error en la consola
  var cantidadDias = prompt("Por favor, ingrese un valor numérico. Ingrese la cantidad de días a convertir:");
} 
  // Si el valor ingresado es un número, realizamos los cálculos correspondientes
  let años = Math.floor(cantidadDias / 365);
  let diasRestantes = cantidadDias % 365;
  let meses = Math.floor(diasRestantes / 30);
  diasRestantes = diasRestantes % 30;
  let semanas = Math.floor(diasRestantes / 7);
  diasRestantes = diasRestantes % 7;

  // Mostramos el resultado en la consola, con una descripción de cada unidad de tiempo
  console.log(años + " años, " + meses + " meses, " + semanas + " semanas y " + diasRestantes + " días.");
  alert(años + " años, " + meses + " meses, " + semanas + " semanas y " + diasRestantes + " días.");

