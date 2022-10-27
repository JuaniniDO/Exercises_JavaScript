// //Determinar el tipo de dato y valor de las variables
// // Caso a
// let variable = 883 < 542;
// console.log("a)tipo:",typeof variable, "valor:", variable);
// //Caso b
// variable  = 17 / 5;
// console.log("b)tipo:",typeof variable, "valor:", variable);

/* let totalBet = prompt("please enter your bet");
/* console.log(totalBet); */

/* if (totalBet == 5000) {
  alert("all-inn!");
} else if (totalBet < 5000){ 
  alert("passing this round!");
} else{
    alert("wrong bet, try again");
    totalBet = prompt("please enter your bet");
} */
/*  let number = 10;
 while (number > 0){
  number--;
  console.log(number);
 }

 // Generating mmultiplication tables
for (let number = 1; number <= 10; number++) {
  console.log("Tabla del: ", number);
  console.log("------------------");

  let multi = 1;
  while (multi <= 10) {
    console.log(number, "x", multi, "=", number * multi);
    multi++;
  }

  console.log("------------------");
} */

//1:20 horas clase viernes
/* for (
  let counter = 0, limit = 100;
  counter <= limit;
  counter++, limit--
) {
  console.log(counter, " - ", limit);
}
//Clase con continue 1:35 horas viernes
let counter = 1;
while (counter++ <= 100) {
  if (counter % 2 != 0) {
    continue;
    console.log("Hello world!!");
  }
  console.log(counter);
} */
//Clase 11/10
/* let option = null; //ausencia de valor
let colors = ["red", "green", "blue"];

do {
  console.log("Please, choose a color");
  for (let index = 0; index < colors.length; index++) {
    console.log(index + 1 + "." + colors[index]);
  }
  console.log("Press 0 to leave");
  option = prompt("Make your choice");
  switch (option) {
    case "1":
      console.log("Hex  code for red: #FF0000"); //mirar añadir color mensaje
      break;
    case "2":
      console.log("Hex  code for green: #008000");
      break;
    case "3":
      console.log("Hex  code for blue: #0000FF");
      break;

    default:
      if (option != 0) {
        console.warn("Not a valid option, please try again");
      } else {
        console.log("Exiting, see  you soon!");
      }
      break;
  }
} while (option != 0 && option != null); */

/* let star = {
  name: "Polaris",
  constellation: "Ursa Minor",
  type: "Double/Cepheid",
  spectralClass:"F7",
  mag: 2.0,
  "":  "acceptable",
}
console.log(star.name);
star.constellation = "Ursa Major"
console.log(star.constellation);

let num1 = 4;
let num2 = num1;
console.log(num2);
num2 = 7;
console.log(num1);
console.log(num2);

let star2 = star;
star2.name = "Mizar";
star2.mag = 5.7;

console.log(star.name);
console.log(star2.name);
console.log(star[""]); */

/* let hero = {
  character: "Iron Man",
  name: "Tony Stark",
  powers: [
    "Genius-leve intellect",
    "Multiple powered armor suits",
    "Ability to fly",
  ],
  info: {
    yearCreated: 1963,
    powerOrigin: "From his suit",
    weapons: ["repulsor rays", "uni-beam projector", "lasers"],
    didYouKnow:
      "Tony Stark created and built one of the Spidear-Man´s upgraded suits known as the Iron Spider Suit. We got a smoll glimpse of it in Spider-Man: Homecoming! ",
  },
};

let hero2 = new Object(); // Es lo mismo que let hero2 = { }
hero2.character = "Hulk";
hero2.name = "Bruce Banner";
hero2.powers = [
  "strenght",
  "speed",
  "stamina",
  "durability",
  "regeneration",
  "night invulnerability",
  "breathing underwater",
];
console.log(Object.keys(hero2))
console.log(Object.keys(hero))
 */

//Ejercicio página 42, mirar video sobre 2:50 horas con solución Dani
/* let shoppingCart = {
  product1: {
    id: 0,
    name: "Nike Air Zoom Pegasus 38",
    price: 80.95,
    quantity: 2,
  },
  product2: {
    id: 1,
    name: "Nike Air Zoom Pegasus 38",
    price: 92.5,
    quantity: 2,
  },
  product3: {
    id: 3,
    name: "Air Jordan",
    price: 106.95,
    quantity: 1,
  },
  product4: {
    id: 4,
    name: "Adidas Zero",
    price: 75.95,
    quantity: 4,
  },
}; */

//Clase 13/10

/* function compare(value1, value2) {
  console.log("Working!!");
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0; //si son ambos iguales (value1 y value2)
  }
} */

// let numbers = [0, 1, 5, 10, 15];
// let copyOfNumbers = [...numbers];
// let secondCopyOfNumbers = Array.from(numbers);

// copyOfNumbers.reverse();

// console.log(numbers);
// console.log(copyOfNumbers);

// console.log(secondCopyOfNumbers);
/* secondCopyOfNumbers.sort(); */
// console.log(secondCopyOfNumbers);

/* let team = [
  "Alice",
  "Sebastian",
  "Ismael",
  "Juan",
  "David Miró",
  "David Calero",
];
team.sort() */
// console.log(team);
// secondCopyOfNumbers.sort(compare)

// console.log(secondCopyOfNumbers);
//

/* let unorderedNumbers = [20, -8, 3, 3, 102, 43, 18];
let counter = 0;
unorderedNumbers.sort(function (value1, value2) {
  counter++; */
/* console.log("value1: ", value1);
  console.log("value2: ", value2);
  console.log("result: ", value1 - value2); */
/*   return value1 - value2;
}); */
/* console.log(counter);
console.log(unorderedNumbers); */
/* unorderedNumbers.sort((value1, value2) => value2 - value1);
console.log(unorderedNumbers);
 */

// Traditional methods for ordering arrays
/* let numbers = [3, 9, 8, 1, 4];
for (let i = 0; i < numbers.length - 2; i++) {
console.log(numbers);
for (let j = 0, aux = 0; j < numbers.length - 1; j++) {
if (numbers[j] > numbers[j + 1]) {
aux = numbers[j];
numbers[j] = numbers[j + 1];
numbers[j + 1] = aux;
}
}
}
console.log(numbers); */
//Ejercicio carro de la compra con for in
/* let shoppingCart = {

  product1: {
      id: 0,
      name: "trainers",
      price: 29.95,
      quantity: 1
  },
  product2: {
      id: 1,
      name: "suitcase",
      price: 109.95,
      quantity: 1
  },
  product3: {
      id: 2,
      name: "glovers",
      price: 9.95,
      quantity: 1
  },
  product4: {
      id: 3,
      name: "t-shirt",
      price: 19.95,
      quantity: 2
  }
}
for (let key in shoppingCart) {
  console.log(shoppingCart[key].id);
  console.log(shoppingCart[key].name);
} */

/* let hero = {
  character:"Iron Man",
  name:"Tony Stark",
}
for (let keys in hero) {
      console.log(`${keys} => ${hero[keys]}`);
  } */
/* ["Aragorn", "Gandalf", "Nazgul"].forEach((element, index, array) => {
  console.log(`${element} is at index ${index} in ${array}`);
}); */

/* [..."Soberano de Angmar en tiempos pasados"].forEach(letter => {
  console.log(letter);
}) */
/* 
let numbers = [1,2,3];
let mappedNumbers = numbers.map((number) => number * 2);
console.log(mappedNumbers);

let filteredNumbers = numbers.filter(number => number < 3)
console.log(filteredNumbers);

console.log(
  numbers.every(number => number >2)
);
console.log(
  numbers.some(number => number > 2)
);

let totalSum = numbers.reduce((accum, number) => accum + number, 0)
console.log(totalSum);
totalSum = 0;
totalSum = numbers.reduce((accum, number) => accum + number, 0)
console.log(totalSum); */

/* let calendar = new Array(5); //5 numero de filas
for (let i = 0; i < calendar.length; i++) {
  calendar[i] = new Array(7);
}

for (let row = 0, day = 1; row < calendar.length; row++) {
  for (let col = 0; col < calendar[row].length; col++) {
    if (day < 31) {
      calendar[row][col] = day++;
    } else if (day == 31) {
      calendar[row][col] = day;
      day = 1;
    }
  }
}
console.log(calendar); */

function sayHello(name){
    console.log(`Good  night, ${name}!`);
}

sayHello("Antonio");
sayHello("Pablo");
sayHello("Juan");
sayHello("Juan");
sayHello("Juan");
  


  
