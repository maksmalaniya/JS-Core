let yourTicket = prompt('Напишіть номер вашого сьогоднішнього квитка:');
let numberArray = yourTicket.toString().split('');
let sumOfFirst = numberArray[0] + numberArray[1] + numberArray[2];
let sumOfSecond = numberArray[3] + numberArray[4] + numberArray[5];
    if(sumOfFirst === sumOfSecond) {
        alert('Вітаю, ваш квиток щасливий! :)')
       } else {
        alert('Нажаль, ваш квиток не щасливий :(')
       }
