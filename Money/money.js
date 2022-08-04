let age = prompt('Напишіть ваш вік:');

let lastAge = 65 - age;

let neededObj = new Date();

let currentYear = neededObj.getFullYear();

let yearAge = currentYear + lastAge;

let newAlert = alert('Час через який Ви вийдете на пенсію (в роках): ' + lastAge + '. Рік, у який Ви вийдете на пенсію: '+ yearAge + '.')