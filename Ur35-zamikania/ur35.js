/*
1. Если переменная a больше нуля - то в ggg запишем функцию, которая выводит один !, иначе запишем функцию, которая выводит два
 */


'use strict';

/*
let a = -2;

if(a > 0){
    let ggg = function(){
        alert('!');
    };
    ggg();
}else{
    let ggg = function(){
        alert('!!');
    };
    ggg();
}
*/

///////////

/*
2. Функция ggg принимает 2 параметра: число и анонимную функцию, которая возводит число в квадрат. Возведите число в 4-тую степень с помощью ggg.
 */

/*
function ggg(n, f){
    return f(n);
}

let kvadrat = function(n){
    return Math.pow(n,2);
};

alert(ggg(5, kvadrat));
*/

//////////////////

/*
3. Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4.
 */

/*
function ggg(a,b){
    return a() + b();
}

let f1  = function(){return 3};
let f2  = function(){return 4};

alert(ggg(f1, f2));
*/

/////////////////

/*
4. Дана функция ggg. Она требует первым параметром число, вторым функцию, которая возводит в квадрат, а третьим параметром функцию, которая возводит в куб. Эти функции есть как Function Declaration - kvadrat, kub. Пусть функция ggg вернет сумму квадрата и куба числа.
 */

/*
function ggg(num, a, b){
    return a(num) + b(num);
}

let kvadrat = function(num){
    return Math.pow(num, 2);
};

let kub = function(num){
    return Math.pow(num, 3);
};

alert(ggg(3, kub, kvadrat));
*/

///////////////////

/*
7. Сделайте функцию, которая считает и выводит количество своих вызовов.
 */

/*

function getNumber(){
    let num = 1;
    return function () {
        return num++;
    }
}

let test = getNumber();
console.log(test());
console.log(test());
console.log(test());
console.log(test());
*/

//////////////

/*
8. Даны кнопки. Привяжите к каждой кнопке событие по клику, которое будет считать количество нажатий по кнопке и выводить его в текст кнопки. Количество нажатий для каждой кнопки должно хранится в замыкании.
 */

/*
let btn = document.querySelectorAll('.zd8');

btn.forEach(function(i){
    i.addEventListener('click', f1());
});

function f1(){
    let i = 1;
    return function(){
        this.innerText = i;
        return i++;
    }
}
*/

/////////////

/*
9. Дан массив цветов. Даны абзацы. По первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее. Все абзацы работают независимо.
 */

let colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let p = document.querySelectorAll('.zd9');

for(let i = 0; i < p.length; i++){
    p[i].addEventListener('click', func());
}

function func(){
    let k = 1;
    return function(){
        this.style.backgroundColor = colors[k];
        k++;
        if(k >= colors.length){
            k=0;
        }
    }
}
