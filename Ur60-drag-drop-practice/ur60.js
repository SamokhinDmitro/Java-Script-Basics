/*
Давайте научимся перемещать один элемент на другой.
Таким образом можно реализовать, к примеру, несколько панелей каких-то иконок и перемещать эти иконки с одной панели на другую.
 */

let elems = document.querySelectorAll('.elem');
let parent = document.querySelector('.parent-box');

let current;
elems.forEach(function(elem){
   elem.setAttribute('draggable', 'true');
   elem.addEventListener('dragstart', function(){
       current = this;
       console.log(current);
   });
});

parent.addEventListener('dragenter', function(){
   parent.classList.add('hide');
});

parent.addEventListener('dragleave', function(){
   this.classList.remove('hide');
});

parent.addEventListener('dragover', function(event){
   event.preventDefault();
});

parent.addEventListener('drop', function(){
   this.appendChild(current);
   this.classList.remove('hide');
});


