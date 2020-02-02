/*
1. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.
 */

/*
let str = 'я люблю javascript!';
//let str2 = str.slice(0,1).toUpperCase() + str.slice(1);
let arr = str.split(' ');
arr[0]= arr[0].toUpperCase();
let str2 = arr.join(' ');
console.log(str);
console.log(str2);
*/

////////////////////

/*
2.  Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл
 */

/*
let str = '123456';

str = str.split('').reverse().join('');
console.log(str);
*/

//////////////////////

/*
3. Проверьте, что строка начинается на http://.
 */

/*
let str = 'http://google.com';

if(str.substr(0, 7) === 'http://'){
    alert(true);
}else{
    alert(false);
}
*/

////////////

/*
4. Проверьте, что строка заканчивается на .html.
 */

/*
let str = 'http://index.html';

console.log(str.substr(-5));
console.log(str.slice(-5));

if(str.substr(0,7) === 'http://' && str.substr(-5) === '.html'){
    alert('Это адрес интернет страницы');
}else{
    alert('Это не является адрессом');
}
*/


