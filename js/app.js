// /* // let [num1, num2] = [1, 2];
// // [num1, num2] = [11];
// // [num1, num2] = [7, 9, 8];
// // [, num1, , , , num2] = [4, 6, 7, 9, 15, -8, 20];
// // let num3;
// // [num1, ,,num2,, ...num3] = [1, 2, 3, 4, 5, 6, 7, 8];
// // let num4
// // // [num1,[,num2],num3,...num4]=[3,[2.5,9],6,7,8]
// // [num1,[,num2],num3]=[3,[2.5,9],6,7,8]
// // console.log(num1);
// // console.log(num2);
// // console.log(num3);
// // console.log(num4);
// // let [start,,,middle,...rest]="Hello";
// // console.log(start);
// // console.log(rest);
// // console.log(middle);

// //Desestructuracion objetos
// /* let hero = {
//   character: "Doctor Strange",
//   name: "Benedict Cumberbatch",
//   powers: {
//     artifacts: ["Eye of Agamotto", "Book of Vishanti", "Orb of Agamotto"],
//     skills: ["Judo", "Magically conjured weapons"],
//   },
// };

// let { name } = hero; */
// // let {
// //   powers: { artifacts, ...otherPowers },
// // } = hero;
// /* console.log(artifacts); */
// /* console.log(otherPowers); */
// //Desestructurar obteniendo el caracter, los poderes
// //en dos variables independientes y el resto del objeto
// /* let {character, powers:{artifacts,skills},...restObject} = hero; */
// /* console.log(character);
// console.log(artifacts);
// console.log(skills);
// console.log(restObject); */
// /* let {powers: {skills:[judo]}} = hero
// console.log(judo); */

// localStorage
// let person = {
//   id: 1,
//   firstName: "John",
//   lastName: "Connor",
//   email: "john@google.com",
// };
// let jsonText = JSON.stringify(person);
// console.log(typeof jsonText);
// let anotherPerson = JSON.parse(jsonText);
// console.log(anotherPerson.lastName);

// let userName = prompt("What your name?");
// let phone = prompt("What your number phone?");
// localStorage.name = userName
// localStorage.phone = phone

// console.log(localStorage.name);
// console.log(localStorage.phone);

// localStorage.clear();

// let data = {
//   userName,
//   phone,
// };
// localStorage.data = JSON.stringify(data)
// console.log(JSON.parse(localStorage.data));

// let token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c2";
// localStorage.setItem("token", token);
// console.log(localStorage.getItem("token"));
// localStorage.removeItem("token");
// console.log(localStorage.getItem("token"));
// let date = new Date().toString();
// localStorage.date = date;
// console.log(new Date(Date.parse(localStorage.date)));

// date = new Date();
// let loginTime =
//   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// sessionStorage.setItem("logedAt", loginTime)
// console.log(sessionStorage.getItem("logedAt"));

//JavaScript Asincrono
// const sayHello = (userName) => {
//   console.log("Hello " + userName);
// };
// const getUserName = (callback) => {
//   let userName = prompt("Please, enter your name:");
//   callback(userName);
// };
// // getUserName(sayHello);

// let countDown = () => {
//   console.log("Are you ready?");
//   let start = 0;
//   let end = 0;
//   for (let index = 5, count = 1 ; index >= 0; index--, count++) {
//     start = new Date().getTime()
//     console.log(start);
//     setTimeout( ()=>{
//         end = new Date().getTime()
//         console.log(index == 0 ? "Go!": index); //Operador ternario (?), equivalente a un if else
//         console.log(count);
//         console.log(end - start, " ms");
//     }, count * 1000)
//   }
// };
// countDown();
// console.log("Steady");

let countDownHell = () => {
  let start = 5;
  setTimeout(() => {
    console.log(start--);
    setTimeout(() => {
      console.log(start--);
      setTimeout(() => {
        console.log(start--);
        setTimeout(() => {
          console.log(start--);
          setTimeout(() => {
            console.log(start--);
            setTimeout(() => {
              console.log("Running!");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
// countDownHell();

let doingSomething = (done) => {
  new Promise((resolve, reject) => {
    if (done) {
      resolve(console.log("Success"));
    } else {
      reject(err.message);
    }
  });
};
doingSomething(true)
