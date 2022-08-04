let num = prompt('Write your number below: ');

let myStr = num.toString();

let myArr = myStr.split('');

let txt = '';

for(let i = myArr.length - 1; i >= 0; i--){
    txt += myArr[i];
};

let myAlert = alert(txt)