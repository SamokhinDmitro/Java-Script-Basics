/*
1. Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.
 */

/*
let img = document.querySelectorAll('.zd1');
for(let i = 0; i < img.length; i++){
    img[i].addEventListener('click', function(){
       alert(this.src);
    });
}
*/

//2v
/*
let img = document.querySelectorAll('.zd1');
img.forEach(function(i){
   i.addEventListener('click', function () {
      alert(this.src);
   });
});
*/

///////////

/*
2. Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.
 */

/*
let link = document.querySelectorAll('.zd2');

for(let i = 0; i < link.length; i++){
    link[i].addEventListener('mouseover', getTitle);
}

function getTitle(){
    this.title = this.innerText;
}
*/

///////////

/*
3. Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.
 */

/*
let link = document.querySelectorAll('.zd3');

for(let i = 0; i < link.length; i++){
    link[i].addEventListener('mouseover', setLink);
}

function setLink(){
    this.innerText = this.innerText + this.href;
}
*/
///////////

/*
4. Дополните предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста.
 */

/*
let link = document.querySelectorAll('.zd4');

for(let i = 0; i < link.length; i++){
    link[i].addEventListener('mouseover', setLink);
}

function setLink(){
    this.innerText = this.innerText + '(' + this.href + ')';
    this.removeEventListener('mouseover', setLink);
}
*/

/////////////

/*
5. Привяжите всем инпутам следующее событие - по потери фокуса каждый инпут выводит свое value в абзац с id="test".
 */

/*
let input = document.querySelectorAll('.zd5');

input.forEach(function(i){
   i.addEventListener('blur', getValue);
});

function getValue(){
    let p = document.querySelector('#res5');

    p.innerHTML = this.value;
}
*/

///////////////////

/*
6. Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции.
 */

/*
let input = document.querySelectorAll('.zd6');

function func(){
    alert(this.value);
    this.removeEventListener('click', func);
}

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('click', func);
}
*/

///////////////////

/*
7. Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.
 */


/*
let p = document.querySelectorAll('.zd7');

p.forEach(function(i){
   i.addEventListener('click', func);
});

function func(){
    if(Number(this.innerText)){
        this.innerText = Number(this.innerText) * Number(this.innerText);
    }else{
        alert('Введите число');
    }
}
*/

//////////////

/*
8. Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.
 */

/*
let input = document.querySelectorAll('.zd8');

input.forEach(function(i){
   i.addEventListener('blur', func);
});

function func(){
   if(this.value.length <= this.dataset.length){
       this.style.borderColor = 'green';
   }else{
       this.style.borderColor = 'red';
   }
}
*/

/////////////////

/*
9. Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener
 */

let elem = document.querySelectorAll('.zd9');

for(let i = 0; i < elem.length; i++){
    elem[i].addEventListener('click', red);
}

function red() {
    this.style.backgroundColor = 'red';
    this.removeEventListener('click', red);
    this.addEventListener('click', green);
}

function green(){
    this.style.backgroundColor = 'green';
    this.removeEventListener('click', green);
    this.addEventListener('click', red);
}
