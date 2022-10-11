/* let radius = prompt('Writhe the circle radius below:');

let result = Math.pow((radius * Math.PI), 2);

let square = alert('Your result is ' + result);

square; */

document.querySelector('.count').onclick = countSquare;

function countSquare(){
    let radius = document.querySelector('.radius').value;
    let result = Math.pow((radius * Math.PI), 2);
    let answer = 'Your result is ' + result;
    document.querySelector('.answer').innerHTML = answer;
}
