/*
1. Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).
 */



let ul = document.getElementById('zd1');
let btn = document.getElementById('btn1');

ul.addEventListener('click', function(event){
   let target = event.target;
   if(target.tagName == 'LI'){
     target.innerText = target.innerText + '!';
   }
});

btn.addEventListener('click', addLink);

function addLink(){
    let li = document.createElement('li');
    li.innerText = 'пункт';
    ul.appendChild(li);
}


//////////

/*
2. Дана таблица с юзерами с двумя колонками: имя и фамилия.
    Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу.
    Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки.
    Задачу решите с помощью делегирования (то есть событие должно быть навешано на table).
 */

/*
let table = document.getElementById('zd2');

table.addEventListener('click', function(event){
   if(event.target.tagName == 'TD'){
       let str = prompt('Редактирование задачи', event.target.innerText);
       event.target.innerText = str;
   }
});

let btn = document.getElementById('btn2');
btn.addEventListener('click', addUser);
let name = document.querySelector('#name');
let surname = document.querySelector('#surname');

function addUser(){
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdSurname = document.createElement('td');

    if(name.value !== '' && surname.value !== ''){
        tdName.innerText = name.value;
        tdSurname.innerText = surname.value;

        clearInput();

        table.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdSurname);
    }else{
        alert('---');
    }


}

function clearInput(){
    name.value = '';
    surname.value = '';
}
*/