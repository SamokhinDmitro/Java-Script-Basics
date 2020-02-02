/*
1. Дан элемент #elem. Добавьте ему класс www.
 */

/*
let elem = document.querySelector('#zd1');
elem.addEventListener('click', function(){
   this.classList.add('www');
});
*/

//////////////

/*
2. Дан элемент #elem. Удалите у него класс www.
 */

/*
let elem = document.querySelector('#zd2');

elem.addEventListener('click', function(){
   this.classList.remove('www');
});
*/

//////////////

/*
3. Дан элемент #elem. Проверьте наличие у него класса www.
 */

/*
let elem = document.querySelector('#zd3');
elem.addEventListener('click', function () {
    if(this.classList.contains('www')){
        alert(true);
    }else{
        alert(false);
    }
});
*/

/////////////////

/*
4. Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
 */

/*
let elem = document.querySelector('#zd3');
elem.addEventListener('click', function(){
   if(this.classList.contains('www')){
       this.classList.remove('www');
   } else{
       this.classList.add('www');
   }
});
*/

///////////

/*
5-6. Дан элемент #elem. Узнайте количество его классов.
 Дан элемент #elem. Выведите последовательно алертом его классы.
 */

/*
let elem = document.querySelector('#zd3');
elem.addEventListener('click', function(){
    let myClass = this.classList;
    for(let i = 0; i < myClass.length; i++){
        alert(myClass[i]);
    }
});
*/

////////////

/*
7.  Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.
 */

/*
let elem = document.getElementById('zd7');

elem.addEventListener('click', function(){
   elem.style.cssText = 'color: red; font-size: 30px; border: 2px solid green';
});
*/

//////////////

/*
8. Дан элемент #elem. По клику на него выведите название его тега.
 */

/*
let elem = document.querySelector('#zd8');

elem.addEventListener('click', function(){
   alert(this.tagName);
});
*/

////////////

/*
9. Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
 */

/*
let elem = document.querySelector('#zd9');

elem.addEventListener('click', function(){
    alert(this.tagName.toLowerCase());
});
*/

///////////////

/*
10. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.

 */

/*
let elem = document.querySelectorAll('.zd10');

for(let i = 0; i < elem.length; i++){
    elem[i].addEventListener('click', func);
}

function func(){
        this.innerText = this.innerText + this.tagName.toLowerCase();
        this.removeEventListener('click', func);
}
*/

//////////////

/*
11. Дан ol. Вставьте ему в конец li с текстом 'пункт'.
 */
/*
let ol = document.querySelector('#zd11');
let li = document.createElement('li');
li.innerHTML = '<b>Новый пункт</b>';
li.style.color = 'red';

ol.appendChild(li);
*/

///////////

/*
12.  Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
 */

/*
let ul = document.querySelector('#zd12');
let arr = [1, 2, 3, 4, 5, 6, 7];

for(let i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    li.innerText = arr[i];
    ul.appendChild(li);
}
*/

//////////////

/*
13. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.
 */

/*
let arr = [1, 2, 3, 4, 5, 6, 7];
let ul = document.querySelector('#zd13');

for(let i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    li.innerText = arr[i];
    li.addEventListener('click', function(){
       alert(this.innerText);
    });
    ul.appendChild(li);
}
*/

//////////////

/*
14. Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.
 */

/*
let ul = document.querySelector('#zd14');
let elem = document.getElementById('li14');
let li = document.createElement('li');
li.innerText = '!!!!';
ul.insertBefore(li, elem);
*/

//////////////

/*
19. Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.
20.  Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
21.  Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
 */

/*
let elem = document.getElementById('zd19');

let tmp = elem.children;
elem.firstElementChild.style.color = 'red';
elem.lastElementChild.style.color = 'green';

for(let i = 0; i < tmp.length; i++){
    tmp[i].innerHTML = tmp[i].innerHTML + '!!!';
}
*/

//////////////

/*
22.Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
23. Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.
24. Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
 */

/*
let elem = document.getElementById('zd22');

elem.previousElementSibling.innerHTML = elem.previousElementSibling.innerHTML + '!!!';
elem.nextElementSibling.innerHTML = elem.nextElementSibling.innerHTML + '!';
elem.nextElementSibling.nextElementSibling.innerHTML = elem.nextElementSibling.nextElementSibling.innerHTML + '++';
*/

//////////////////

/*
25. Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.
26. Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.
 */

/*
let elem = document.getElementById('zd25');
elem.parentElement.style.backgroundColor = 'red';
elem.parentNode.parentElement.style.backgroundColor = 'yellow';
*/

////////////

/*
27. Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.
 */

/*
let btn = document.getElementById('btn27');
btn.addEventListener('click', function(){
    let child = document.getElementById('childzd27');
    child.parentNode.removeChild(child);
});
*/

///////////////////////

/*
28. Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
 */

/*
let ol = document.getElementById('zd28');
alert(ol.lastElementChild.innerHTML);
ol.removeChild(ol.lastElementChild);
*/

////////////////

/*
29. Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.
 */
/*
let ol = document.getElementById('zd29');
let li = ol.children;
for(let i = 0; i < li.length; i++){
    li[i].addEventListener('click', function(){
       this.parentNode.removeChild(this);
    });
}
*/

///////////////

/*
32. Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.
 */

/*
let arr = [1, 2, 3, 4, 5, 6, 7];
let ul = document.createElement('ul');
for(let i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    li.innerText = arr[i];
    li.style.cssText = 'border: 2px solid red';
    ul.appendChild(li);
}
document.body.appendChild(ul);
*/

////////////////

/*
33.  Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
 */
/*
let btn = document.getElementById('btn33');
btn.addEventListener('click', function(){
   let parent = btn.parentNode;
   let input = document.createElement('input');
   parent.appendChild(input);
});
*/

/////////////

/*
34. Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.
 */

/*
let input = document.getElementById('zd34');

input.addEventListener('blur', function(){
        if(input.value.length !== 0 && !isNaN(input.value)){
            let str = input.value.split('');
            for(let i = 0; i < str.length; i++){
                let inp = document.createElement('input');
                inp.value = str[i];
                document.body.appendChild(inp);
            }
            input.value = '';
        }
});
*/

///////////////////////

/*
35. Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.
 */

let btn = document.getElementById('btn35');
btn.addEventListener('click', function(){
   this.parentNode.style.display = 'none';
});
