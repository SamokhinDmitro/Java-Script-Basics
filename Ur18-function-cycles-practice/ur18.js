/*
1.Выведите с помощью цикла столбец чисел от 1 до 100
 */

/*
for(let i = 1; i <= 100; i++){
    document.write(i + '<br>');
}
*/

//рекурсия
/*
function getNumber(num){
    console.log(num);
    num--;
    if(num > 0){
        getNumber(num);
    }
}

getNumber(100);
*/

//while
/*
let num = 1;
while(num <= 100){
    console.log(num);
    num++;
}
*/

/////////////////////////

/*
2. Выведите с помощью цикла столбец чисел от 100 до 1
 */

//рекурсия
/*
function getNumber(num){
    document.write(`${num} <br>`);
    num--;
    if(num > 0){
        getNumber(num);
    }
}

getNumber(100);
*/

//for
/*
for(let i = 100; i > 0; i--){
    document.write(i + '<br>');
}
*/

/////////////////////

/*
3. Выведите с помощью цикла столбец четных чисел от 1 до 100.
 */
/*
for(let i = 1; i <= 100; i++){
    if(i%2 == 0){
        document.write(i + '<br>');
    }
}
*/

///////////////////

/*
4. Заполните массив 10-ю иксами с помощью цикла.
 */
/*
let str = 'x';
let arr = [];
for(let i = 0; i <= 10; i++){
    arr.push(str);
}

console.log(arr);
*/

//////////////

/*
5. Заполните массив числами от 1 до 10 с помощью цикла.
 */

/*
let arr = [];
for(let i = 5; i<= 10; i++){
    arr.push(i);
}

console.log(arr);
*/

//////////////

/*
6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
 */

/*
let arr = [];

for(let i = 0; i < 10; i++){
    arr[i] = Math.random().toFixed(2);
    //arr.push(Math.random().toFixed(2));
}

console.log(arr);
*/

/////////////

/*
7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
 */

/*
let arr = [];

for(let i = 0; i < 10; i++){
    arr.push((Math.floor(Math.random()*10)+1));
}

console.log(arr);
*/

//////////

/*
8. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
 */

/*
let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

arr.forEach(function(i){
   if(i > 0 && i < 10){
       console.log(i);
   }
});
*/

///////////////

/*
9.  Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите
 */

/*
let arr = [1, 2, 4, -1, -3, 5, 8, 7, 0, -5, 18, 12];

arr.forEach(function(i){
   if(i == 5){
       console.log(true);
   }
});
*/

///////////

/*
10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива
 */

//v1
/*
let arr = [1, 2, 3, 4, 5];

let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum += Number(arr[i]);
}
console.log(sum);
*/

///////////////

/*
11. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
 */

/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function(i){
    sum += Number(kvadrat(i));
});

function kvadrat(num){
    return num * num;
}

console.log(sum);

*/

/////////////////

/*
12. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)
 */

/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;

let srednee = 0;

for(let i = 0; i < arr.length; i++){
    sum += Number(arr[i]);

}

srednee = Number(sum) / arr.length;

console.log(sum);
console.log(srednee);
*/

