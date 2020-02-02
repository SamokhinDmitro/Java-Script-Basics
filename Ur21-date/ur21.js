/*
1. Выведите на экран текущий день
 */

/*
let p = document.getElementById('zd1');
let date = new Date();

p.innerText = p.innerText + ' ' + date.getDay();
*/

///////////////
/*
4. Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)
 */

/*
let date = new Date();

alert(`${getZero(date.getHours())}:${getZero(date.getMinutes())}:${getZero(date.getSeconds())} ${getZero(date.getDate())}.${getZero(date.getMonth()+1)}.${date.getFullYear()}`);

function getZero(num){
    if(num > 0 && num < 10){
        return '0' + num;
    }else{
        return num;
    }
}
*/

///////////

/*
5. Выведите на экран номер текущего дня недели.
 */
/*
let date = new Date();
alert(date.getDay());
*/

////////////////

/*
6. Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски.
 */

/*
function showDay(day){
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[day];
}
let date = new Date();
let p = document.getElementById('zd6');
p.innerText = p.innerText + ' ' + showDay(date.getDay());
*/

///////////////

/*
7. Узнайте, какой был 7-го января 2015 года.
 */
/*
function showDay(day){
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[day];
}

let date = new Date(2015, 0, 7);
let p = document.getElementById('zd7');
p.innerText = p.innerText + ' ' + showDay(date.getDay());
*/

/////////////////

/*
8.  Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.
 */
/*
let date = new Date();
alert(Math.floor(date.getTime()/(1000*60)));
*/
//////////////

/*
9. Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse.
 */
/*
let p = document.getElementById('zd9');
let old = Date.parse('2008-08-27T00:00:00');
let now = new Date();

let hours = Math.round((now.getTime() - old)/(1000*3600));//часы
let days = Math.round((now.getTime() - old)/(1000*3600*24));//дни
alert(hours + ' ' + days );
*/
//////////////////////
/*
10. Выведите на экран количество секунд с начала дня до настоящего момента времени.
 */

/*
let date = new Date();
let old = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

let secund = Math.floor((date.getTime() - old.getTime())/(1000));
let minutes = Math.floor((date.getTime() - old.getTime())/(1000*60));
let hours = Math.floor((date.getTime() - old.getTime())/(1000*60*60));
alert(`${hours}:${minutes}:${secund}`);
*/

////////////////

/*
11. Выведите на экран количество секунд, которое осталось до конца дня.
 */
/*
let date = new Date();
let end = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1, 0, 0, 0);

let hours = Math.floor((end.getTime() - date.getTime())/(1000*60*60));
let minutes = Math.floor((end.getTime() - date.getTime())/(1000*60));
alert('До конца суток осталось: ' + hours + 'часов '+ minutes + ' минут');
*/

/////////////////////

/*
12.  Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31' (с конкретным годом). По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения. Воспользуйтесь методом Date.parse.
 */


let input = document.getElementById('zd12');

input.addEventListener('blur', function(){
   let date = new Date();
   let birthday = new Date(Date.parse(input.value));
   let now = new Date(birthday.setFullYear(date.getFullYear()));
    if(birthday <= now){
        birthday.setFullYear(birthday.getFullYear()+1);

    }
    let res = Math.round((birthday.getTime() - now.getTime())/86400000);
    alert(res);
});
