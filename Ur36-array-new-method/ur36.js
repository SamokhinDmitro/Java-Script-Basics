/*
1.Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел
 */
/*
let btn = document.getElementById('btn1');
let p = document.getElementById('res1');
btn.addEventListener('click', function(){
    let arr = [5, 6, 7, 8, 9];
    let newArr = [];
    arr.forEach(function(i){
        newArr.push(i*i);
    });
    p.innerText = newArr;
});
*/

////////////

/*
2. Дан массив с числами. Найдите сумму этих чисел.
 */

/*
let arr = [5, 6, 7, 8, 9];
let sum = 0;
arr.forEach(function(i){
   sum += i;
});
alert(sum);
*/
////////////////////

/*
3. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
 */

/*
let arr = [5, 6, 7, 8, 9];

let arr2 = arr.map(function(i){
   return i*i;
});

console.log(arr);
console.log(arr2);
*/

///////////

/*
4. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля
 */

/*
let arr = [5, 6, 7, 8, 9];

alert(arr.every(function(i){
    return i > 0;
}));
*/

////////////

/*
5. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
 */

/*
let arr = [5, 6, 7, 8, 9, -2];

alert(arr.some(function(elem){
    return elem < 0;
}));
*/

///////////

/*
6. Дан массив с числами. Оставьте в нем только отрицательные числа.
 */
/*
let arr = [5, 6, 7, 8, 9, -2];

let arr2 = arr.filter(function(elem){
    return elem < 0;
});

console.log(arr);
console.log(arr2);
*/

////////////

/*
7. Дан массив с числами. Оставьте в нем только четные числа
 */

/*
let arr = [5, 6, 7, 8, 9, -2];

let arr2 = arr.filter((elem) =>{
    return elem%2 == 0;
});

console.log(arr);
console.log(arr2);
*/

///////////

/*
8. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов
 */

/*
let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

let arr2 = arr.filter((elem) =>{
   return elem.length > 5;
});

console.log(arr);
console.log(arr2);
*/

/////////////

/*
9. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
 */

let arr = [1, 'string', [3, 4], 5, [6, 7]];

let arr2 = arr.filter((elem) =>{
   return isArray(elem);
});

console.log(arr);
console.log(arr2);
