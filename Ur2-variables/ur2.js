/*
2. Задача. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --.
Количество строк кода при этом не должно измениться. Код для переделки:
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);
 */
/*
let num = 1;
num += 12;
console.log(num);

num -= 14;
console.log(num);

num -= 14;
console.log(num);

num *= 5;
console.log(num);

num /= 7;
console.log(num);

num++;
console.log(num);
num --;
console.log(num);
*/

/////////////////////////////

/*
1.  Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
 */

/*
let num = 3;
alert(num);
*/

/////////////////////////////

/*
2.  Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
 */

/*
let a = 10;
let b = 2;
document.write(a+b + '<br>');
document.write(a-b + '<br>');
document.write(a*b + '<br>');
document.write(a/b + '<br>');
*/
////////////////////////////////////
/*
3.  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
 */

/*
let c = 15,
    d =2,
    result = 0;
result = c + d;
alert(result);
*/
//////////////////////////////
/*
4. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
 */
/*
let a = 10,
    b = 2,
    c = 5;
alert(a+b+c);
*/
/////////////////////////

/*
5. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
 */

/*
let a = 17,
    b = 10,
    c = 0,
    result = 0,
    d = 7;

c = a - b;
result = c + d;
alert(result);
*/

///////////////////////

/*
6. Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
 */

/*
let str = 'Привет мир!!!';
alert(str);
document.write(str);
console.log(str);
*/

//////////////////////////

/*
7. Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
 */

/*
let name = 'Дмитрий';
document.write('Привет' + ' ' + name + '<br>');
document.write(`Привет ${name}`);
alert(`Привет  ${name}`);
*/
//////////////////////////

/*
8. Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
 */

/*
let age = 26;
document.write(`Мне ${age} лет!`);
*/

////////////////////////

/*
10. Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
 */

/*
let name = prompt('Введите имя', '');
document.write(`Вашк имя ${name}`);
*/

///////////

/*
11. Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
 */

/*
let num = Number(prompt('Введите число'));
alert(typeof(num));
document.write(num*num);
*/

///////////

/*
12.  Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
 */

/*
let str = 'abcde';
document.write(`${str[0]} ${str[2]} ${str[4]}`);
*/

////////////////////

/*
13. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
 */

/*
let num = '12345';
let sum = 0;

for(let i = 0; i < num.length; i++){
    sum += +num[i];
}
alert(typeof(num));
alert(typeof(sum));
alert(sum);
*/
///////////////////////////////

/*
14. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
 */

/*
let num = 60,
    hours = 60;

alert(num / 60);

*/





