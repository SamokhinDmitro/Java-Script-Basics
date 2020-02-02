/*
1. Дана строка 'aaa@bbb eee7@kkk'.
Напишите регулярку, которая найдет строки по шаблону:
любое количество букв и цифр, символ @, любое количество букв и цифр и поменяет местами то,
что стоит до @ на то, что стоит после нее.
Например, aaa@bbb должно превратиться в bbb@aaa.
 */
/*
let str = 'aaa@bbb eee7@kkk';
//console.log(str.replace(/(\w+)+@(\w+)/g, '$2@$1'));//v1
//console.log(str.replace(/([a-z]+)@([a-z]+)/g, '$2@$1'));//v2
*/

/*
2. Дана строка вида 'a1b2c3'.
 Напишите регулярку, которая найдет все цифры и удвоит их количество таким образом: 'a11b22c33'
(то есть рядом с каждой цифрой напишет такую же).
 */
/*
let str = 'a1b2c3';
console.log(str.replace(/(\d)/g, '$1$1' ));
*/

//МЕТОДЫ test И match
/*
3. С помощью метода test определите, что переданная строка является емэйлом.
Примеры емэйлов для тестирования mymail@mail.ru,
my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru.
 */

/*
let str = 'my.ymail@mail.ru';

//console.log(/^[a-zA-Z]+\W?[a-z]+@[a-z]+\.[a-z]{2,3}$/.test(str)); //v1

//console.log(/^[a-zA-Z._-]+@[a-z]+?\.[a-z]{2,3}$/.test(str));//v2
*/


/*
4.Дана строка с текстом, в котором могут быть емейлы. С помощью match найдите все емэйлы в виде массива.
 */
/*
let str = 'строка с емэйлами my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru';

console.log(str.match(/([a-zA-Z]+\W?[a-zA-Z]+@[a-z]+\.[a-z]{2,3})/g));
*/

/*
5. С помощью test определите, что переданная строка является доменом.
Примеры доменов: site.ru, site.com, my-site.com.
 */

/*
let str = 'my-site.com';

//console.log(/^([a-z]+\w?\.[a-z]{2,3})$/.test(str));//v1
console.log(/^[a-z._-]+\.[a-z]{2,3}$/.test(str));
*/

/*
6. С помощью test определите, что переданная строка является доменом.
Примеры доменов: http://site.ru, http://site.com.
 */

/*
let str = 'https://site-nyy_yy.ua';

console.log(/^(http|https):\/\/[a-z._-]+\.[a-z]{2,3}$/.test(str));
*/

/*
8.  С помощью test определите, что переданная строка начинается с http или с https
 */

/*
let str = 'https://site.ru';

console.log(/^(http|https)/.test(str));
*/

/*
9. С помощью test определите, что переданная строка заканчивается расширением txt, html или php.
 */

/*
let str = 'test.txt';

console.log(/\.(php|txt|html)$/.test(str));
*/

/*
10. С помощью test определите, что переданная строка заканчивается расширением jpg или jpeg.
 */
/*
let str = 'myimage.jpg';
console.log(/\.(jpg|jpeg)$/.test(str));
*/

/*
11. С помощью test узнайте является ли строка числом, длиной до 5 цифр.
 */

/*
let str = '12345';
console.log(/^\d{0,5}$/.test(str));
*/


/*
12. Дана строка с буквами, пробелами и цифрами. Найдите сумму всех чисел из данной строки.
 */

/*
let str = '46 vf 45 ty';
let arr = [];
let sum = 0;
arr = str.match(/\d/g);
arr.forEach(function(i){
   sum += Number(i);
});
console.log(sum);
*/

/*
13. С помощью replace замените в строке домены вида http://site.ru, http://site.com на <a href="http://site.ru">site.ru</a>.
 */
/*
let str = 'http://site-rr.ru';

console.log(str.replace(/^((http|https):\/\/([a-z.-]+\.[a-z]{2,3}))$/g, '<a href="$1">$3</a>'));
*/

/*
14.С помощью replace замените все повторяющиеся пробелы на один.
 */

/*
let str = "12 aa  aa a  56";

console.log(str.replace(/\s{2,}/g, '!'));
*/

/*
15. Найдите и удалите все комментарии CSS
 */

//let str = "/*dfdf*/ sadsad  /*твой ком*/";
/*
console.log(str.replace(/\/\*[a-zA-Zа-яА-ЯЁё ]+\*\//g, '!'));
*/

/*
16.  Найдите и удалите все комментарии HTML.
 */

/*
let str = '<!--dfdf--> sadsad <!--ghgh-->';

console.log(str.replace(/\<\!\\-\\- [a-z]+ \\-\\-\>/g, '!'));
*/


