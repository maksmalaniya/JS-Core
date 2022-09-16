let countOfClicks = 0;
const buttonMinus = document.querySelector('.buttonMinus');
const buttonPlus = document.querySelector('.buttonPlus');
let text = document.querySelector('.text');

showClicks = function(){
    text.append( countOfClicks + ' ');
}

buttonMinus.addEventListener('click', function () {
    countOfClicks-=1;
    if(countOfClicks >= 0){
        showClicks();
        console.log('CLicks now: ' + countOfClicks);       
    } else if(countOfClicks < 0){console.log('CLicks now: 0');
}
});

buttonPlus.addEventListener('click', function () {
    countOfClicks+=1;
    if(countOfClicks >= 0){
        showClicks();
        console.log('Clicks now: ' + countOfClicks);       
    } else if(countOfClicks < 0){console.log('CLicks now: 0');
}
})