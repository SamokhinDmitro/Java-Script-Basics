/*
1.  Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
 */

/*
let a = [1, 2, 3],
    b = [4, 5, 6],
    c = [];

c = a.concat(b);
alert(c);
*/

//////////////////

/*
2.  Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
 */
/*
let arr = [1, 2, 3];
alert(arr.reverse());
*/

/////////////////////////////

/*
3-4. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
 */

/*
let arr = [1, 2, 3];
arr.push(4,5,6);
arr.unshift(9,8,7);
alert(arr);
*/

////////////////

/*
5-6. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
 */

/*
let arr = ['js', 'css', 'jq'];

let a = arr.shift();
let b = arr.pop();
alert(a);
alert(arr);
*/


//////////////////////

/*
7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
*/

/*
let arr = [1, 2, 3, 4, 5];
console.log(arr);
let arr2 = arr.slice(0,3);
console.log(arr2);
console.log(arr2.length);
console.log(arr.length);
*/

///////////////////////////

/*
8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
 */

/*
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(3);
//let arr2 = arr.slice(-2);
console.log(arr);
console.log(arr2);
*/

///////////////////////

/*
9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
 */

/*
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr.splice(0, 4));
console.log(arr);
console.log(arr.length);
*/

////////////////////

/*
10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
 */
/*
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.splice(1,3);
console.log(arr);
console.log(arr.length);
console.log(arr2);
console.log(arr2.length);
*/

////////////////////

/*
11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
 */

/*
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.splice(3,0, 'a', 'b', 'c');
console.log(arr);
*/

//////////////////

/*
12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
 */
/*
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.splice(1,0, 'a','b');
arr.splice(6,0, 'c');
arr.splice(8,0, 'e');
console.log(arr);
*/

//////////////////////

/*
13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
 */
/*
let arr = [3, 4, 1, 2, 7];

console.log(arr);
//arr.sort();
arr.sort(function(a,b){
    return a-b;
});
console.log(arr);
*/

///////////////

/*
14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
 */
/*
let obj = {js:'test', jq: 'hello', css: 'world'};
console.log(obj);
console.log(Object.keys(obj));
*/


