/*
Функциональное ООП
 */

/*
1. Реализуйте класс Student (Студент), который будет наследовать от класса User,
    подобно тому, как это сделано в теоретической части урока.
    Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
    year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
    с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
    который будет выводить текущий курс студента (от 1 до 5).
 */

function User(name, surname){
    this._name = name;
    this._surname = surname;

    this.getFullName = function(){
        return this._name  + ' ' + this._surname;
    };

    this.getName = function(){
      return this._name;
    };

    this.setName = function(name){
        this._name = name;
    };
}

//Наследование


function Student(name, surname, year) {

    User.apply(this, arguments);
    this._year = year;

    this.getKours = function () {

        let date = new Date();
        let now = new Date().getTime();
        let old = date.setFullYear(this._year);
        let res = Math.round((now - old) / (1000 * 60 * 60 * 24));
        let kurs = res / 365;

        switch (kurs) {
            case 1: {
                return ('1 курс');
                break;
            }
            case 2: {
                return ('2 курс');
                break;
            }
            case 3: {
                return ('1 курс');
                break;
            }
            case 4: {
                return ('1 курс');
                break;
            }
            default:
                return ' Не студент';
        }
        return kurs;
    };

    //Полиморфизм изменим метод родителя

    let test = this.getFullName;
    this.getFullName = function(){
        test();

    }
}

/*
let petr = new User('Петр', 'Фамилевичеус');
alert(petr.getFullName());
alert(petr.getName());
petr.setName('Иван');
alert(petr.getName());
*/

let student = new Student('Вася', 'Пупкин', 2017);
alert(student.getKours());
alert(student.getFullName());
