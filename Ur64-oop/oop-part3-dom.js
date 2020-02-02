
/*
Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции.
 var elem = new Elem('селектор');

elem.html('!'); //запишет в текст элемента '!'
elem.append('!'); //запишет в начало элемента '!'
elem.prepend('!'); //запишет в конец элемента '!'
elem.attr('class', 'www'); //запишет в атрибут class значение www
 */

/*
class Elem{
    constructor(selector){
        this.elem = document.querySelector(selector);
    }

    html(text){
        this.elem.innerHTML = text;
    }
    leng(){
        var a = this.elem.innerHTML;
        alert(a.length-1);

    }
    append(text){

        this.elem.insertAdjacentText('afterbegin', text);
        return this.elem.innerHTML;
    }



}

class Attr extends Elem{
    attr(name, value){
        this.elem.setAttribute(name, value);
    }
}

var btn = document.getElementById('pr');

btn.addEventListener('click', function(){

   // div.html('tttt');
   div.append('rrr');
   // div.leng();
    div.attr('class', 'ggg');
    div.attr('data-color', 'red');
});

var div = new Elem('#mytext');


*/