/*
1.  Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
 */

/*
let str = 'abc frty yuio';

function ucfirst(str){
    return str.slice(0,1).toUpperCase() + str.slice(1);
}

let arr = str.split(' ');
let newStr = '';
for(let i = 0; i < arr.length; i++){
   arr[i] = ucfirst(arr[i]);
}
newStr = arr.join(' ');
console.log(str);
console.log(newStr);
*/

///////////////

/*
2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
 */

/*
let str = 'var_text_hello';
let arr = str.split('_');
for(let i = 1; i < arr.length; i++){
    arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
}
let newStr = arr.join('');
console.log(str);
console.log(newStr);
*/

/////////////////

/*
3. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
 */

/*
function inArray(text, arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === text){
            return true;
        }

    }
    return false;
}

console.log(inArray('banan', ['yabloko', 'banan', 'grysha']));
*/


