
//'use strict';


let elem = document.getElementById('elem');
let elem2 = document.getElementById('elem2');

/*

//пример контекста
elem.addEventListener('blur', func);

function func() {
    alert(this.value); //выведет 'привет'
    //let that = this;
        window.setTimeout(() => {
            alert(this.value); //не будет работать
        }, 1000);

}
*/

/////////////////////

//пример вызова привязки контекста функциии через call и apply
/*
function func(param1, param2){
    alert(this.value + ' ' + param1 + ' ' + param2);
}

//func();

func.call(elem, 'ff', 'ee');
func.apply(elem, [25, 23]);
*/


