/* let yourTicket = prompt('Напишіть номер вашого сьогоднішнього квитка:');
let numberArray = yourTicket.toString().split('');
let sumOfFirst = numberArray[0] + numberArray[1] + numberArray[2];
let sumOfSecond = numberArray[3] + numberArray[4] + numberArray[5];
    if(sumOfFirst === sumOfSecond) {
        alert('Вітаю, ваш квиток щасливий! :)')
       } else {
        alert('Нажаль, ваш квиток не щасливий :(')
       } */

document.querySelector('.getAnswer').onclick = isLucky;

function isLucky(){
    let yourTicket = document.querySelector('.ticket').value;
    let numberArray = yourTicket.toString().split('');
    let validationMessage = 'Номер квитка складається з 6 цифр!';
    let happyMessage = 'Вітаю, ваш квиток щасливий! :)'
    let sadMessage = 'Нажаль, ваш квиток не щасливий :('
    if(numberArray.length !== 6){
        document.querySelector('.answer').innerHTML = validationMessage;
    } else {
        let sumOfFirst = numberArray[0] + numberArray[1] + numberArray[2];
        let sumOfSecond = numberArray[3] + numberArray[4] + numberArray[5];
        if(sumOfFirst === sumOfSecond){
            document.querySelector('.answer').innerHTML = happyMessage;
        } else{
            document.querySelector('.answer').innerHTML = sadMessage;
        }
    }
}
