/*
1. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
 */

/*
let arr = [];

let str = 'x';

for(let i = 0; i <=5; i++){
    arr.push(str);
    str += 'x';
}
console.log(arr);
*/

////////////////

/*
2. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
 */
/*
let arr = [];

for(let i = 1; i <= 10; i++){
    let str = '';
    for(let j = 1; j<=i; j++){
        str += i;
    }
    arr.push(str);
}
console.log(arr);
*/
//////////////////

/*
3. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
 */

/*
function arrayFill(value, length){
    let arr = [];
    for(let i = 1; i <= length; i++){
        arr.push(value);
    }
    return arr;
}

document.write(arrayFill('t', 10));
*/
////////
/*
4. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
 */

/*
function getSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(sum > 10){
            return i+1;
        }
    }
}

console.log(getSum([1,2,3,4,5,6,7,8,9]));
*/

//////////////////////////

/*
5. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
 */

/*
let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = [];
for(let i = arr.length-1; i >= 0; i--){
    arr2.push(arr[i]);
}

console.log(arr);
console.log(arr2);
*/

///////////////////////

/*
6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным
 */

/*
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        sum += arr[i][j];
    }
}
console.log(sum);
*/

//////////////////

/*
7. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
 */

/*
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        for(let k = 0; k < arr[i][j].length; k++){
            sum += arr[i][j][k];
        }
    }
}

console.log(sum);
*/


