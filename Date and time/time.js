let timer = document.querySelector('.time');
let date = document.querySelector('.date')
let today = new Date();
let timeNow = today.toLocaleTimeString();
let dateNow = today.toLocaleDateString();

timer.append(timeNow);
date.append(dateNow);