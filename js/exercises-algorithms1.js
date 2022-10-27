/* console.log("Today Work"); */

//Ejercicio 1
/* const d = new Date();
let month = d.getMonth();
let year = d.getFullYear();
let days = new Date(year, month+1, 0);
console.log(days.getDate());  */

//Le indicas 0 en el parámetro de días al constructor, lo interpreta como "el día anterior al 1" es decir el último día del mes pasado. Por otro lado el constructor de Date usa los números del 0 al 11 para los meses, entonces si quiero el número de días de febrero le paso 2.
/* var d = new Date(2022,10,0);
console.log(d.getDate()); */

//Ejercicio 2
/* 
let monthName = prompt("Please, write the chosen month.").toLowerCase();
switch (monthName) {
  case "january":
    console.log("January has 31 days");
    break;
  case "february":
    console.log("February has 28 days");
    break;
  case "march":
    console.log("March has 31 days");
    break;
  case "april":
    console.log("April has 30 days");
    break;
  case "may":
    console.log("May has 31 days");
    break;
  case "june":
    console.log("June has 30 days");
    break;
  case "july":
    console.log("July has 31 days");
    break;
  case "august":
    console.log("August has 31 days");
    break;
  case "september":
    console.log("September has 30 days");
    break;
  case "october":
    console.log("October has 31 days");
    break;
  case "november":
    console.log("November has 30 days");
    break;
  case "december":
    console.log("December has 31 days");
    break;
  default:
    console.log("That’s not a real month!");
    break;
}  */

/* //Ejercicio 3
let weather;
do {
  weather = prompt("What temperature is it?").trim();
  if (weather == "" || isNaN(weather)) {
    console.log("Please, write a valid temperature");
  }
} while (weather == "" || isNaN(parseInt(weather)));
// console.log(typeof weather);
// console.log(weather == "");
if (weather < 15) {
  alert("Warm up");
} else if (weather >= 15 && weather <= 25) {
  alert("Enjoy the weather!");
} else {
  alert("Cool down");
} */

//Ejercicio 4
/* let isGreen = true;
let counter = 0;
let timer = setInterval(() => {
  if (isGreen) {
    console.log("Croos the road");
  } else {
    console.log("Please await");
  }

  isGreen = !isGreen;
  if (counter++ == 4) {
    clearInterval(timer);
  }
}, 3000); */

//Ejercicio 5

/* let temperature ="Boling point"; //Probamos todas las temperaturas

switch (temperature) {
  case "Absolute Zero":
    console.log(-273.15 * 1.8 + 32);
    break;
  case "Freezing point":
    console.log(0 * 1.8 + 32);
    break;
  case "Body Temperature":
    console.log(37 * 1.8 + 32);
    break;
  case "Boling point":
    console.log(100 * 1.8 + 32);
    break;
  default:
    console.log("Enter a correct temperature");
    break;
} */

//Ejercicio 6
/* let email = prompt("Introduzca su email");
let password = prompt("Introduzca su contraseña");
if (email == "tolkien@lordofrings.com" && password == "aNBR6ZeWPY") {
  console.log("Welcome Mr.Tolkien");
} else {(email != "tolkielordofrings.com" && password != "aNBR6ZeWPY")
  console.log("Wrong password or email");
} */

//Ejercicio 7
/* let money = prompt("Please, enter your amount.").trim();
money = parseInt(money); */
/* let amount = 100;
let divisa = "yen"; //Probamos con cada moneda
switch (divisa) {
  case "dolar":
    console.log(amount * 0.97);
    break;
  case "yen":
    console.log(amount * 141.29);
    break;
  case "libra":
    console.log(amount * 0.88);
    break;
  case "franco":
    console.log(amount * 0.97);
    break;
   default:
    console.log("Choose another currency");
    break; 
} */

//Ejercicio 8
/* let num1 = parseFloat(prompt("Introduzca primer numero"));
let num2 = parseFloat(prompt("Introduzca segundo numero"));
let operador = prompt(
  "Introduzca operación a realizar (sumar, restar, multi, dividir)"
);

if (operador == "sumar") {
  console.log(num1 + num2);
} else if (operador == "restar") {
  console.log(num1 - num2);
} else if (operador == "multi") {
  console.log(num1 * num2);
} else {
  console.log(num1 / num2);
}
//Ejercicio 9
// Pedirle a usuario que indique su  documento
let doc = prompt("Enter your DNI or NIE").toLowerCase();
// centinela que nos informa si es o no un DNI
let isDNI = true;
// centinela que registra si es o no un documento válido
let validDocument = true;
// Comprobamos si se trata de un NIE
if (doc.charCodeAt(0) == 116 || doc.charCodeAt(0) == 120) {
  // si empieza por t o x, no es un DNI
  isDNI = false;
}
// En el caso de que sea un DNI, comprobamos su validez
if (isDNI) {
  // Este bucle va a repetirse tantas veces como letras tenga el string
  for (let index = 0; index < doc.length; index++) {
    // si estamos comprobando los 8 primeros elementos
    if (index <= 7) {
      // Buscamos que sean números
      if (doc.charCodeAt(index) < 48 || doc.charCodeAt(index) > 57) {
        // si alguno no lo fuera, marcamos el documento como no válido
        validDocument = false;
      }
      // aquí comprobamos la letra
    } else {
      // si no coincide con el rango de minúsculas
      if (doc.charCodeAt(index) < 97 || doc.charCodeAt(index) > 122) {
        // marcamos el documento como no válido
        validDocument = false;
      }
    }
  }
  // si llega aquí, es por que se trata de un NIE
} else {
  // empezamos en el segundo elemento, por que ya hemos comprobado el primero
  for (let index = 1; index < doc.length; index++) {
    // comprobamos la parte numérica
    if (index <= 7) {
      if (doc.charCodeAt(index) < 48 || doc.charCodeAt(index) > 57) {
        validDocument = false;
      }
      // aquí se comprueba la letra del final
    } else {
      if (doc.charCodeAt(index) < 97 || doc.charCodeAt(index) > 122) {
        validDocument = false;
      }
    }
  }
}
// si en este punto es un documento válido
// y es un DNI
if (validDocument && isDNI) {
  // lo confirmamos desde consola
  console.log("It is a valid DNI");
  //si llega aquí es por que el documento es válido
  // pero se trata de un NIE
} else if (validDocument) {
  console.log("It is a valid NIE");
  // si llega aquí, es que no es un documento válido
} else {
  console.log("not a valid document");
} */

//Ejercicio 10
/* let min = 1;
let max = 6;
let player1 = Math.floor(Math.random() * (max - min + 1) ) + min;
let player2 = Math.floor(Math.random() * (max - min + 1) ) + min;
 */
//hora video 3:25s
