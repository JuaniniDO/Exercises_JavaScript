/* Obtener la fecha completa del sistema para el dia en curso */
const fechaDeHoy = new Date();
// El año con 4 digitos
let year = fechaDeHoy.getFullYear();
// El mes de 0 a 11 (0-Enero y 11-Diciembre)
let month = fechaDeHoy.getMonth();
// El día del mes en curso (entre 1 y 31)
let today = fechaDeHoy.getDate();
// El dia de la semana (0 para el domingo, 1 para lunes y asi sucesivamente)
let dayOfWeek = fechaDeHoy.getDay();
// La hora entre 0 y 23
let hour = fechaDeHoy.getHours();
// Los minutos, entre 0 y 59
let minutes = fechaDeHoy.getMinutes();
// Mostrar por consola la hora y minutos
console.log(hour, ":", minutes);

let day = today;

//Si el día tiene menos de 2 digitos le pongo un 0
if (day < 10) {
  day = "0" + day;
}
console.log(day);
//Sumamos 1 al mes para que coincida nuestro sistema de meses (1-12)
month = month + 1;
//Si el mes tiene menos de 2 digitos le pongo un 0
if (month < 10) {
  month = "0" + month;
}
console.log(month);
console.log(year);
//Concatenamos cadenas de caracteres con las variables, para formar la fecha completa
let fullDate = hour+":"+minutes+" "+day+"/"+month+"/"+year

console.log("Today's date and time");
console.log(fullDate)


month=0
if (month == 3 || month == 4 || month == 5) {
    alert("Spring");
} else if (month == 6 || month == 7 || month == 8) {
    alert("Summer");
} else if(month == 9 || month == 10 || month == 11) {
    alert("Autumn");
} else if (month == 12 || month == 1 || month == 2){
    alert("Winter");
}else {
    console.log("Please, write a valid month");
}

//Estructura switch
let character = "Black Widow";
switch (character) {
    case "Captain America":
        power = "Indestructible shield";
    break;
    case "Black Widow":
        power = "Master spy & assasin";
    break;
    case "Iron Man":
        power = "Genius-level intellect"
    break;
    case  "Thor":
        power = "The hammer of Thor"
        break;
        default:
        console.log ("Choose your hero!");
        break;    
}
console.log(power);