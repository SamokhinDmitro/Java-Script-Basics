/*
1. Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет строки abba, abbba, abbbba и только их.
 */

/*
let str = 'aa aba abba abbba abbbba aBBa abbbbba';
console.log(str.replace(/ab{2,4}a/gi, '!'));
*/

/*
2. Дана строка 'aa aba abba abbba abbbba abbbbba'.
Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается менее 3-х раз (включительно).
 */
/*
let str = 'aa aba abba  aBBa abbba abbbba abbbbba';
console.log(str.replace(/ab{0,3}a/gi, '!'));
*/

/*
3. Дана строка 'aa aba abba abbba abbbba abbbbba'.
Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается более 4-х раз (включительно).
 */

/*
let str = 'aa aba abba abbba abbbba abbbbba';
console.log(str.replace(/ab{4,}a/g, '!'));
*/

/*
4. Дана строка 'a1a a2a a3a a4a a5a aba aca'.
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.
 */

/*
let str = 'a1a a2a a3a a4a a5a aba aca';
console.log(str.replace(/a\da/g, '!'));
*/

/*
5. Дана строка 'a1a a22a a333a a4444a a55555a aba aca'.
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.
 */

/*
let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
console.log(str.replace(/a\d+a/g, '!'));
*/

/*
6. Дана строка 'aa a1a a22a a333a a4444a a55555a aba aca'.
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a',
а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').
 */

/*
let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
console.log(str.replace(/a\d*a/g, '!'));
*/

/*
7. Дана строка 'avb a1b a2b a3b a4b a5b abb acb'.
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.
 */

/*
let str = 'avb a1b a2b a3b a4b a5b abb acb ACB a@b';
console.log(str.replace(/a\Db/gi, '!'));
*/

/*
8. Дана строка 'ave a#b a2b a$b a4b a5b a-b acb'.
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.
 */

/*
let str = 'ave a#b a2b a$b a4b a5b a-b acb';
console.log(str.replace(/a\Wb/gi, '!'));
*/

/*
9. Дана строка 'ave a#a a2a a$a a4a a5a a-a aca'.
Напишите регулярку, которая заменит все пробелы на '!'.
 */

/*
let str = 'ave a#a a2a a$a a4a a5a a-a aca';
console.log(str.replace(/\s/g, '!'));
*/

/*
10. Дана строка 'aba aea aca aza axa'.
Напишите регулярку, которая найдет строки aba, aea, axa, не затронув остальных.
 */
/*
let str = 'aba aea aca aza axa';
console.log(str.replace(/a[bex]a/g, '!'));
*/

/*
11. Дана строка 'aba aea aca aza axa a.a a+a a*a'.
Напишите регулярку, которая найдет строки aba, a.a, a+a, a*a, не затронув остальных
 */

/*
let str = 'aba aea aca aza axa a.a a+a a*a';
console.log(str.replace(/a[b.*+]a/g, '!'));
*/

/*
12. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - цифра от 3-х до 7-ми.
 */
/*
let str = 'a1a a2a a3a a4a a5a a6a a7a aba';
console.log(str.replace(/a[3-7]a/g, '!'));
*/

/*
13. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до g.
 */
/*
let str = 'aaa aba aca ada ana a6a aga ';
console.log(str.replace(/a[a-g]a/g, '!'));
*/

/*
14. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z
 */
/*
let str = 'aaa aba aca ada afa aza aga';
console.log(str.replace(/a[a-fj-z]a/g, '!'));
*/

/*
15. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до f и от A до Z
 */

/*

let str = 'aaa aBa aca aDa afa aZa aga ';
console.log(str.replace(/a[a-fA-Z]a/g, '!'));
*/

/*
16.  Дана строка 'aba aea aca aza axa a-a a#a'.
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - не 'e' и не 'x'.
 */
/*
let str = 'aba aea aca aza axa a-a a#a';

console.log(str.replace(/a[&ex]a/g, '!'));
*/

/*
17. Дана строка 'wйw wяw wёw wqw'.
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'w', а между ними - буква кириллицы.
 */
/*
let str = 'wйw wяw wёw wqw';

console.log(str.replace(/w[А-Яа-яЁё]w/g, '!'));
*/

/*
18. Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'.
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a',
а между ними - маленькие латинские буквы, не затронув остальных
 */

/*
let str = 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(str.replace(/a[a-z]+a/g, '!'));
*/

/*
19. Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'.
Напишите регулярку, которая найдет строки следующего вида:
по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.
 */
/*
let str = 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(str.replace(/a[a-zA-Z]+a/g, '!'));
*/

/*
20. Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. Напишите регулярку, которая найдет строки следующего вида:
по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.
 */
/*
console.log('aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-z0-9]+a/g, '!'));
*/

/*
21.  Дана строка 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'.
Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз.
 */
/*
let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ anna';
console.log(str.replace(/[а-яА-ЯЁё]+/g, '!'));
*/

/*
22.  Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит первое 'aaa' на '!'.
 */
/*
let str = 'aaa aaa aaa';

console.log(str.replace(/^aaa/g, '!'));/*
*/
/*

23.  Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит последнее 'aaa' на '!'.
 */

/*
let str = 'aaa aaa aaa';

console.log(str.replace(/aaa$/g, '!'));
*/

/*
24. Дана строка 'aeeea aeea aea axa axxa axxxa'.
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - или буква 'e'
любое количество раз или по краям стоят буквы 'a', а между ними - буква 'x' любое количество раз.
 */

/*
let str = 'aeeea aeea aea axa axxa axxxa abba';
//console.log(str.replace(/a[e|x]+a/g, '!')); //или
console.log(str.replace(/ae+a|ax+a/g, '!'));
*/

/*
25. Дана строка 'aeeea aeea aea axa axxa axxxa'.
Напишите регулярку, которая найдет строки следующего вида:
по краям стоят буквы 'a', а между ними - или буква 'e' два раза или буква 'x' любое количество раз.
 */
/*
let str = 'aeeea aeea aea axa axxa axxxa';
console.log(str.replace(/ae{2}a|ax+a/g, '!'));
*/

/*
26. Дана строка 'a\a abc'. Напишите регулярку, которая заменит строку 'a\a' на '!'
 */
/*
console.log('a\a abc aba a\a'.replace(/a\a/g, '!'));
*/

/*
27. Дана строка 'a\a a\\a a\\\a'. Напишите регулярку, которая заменит строку 'a\\\a' на '!'.
 */
/*
let str = 'a\a a\\a a\\\a';
console.log(str.replace(/a\{3}a/g, '!'));
*/

/*
28. Дана строка 'bbb /aaa\ bbb /ccc\'.
Напишите регулярку, которая найдет содержимое всех конструкций /...\ и заменит их на '!'.
 */
/*
console.log('\\ \\ \\\\'.replace(/\\\\+/g, '!')); //вернет '! ! !'
*/

