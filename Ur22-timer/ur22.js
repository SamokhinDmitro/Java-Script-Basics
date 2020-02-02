/*
1.Создайте отсчет от 0 до бесконечности:
 */
/*
let btn = document.getElementById('btn1');
let p = document.getElementById('zd1');
btn.addEventListener('click', function(){

   setInterval(function(){
       p.innerText = Number(p.innerText) + 1;
   }, 1000);
});
*/

///////////////

/*
2.  Создайте отсчет с кнопкой остановки:
 */

/*
let p = document.getElementById('zd2');
let startBtn = document.getElementById('btn2start');
let stopBtn = document.getElementById('btn2stop');

function start(){
    window.timer = window.setInterval(go, 1000);
}

function go(){
    p.innerText = Number(p.innerText) + 1;
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stop(){
   window.clearInterval(timer);
   stopBtn.disabled = true;
   startBtn.disabled = false;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
*/

///////////////

/*
3. Создайте тикающие часики:
 */

/*
document.addEventListener('DOMContentLoaded', function(){
    setInterval(time, 1000);
});


function time(){
    let p = document.getElementById('zd3');
    let date = new Date();
    p.innerText = `${getZero(date.getHours())}:${getZero(date.getMinutes())}:${getZero(date.getSeconds())}`;
}

function getZero(num){
    if(num > 0 && num < 10){
        return '0' + num;
    }else{
        return num;
    }
}
*/

////////////////

/*
4. Создайте таймер обратного отсчета:
 */

/*
let p = document.getElementById('zd4');
let btn = document.getElementById('btn4');

btn.addEventListener('click', start);

function start(){
    window.timer = setInterval(go, 1000);
}

function go(){
    if(Number(p.innerText) > 0){
        p.innerText = Number(p.innerText) - 1;
    }else{
        window.clearInterval(timer);
        p.innerText = 'Обратный осчет завершен!';
    }
}
*/

//////////////

/*
5. Создайте простой слайдер:
 */

/*
let number = 0;
setInterval(function(){
    if(number == undefined || number == 5){
        number = 0;
    }else{
        number++;
        let img = document.getElementById('zd5');
        img.src = `img/${number}.png`;
    }
}, 1000);
*/

/////////////

/*
8.  Создайте отсчет до полуночи:
 */

setInterval(function(){
    let p = document.getElementById('zd8');
    let now = new Date();
    let end = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0);
    let value = Math.floor((end.getTime() - now.getTime())/(1000));
    let hours = Math.floor(value/3600);
    let secund = Math.floor(value%60);
    let minutes = Math.floor((value - hours*3600)/60);

    p.lastElementChild.innerHTML = `${getZero(hours)}:${getZero(minutes)}:${getZero(secund)}`;
}, 1000);

function getZero(num){
    if(num > 0 && num < 10){
        return '0' + num;
    }else{
        return num;
    }
}
