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
/* function addZero(time){
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
dayGreeting(); */

//Ejercicio 3
//Objeto con los hexadecimales
/* let hexa = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

// array de 10 posiciones para guardar los códigos hexadecimales
let randomHexaCollection = [];
// string para guardar el código hexadecimal
let randomHexa = "#";

// función que genera un número aleatorio entre 0 y 15 y te lo devuelve
let random = () => {
  return Math.floor(Math.random() * 16);
};

// Bucle que genera 10 códigos hexadecimales aleatorios y los guarda en el array
for (let i = 0; i < 10; i++) {
  randomHexa = "#";
  for (let j = 0; j < 6; j++) {
    randomHexa += hexa[random()];
  }
  randomHexaCollection.push(randomHexa);
}

// bucle que recorre el array y escribe en la consola "Hello world! del color aleatorio generado"
for (let i = 0; i < randomHexaCollection.length; i++) {
  console.log(randomHexaCollection[i]);
  console.log("%cHello World", `color:${randomHexaCollection[i]}`);
} */

/* //Ejercicio 6
function exerciese36() {
let phrases = [
    "En los bares, algunas veces la gente dice cosas, y otras veces es el whisky hablando. Es difícil discernir quién habla.",
    "Odiamos a la gente, y a cambio ellos nos odian y nos temen.",
    "Las mentiras se esparcen más rápido que la verdad.",
    "¿Qué te hizo pensar que me iría a la cama contigo después de un whisky y una conversación ligera?",
    "De todos modos, somos Peaky Blinders.",
    "En los bares, algunas veces la gente dice cosas, y otras veces es el whisky hablando. Es difícil discernir quién habla.",
    "Para asegurarte de que tu perro te obedece, debes mostrarle el palo de vez en cuando.",
    "No hay descanso para mí en este mundo. Tal vez en el siguiente.",
    "Nadie trabaja conmigo. La gente trabaja para mí.",
    "Cuando ya estás muerto, eres libre. ",
    "Como un hombre honorable, no como un jodido ciudadano que no comprende la retorcida manera en la que funciona nuestro mundo, amigo.",
    "Un buen hombre a veces necesita aguantarse.",
    "Tienes que ser tan malo como los de arriba para sobrevivir. ",
    "No te metas con los Peaky Blinders.",
    "Uno ataca cuando el enemigo está débil.",
    "Conozco caminos de regreso que tardan una eternidad.",
    "Puedes cambiar lo que haces, pero no puedes cambiar lo que quieres.",
    "Sólo hay una cosa que puede cegar a un hombre tan inteligente como tú, Tommy. El amor.",
    "Por orden de los putos Peaky Blinders.",
    "Si te disculpas una vez, lo harás una y otra vez. Es como quitarle ladrillos a la pared de tu jodida casa.",
  ];
  function randomPhrases() {
  let random = Math.floor(Math.random() * 20);
    console.log(phrases[random]);
  }  
  let time = setInterval (randomPhrases, 10000);
  setTimeout(() => {
    clearInterval(time)
  }, 120000);
}
exerciese36 ();  */

//Ejercicio 7: Escribe un programa que genera 100 números aleatorios, entre 0 y 500, y los almacena en un array.
//A continuación filtra todos los números impares, ordenando los pares de mayor a menor.
function exercise37() {
  let numb = [];
  let min = 0;
  let max = 500;

  for (let i = 0; i < 100; i++) {
    numb.push(Math.floor(Math.random() * (max - min) + min));
  }
  console.log(numb);
  let pares = numb.filter((x) => x % 2 == 0);
  let counter = 0;
  pares.sort(function (value1, value2) {
    counter++;
    return value2 - value1;
  });
  console.log(`Los numeros pares son: ${pares}`);
}
exercise37();

/* function ejercicio7_3() {
  let min = 0;
  let max = 500;
  let setNumber = [];
  let number = Math.floor(Math.random() * (max - min)) + min;
  for (let i = 0; i < 100; i++) {
    setNumber.push(Math.floor(Math.random() * (max - min)) + min);
  }

  console.log(setNumber);

  let pares = setNumber.filter((x) => x % 2 == 0);

  let counter = 0;
  pares.sort(function (value1, value2) {
    counter++;
    return value2 - value1;
  });
  console.log(`Los números pares son: ${pares}`);
}
ejercicio7_3() */
