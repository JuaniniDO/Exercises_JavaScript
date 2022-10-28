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
/* function exercise4(temperature) {
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

exercise4(temperature); */

// Ejercicios logaritmo 3
//Ejercicio 1
/* function exercise31() {
  let min = parseInt(prompt("Enter min limit (Number)"));
  let max = parseInt(prompt("Enter max limit (Number)"));
  let n = Array();
  let minValue = "";
  let maxValue = "";
  for (let i = 0; i < 20; i++) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    n.push(number);

    if (maxValue < number) {
      maxValue = number;
    }
    if (minValue === "" || minValue > number) {
      minValue = number;
    }
  }
  console.log(n);
  console.log("Min value: " + minValue);
  console.log("Max value: " + maxValue);
}
exercise31();  */

//Ejercicio 2
function addZero(time){
  if(time < 10){
    return '0'+time;
  }
  return time;
}
function dayGreeting() {
  let time = new Date()
  let name = prompt("Add your name");
  let hour = addZero(time.getHours());
  let minutes = addZero(time.getMinutes());
  console.log(hour+ ":"+ minutes);
  if (time < 12) {
    alert("Good Morning " + name + "!");
  } else if (time < 18) {
    alert("Good Afternoon " + name+ "!");
  } else {
    alert("Good Evening " + name+ "!");
  }
};
dayGreeting()