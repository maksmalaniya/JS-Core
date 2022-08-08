let celsius = prompt('Яка сьогодні температура в градусах Цельсія?');
let farenheit = 9 / 5 * celsius + 32;
if(Number.isFinite(farenheit) === false){
    alert('Напишіть правильну температуру!');
} else {
    alert('Температура в градусах Фаренгейта дорівнює ' + farenheit + ' градуси.');
}