/*
1. Клик на кнопку
 */
/*
let btn = document.getElementById('zd1');

btn.addEventListener('click', function(){
   alert(this.innerText);
   alert('!!!');
});
*/
//////////////

/*
2. Уход мышки с элемента
 */
/*
let btn = document.getElementById('zd2');

btn.addEventListener('mouseout', function(){
    alert(this.innerText);
    alert('!!!');
});
*/

////////////

/*
5. Вывести содержимое инпута
 */

/*
let input = document.getElementById('zd5');
let btn = document.getElementById('res5');

btn.addEventListener('click', function(){
    alert(input.value);
});
*/

/*
6. Замена текста в инпуте
 */

let input = document.getElementById('zd6');
let btn = document.getElementById('res6');

btn.addEventListener('click', function(){
   input.value = 'Поменял текст';
});



