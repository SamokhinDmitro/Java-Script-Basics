/*
1. Дана строка 'ahb acb aeb aeeb adcb axeb'.
Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'.
 */

/*
let str = 'ahb acb aeb aeeb adcb axeb anB';

console.log(str.replace(/a.b/g, '!'));
*/

/*
2. Дана строка 'aba aca aea abba adca abea'.
Напишите регулярку, которая найдет строки abba adca abea по шаблону: буква 'a', 2 любых символа, буква 'a'.
 */

/*
let str = 'aba aca aea abba adca abea';

console.log(str.replace(/a..a/g, '!'));
*/

/*
3.  Дана строка 'aba aca aea abba adca abea'.
Напишите регулярку, которая найдет строки abba и abea, не захватив adca
 */

/*
let str = 'aba aca aea abba adca abea';
console.log(str.replace(/ab.a/g, '!'));
*/

/*
4. Дана строка 'aa aba abba abbba abca abea'.
Напишите регулярку, которая найдет строки aba, abba, abbba
по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
 */

/*
let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab+a/g, '!'));
*/

/*
5. Дана строка 'aa aba abba abbba abca abea'.
Напишите регулярку, которая найдет строки aa, aba, abba, abbba
по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.
 */

/*
let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab*a/g, '!'));
*/

/*
6. Дана строка 'aa aba abba abbba abca abea'.
Напишите регулярку, которая найдет строки aa, aba по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.
 */

/*
let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab?a/g, '!'));
*/

/*
7. Дана строка 'aa aba abba abbba abca abea'.
Напишите регулярку, которая найдет строки aa, aba, abba, abbba, не захватив abca abea.
 */

/*
let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab*a/g, '!'));
*/

/*
8. Дана строка 'ab abab abab abababab abea'.
Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.
 */

/*
let str = 'ab abab abab abababab abea';
console.log(str.replace(/(ab)+/g, '!'));
*/

/*
9. Дана строка 'a.a aba aea'. Напишите регулярку, которая найдет строку a.a, не захватив остальные.
 */
/*
let str = 'a.a aba aea';
console.log(str.replace(/a\.a/g, '!'));
*/

/*
10.  Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные.
 */
/*
let str = '2+3 223 2223';
console.log(str.replace(/2\+3/g, '!'));
*/

/*
11. Дана строка '23 2+3 2++3 2+++3 345 567'.
Напишите регулярку, которая найдет строки 2+3, 2++3, 2+++3, не захватив остальные (+ может быть любое количество).
 */

/*
let str = '23 2+3 2++3 2+++3 345 567';
console.log(str.replace(/2\++3/g, '!'));
*/

/*
12. Дана строка '23 2+3 2++3 2+++3 445 677'.
Напишите регулярку, которая найдет строки 23, 2+3, 2++3, 2+++3, не захватив остальные.
 */

/*
let str = '23 2+3 2++3 2+++3 445 677';
console.log(str.replace(/(2\+*3)/g, '!'));
*/

/*
13.  Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'.
 Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные
 */
/*
let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
console.log(str.replace(/\*q+\+/g, '!'));
*/

/*
14. Дана строка 'aba accca azzza wwwwa bbb'.
Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'.
Между буквами a может быть любой символ (кроме a).
 */
/*
let str = 'aba accca azzza wwwwa bbb';
console.log(str.replace(/a.+?a/gi, '!'));
*/


