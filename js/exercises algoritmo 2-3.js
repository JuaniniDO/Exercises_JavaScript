// Ejercicios logaritmo 2
//Ejercicio 1
/* let palindrome = "palindrome";
let split = palindrome.split("");
console.log(split);
for (let index = 0; index < split.length; index++) {
  console.log(`letra ${index + 1}: ${split[index]}`);
} */

//Ejercicio 3
/* const exercise3 = () => {
  let result = "";
  let rows = 4;
  let columns = 4;
  for (let index = 0; index < rows; index++) {
      for (let index = 0; index < columns; index++) {
        result += "*";        
      }
    result += "\n";
  }
  console.log(result);
};
exercise3();
 */
//Ejercicio 4
function exercise4(temperature) {
  let i = 0,
    summ = 0,
    ArrayLen = temperature.length;
  while (i < ArrayLen) {
    summ = summ + temperature[i++];
  }
  return Math.round(summ / ArrayLen); // redondear numero entero
}
let temperature = [25, 29, 27, 24, 28, 29, 30];
let temperatureAverage = exercise4(temperature);
console.log("La temperatura media fue de: " + temperatureAverage);

exercise4(temperature);
