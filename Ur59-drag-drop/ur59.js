/*
Переместить элемент мышкой по окну браузера
 */

let elem = document.querySelector('#elem');
let offsetX;
let offsetY;

elem.setAttribute('draggable', 'true');

elem.addEventListener('dragstart', function(event){
    //Координаты клика
    offsetX = event.offsetX;
    offsetY = event.offsetY;
    console.log(`X: ${offsetX}|| Y: ${offsetY}`);
});

elem.addEventListener('dragend', function(event){
    //Смещение относительно клика
    this.style.left = (event.pageX - offsetX) + 'px';
    this.style.top =(event.pageY - offsetY )+ 'px';
   console.log('Переместили');

});

