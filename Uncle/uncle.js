let officeH = prompt('Яка висота стін?');
let officeW = prompt('Яка ширина кімнати?');
let officeL = prompt('Яка довжина кімнати?');
let squareOfWalls = (officeH*officeL)*2 + (officeH*officeW)*2;
let oneJar = 16;
let youNeedJars = Math.ceil(squareOfWalls/oneJar);
alert('Для того щоб пофарбувати це приміщення вам потрібно ' + youNeedJars + ' банок фарби.')