/*
Задача. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
 */

/*
var arr = [1, 2, 3, -1, -2, -3];

function isPositive(num) {
    if(num >= 0){
        return true;
    }else{
        return false;
    }
}

let res = [];

for(let i = 0; i < arr.length; i++){
    if(isPositive(arr[i])){
        res.push(arr[i]);
    }
}

console.log(arr);
console.log(res);
*/

/////////////////////////
/*
1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
 */

/*
function isNumberInRange(num){
    if(Number(num) > 0 && Number(num) < 10){
        return true;
    }else{
        return false;
    }
}

console.log(isNumberInRange(0));
*/

//////////////////////////////////////

/*
2. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
 */

/*
let arr = [1, 3, 5, 6, 9, 11, 15, 30];
let res = [];

function isNumberInRange(num){
    if(num > 0 && num < 10){
        return true;
    }else{
        return false;
    }
}

for(let i = 0; i < arr.length; i++){
    if(isNumberInRange(arr[i])){
        res.push(arr[i]);
    }
}

console.log(arr);
console.log(res);
*/

///////////////////

/*
3. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
 */

/*
function getDigitsSum(num){
    let digit = String(num);
    let sum = 0;

    for(let i = 0; i < digit.length; i++){
        sum += Number(digit[i]);
    }

    return sum;
}
console.log(getDigitsSum(596));
*/

/////////////////

/*
4. Найдите все года от 1 до 2019, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
 */


/*
function getDigitsSum(num){
    let digit = String(num);
    let sum = 0;

    for(let i = 0; i < digit.length; i++){
        sum += Number(digit[i]);
    }
    return sum;
}

for(let i = 1; i <= 2019; i++){
    if(getDigitsSum(i) === 13){
        console.log(i);
    }
}
*/

/////////////////////////

/*
5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
 */

/*
function isEven(num){
    if(num%2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(22));
*/

/////////////////////

/*
6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
 */
/*
function isEven(num){
    if(num%2 == 0){
        return true;
    }else{
        return false;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
let res = [];

for(let i = 0; i < arr.length; i++){
    if(isEven(arr[i])){
        res.push(arr[i]);
    }
}

console.log(arr);
console.log(res);
*/

/////////////////

/*
7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
 */

function getDivisors(num){
    let arr = [];
    for(let i = 1; i < num; i++){
       if(num%i == 0){
           arr.push(i);
       }
    }
    return arr;
}

console.log(getDivisors(22));

