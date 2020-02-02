/*
1. Дан див для перетягивания. Сделайте так, чтобы в момент начала перетягивания его граница красилась в красный цвет.
 */

/*
let elem = document.querySelector('.elem');
let parent = document.querySelector('#parent');

elem.setAttribute('draggable', 'true');

elem.addEventListener('dragstart', function(){
   this.style.borderColor = 'red';
});
*/

/*
2. Дан див для перетягивания. Сделайте так, чтобы в момент окончания перетягивания его граница красилась в зеленый цвет.
 */
/*
let elem = document.querySelector('.elem');
elem.setAttribute('draggable', 'true');

elem.addEventListener('dragend', function(){
   this.style.borderColor = 'red';
});
*/

/*
3. Дан див для перетягивания.
Сделайте так, чтобы в процессе перетягивания в консоль выводился '!' (каждый раз при срабатывании события).
 */

/*
let elem = document.querySelector('.elem');
elem.setAttribute('draggable', 'true');

elem.addEventListener('drag', function(){
    console.log('!');
    this.style.borderColor = 'red';
});
*/

/*
4.Дан элемент для перетягивания и принимающий див. Сделайте так, чтобы по дропу граница принимающего дива красилась в красный цвет.
 */

/*
let elem = document.querySelector('.elem');
let parent = document.querySelector('#parent');

elem.setAttribute('draggable', 'true');

//так работает отлично
parent.addEventListener('dragover', function(event){
   event.preventDefault();
});

//Не работает, тк необходимо убрать действие по умолчанию у dragover
parent.addEventListener('drop', function(){
   this.style.borderColor = 'red';
    console.log('!');
});
*/


/*
5. Дан элемент для перетягивания и принимающий див.
Сделайте так, чтобы при движении элемента над принимающем дивом граница принимающего дива в виде точечек.
 */

/*
let elem = document.querySelector('.elem');
let parent = document.querySelector('#parent');

elem.setAttribute('draggable', 'true');

parent.addEventListener('dragover', function(){
   this.style.borderStyle = 'dotted';
});

parent.addEventListener('dragleave', function(){
    this.style.borderStyle = 'solid';
});
*/

/*
6. Дан элемент для перетягивания и принимающий див. Сделайте так, чтобы при вхождении элемента в границы принимающего дива в текст принимающего дива записывался '!', а при уходе - этот текст убирался.
 */

/*
let elem = document.querySelector('.elem');
let parent = document.querySelector('#parent');

elem.setAttribute('draggable', 'true');

parent.addEventListener('dragenter', function(){
    this.innerHTML = 'Зашли';
    console.log('+');
});

parent.addEventListener('dragleave', function(){
    this.innerHTML = 'Вышли';
    console.log('-');
});
*/

/*
7.
 */
