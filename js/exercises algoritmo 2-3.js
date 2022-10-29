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
/* function colorRandom() {
let hexadecimal = "";
let message = "Hello World!";
for (let i = 0; i < 10; i++) {
  let colorRandom = ;
  
} */
  

/* function getRandomColor() {
  let colores = [];
  let num=(Math.floor(Math.random()*10).toString(10));
  let letters = ['0','F',num];
  let color = '#';
  
  for (let i = 0; i < 10; i++ ) {
      let pos=Math.floor(Math.random() * letters.length);
      color += letters[pos];
      letters.splice(pos,1);
  }
  
  //para evitar que se repitan colores 
  if(colores.includes(color))
    return getRandomColor();
  else
    colores.push(color)
   return color;
} 
getRandomColor() */
let ex3Alg3 = function () {
  const hello = "Hello world";
  let colors = [];

  for (let index = 0; index < 10; index++) {
    function colorGenerator() {
      //Generate random hex code
      let color =
        "#" +
        Math.floor(Math.random() * 2 ** 24)
          .toString(16) //Hex code with 16 characters
          .padStart(0, 6); //Take only first 6  characters
      return color;
    }
    let randomColor = colorGenerator();
    do {
      //Exclude repetition
      randomColor = colorGenerator();
    } while (colors.includes(randomColor));
    colors[index] = randomColor;
  }

  for (let i = 0; i < colors.length; i++) {
    console.log(`HEX-CODE:${colors[i]}`);
    console.log(
      `%c ${hello} `,
      `font-weight:bold; font-size: 20px;color: ${colors[i]}`
    );
  }
};

//ex3Alg3();
//Objeto con los hexadecimales
let hexa = {
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
let random =  () => {
  return Math.floor(Math.random() * 16);
};


// Bucla que genera 10 códigos hexadecimales aleatorios y los guarda en el array
for(let i = 0; i < 10; i++){
  randomHexa = "#";
  for(let j = 0; j < 6; j++){
    randomHexa += hexa[random()];
  }
  randomHexaCollection.push(randomHexa);
}

// bucle que recorre el array y escribe en la consola "Hello world! del color aleatorio generado"
for(let i = 0; i < randomHexaCollection.length; i++){
  console.log(randomHexaCollection[i]);
  console.log("%cHello World" , `color:${randomHexaCollection[i]}`);
};

