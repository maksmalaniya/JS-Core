document.querySelector('.makeReverse').onclick = makeItReverse;

function makeItReverse(){
    let num = document.querySelector(".rightNumber").value;
    //console.log(num);
    let str = num.toString();
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    let reverseNum = Number(newStr);
    let message = 'Your reversed number is ' + reverseNum;
    document.querySelector('.reverseNumber').innerHTML = message;
    //console.log(reverseNum);
};