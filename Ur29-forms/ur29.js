/*
1. Дана форма с id="form". В ней даны инпуты, в них числа. Дана кнопка.
По нажатию на эту кнопку получите форму по ее id, затем циклом переберите все инпуты в ней и найдите сумму чисел из этих инпутов.
 */
/*
let form = document.forms.form;
let sum = 0;

form.addEventListener('submit', function(e){
    //e.preventDefault();
   let a = form.elements[0].value;
   let b = form.elements[1].value;
   sum = Number(a) + Number(b);
   alert(sum);
});
*/

//////////

/*
2. На странице расположено несколько форм. В них есть инпуты, в инпутах числа. Дана кнопка. По нажатию на эту кнопку циклом переберите все формы на странице, затем циклом переберите все инпуты в каждой форме и найдите сумму чисел из всех этих инпутов.
 */

/*
let btn = document.getElementById('zd2');
let sum = 0;
btn.addEventListener('click', function(){
        let form = document.forms;
        for(let i = 0; i < form.length; i++){
            for(let j = 0; j < form[i].elements.length; j++){
                sum += Number(form[i].elements[j].value);
            }
        }
        alert(sum);
});
*/

//сумма в одной форме
/*
let btn = document.getElementById('zd2');
let sum = 0;
btn.addEventListener('click', function(){
    let form = document.forms.form3;
    for(let i = 0; i < form.length; i++){
        sum += Number(form.elements[i].value);
    }
    alert(sum);
});
*/


/////////////////

/*
3. Дан селект. Дан инпут. По изменению селекта выведите текст выбранного пункта в инпут.
 */

/*
let select = document.querySelector('#zd3');
let input = document.querySelector('#res3');
select.addEventListener('click', function(){

   for(let i = 0; i < select.length; i++){
       if(select[i].selected){
           input.value = select[i].innerText;
       }
   }
});
*/

/////////////

/*
4. Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести число, нажать на кнопку и в селекте становился выбранным пункт с этим номером.
 */

/*
let input = document.querySelector('#res4');
input.addEventListener('change', function(){
  let select = document.querySelector('#zd4');
    for(let i = 0; i < select.length; i++){
        if(select[i].value == input.value){
            select[i].selected = true;
        }
    }
});
*/


