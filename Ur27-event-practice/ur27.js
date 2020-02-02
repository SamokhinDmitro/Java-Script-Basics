/*
1. Повторите поведение страницы по данному образцу: (получить координаты курсора мышки)
 */

/*
window.addEventListener('mousemove', function(event){
    console.log(event.clientX + ' ' + event.clientY);
});
*/

////////////

/*
2. Переместить предмет по клику на экране
 */

/*
window.addEventListener('click', function(e){
    let block = document.getElementById('block2');
    block.style.position = 'absolute';
    block.style.left = event.clientX + 'px';
    block.style.top = event.clientY + 'px';
    console.log(`X: ${block.style.left} // Y: ${block.style.top}`);
});
*/

//////////////////

/*
4. Код нажатой клавиши проверка
 */
/*
let input = document.getElementById('zd4');
input.addEventListener('keypress', function(e){
   console.log(e.which + ' ' + e.code + ' ' + e.key);
});
*/

////////////

/*
6. Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl.
 */

/*
let div = document.getElementById('zd6');
div.addEventListener('click', function(e){
   if(e.ctrlKey){
       this.style.backgroundColor = 'green';
   }
});
*/

///////////////

/*
8. Дан инпут. В него вводится текст и нажимается клавиша Enter (ее код имеет номер 13). Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
 */

/*
let input = document.getElementById('zd8');

input.addEventListener('keypress', function(e){
   if(e.which == 13){
       let p = document.createElement('p');
       p.innerText = this.value;
       document.body.appendChild(p);
       this.value = '';
   }
});
*/

