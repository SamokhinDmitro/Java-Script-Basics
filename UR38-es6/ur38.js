/*
На деструктуризацию
 */

/*
1. Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3,
а все остальные элементы массива - в переменную arr.
 */

/*
let arr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];

let [elem1, elem2, ...arr2] = arr;
alert(elem1);
*/

/*
2. Дан массив. Запишите последний элемент этого массива в переменную elem1, а предпоследний - в переменную elem2.
 */

/*
let btn = document.getElementById('btn2');

btn.addEventListener('click', function(){
    let start = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
    start.reverse();
    let [elem1, elem2, ...arr] = start;
    alert(`${elem1} ${elem2}`);
});
*/

/*
3.  Дан массив. Запишите второй элемент этого массива в переменную elem2. Первый элемент никуда записывать не надо.
 */

/*
let btn = document.getElementById('btn3');
let start = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
btn.addEventListener('click', function(){
   let [, elem2] = start;
   alert(elem2);
});
*/

/*
4.Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee',
а если нет второго - в переменную elem2 запишите значение 'bbb'.
 Первый элемент никуда записывать не надо.
 */

/*
let btn = document.getElementById('btn4');
btn.addEventListener('click', function(){
    let start = ['первый', 'второй'];
    let [, elem2, elem3 = 'eeee'] = start;
    alert(elem2 + ' ' + elem3);

});
*/

/*
5. Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}.
Запишите соответствующие значения в переменные name, surname и age.
 */

/*
let btn = document.getElementById('btn5');
let obj = {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'};
btn.addEventListener('click', function(){
    let {name, surname, age} = obj;

    alert(name + ' ' + surname + ' ' + age);
});
*/

/*
6. Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
Запишите соответствующие значения в переменные name, surname и age.
Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее
значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.
 */

/*
let obj = {name: 'Петр',
   // surname: 'Петров',
  //  age: '20 лет'
    };

let btn = document.getElementById('btn6');
btn.addEventListener('click', function(){
    let {name = 'Аноним', surname = 'Анонимович', age = '???'} = obj;
    alert(`${name} ${surname} ${age}`);
});
*/

/*
7. Дан массив, выведите его элементы последовательно на экран.
 */

/*
let arr = [1, 2,3,4,5,6,7,8,9];

let btn = document.getElementById('btn7');
let p = document.getElementById('zd7');

btn.addEventListener('click', function(){
   for(let i of arr){
       p.innerHTML += i;
   }
});
*/

/*
8. Дан массив, выведите его элементы последовательно на экран в обратном порядке (подсказка: сначала перевернем массив через reverse
 */

/*
let arr = [1, 2,3,4,5,6,7,8,9];

let btn = document.getElementById('btn8');
let p = document.getElementById('zd8');

btn.addEventListener('click', function(){
   arr.reverse();
   for(let curr of arr){
       p.innerText += curr;
   }
});
*/

/*
9. Дан массив с числами, найдите сумму элементов этого массива.
 */

/*
let arr = [1, 2,3,4,5,6,7,8,9];

let btn = document.getElementById('btn9');
let p = document.getElementById('zd9');

btn.addEventListener('click', function(){
    let sum = 0;
    for(let curr of arr){
        sum += curr;
    }

    p.innerHTML = 'Сумма всех элементов массива:' + ' ' + sum;
});
*/

/*
10. Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней.
 */

/*
let str = 'Дана строка. С помощью for-of подсчитайте количество букв о в ней. ';

let btn = document.getElementById('btn10');
let p = document.getElementById('zd10');
let i = 0;

btn.addEventListener('click', function(){
   for(let curr of str){
       if(curr == 'о'){
           i++;
       }
   }
   p.innerHTML = i;
});
*/

/*
FUNCTION
 */

/*
11.  Сделайте функцию, которая получает имя пользователя и выводит на экран 'Привет, Имя' (вместо Имя - полученное параметром имя).
По умолчанию (то есть если не передать параметр) функция должна выводить 'Привет, Аноним'.
 */

/*
function getUser(name = 'Неизвестный'){
    alert(name);
}
getUser();
*/

/*
12. 
 */
