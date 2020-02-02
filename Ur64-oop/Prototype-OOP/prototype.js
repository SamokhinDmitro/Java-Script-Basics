/*
1.Реализуйте класс Student (Студент), который будет наследовать от класса User,
подобно тому, как это сделано в теоретической части урока.
 Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
  year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
  с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
  который будет выводить текущий курс студента (от 1 до 5).
 */


// Расширение стандартных методов у объекта массива и тд
/*
Object.prototype.fff = function(){
  alert('Ура я создал свой   метод ко всем объектамм в этом мире!');
};
*/

function User(name, surname){
    this._name = name;
    this._surname = surname;
}


//Организуем set и get методы класса User

User.prototype.getName = function(){
  return this._name;
};

User.prototype.setName = function(name){
  this._name = name;
};

User.prototype.getSurname = function(){
    return this._surname;
};

User.prototype.setSurname = function(surname){
  this._surname = surname;
};

User.prototype.getFullName = function(){
  return this._name + ' ' + this._surname;
};

//Наследование от класса User
function Student(name, surname, year){
    /*
    //тоже самое
        this._name = name;
        this._surname = surname;
        */
    User.apply(this, arguments);
    this._year = year;

}

Student.prototype = Object.create(User.prototype);

Student.prototype.getKours = function(){

    let date = new Date();
    let now = new Date().getTime();
    let old = date.setFullYear(this._year);
    let res = Math.round((now - old )/ (1000*60*60*24));
    let kurs = res/365;

    switch(kurs){
        case 1: {
            return('1 курс');
            break;
        }
        case 2: {
            return('2 курс');
            break;
        }
        case 3: {
            return('1 курс');
            break;
        }
        case 4: {
            return('1 курс');
            break;
        }
        default:
            return ' Не студент';
    }
    return kurs;
};




/*
let petro = new User('Петр', 'Филипович');
alert(petro.getFullName());
alert(petro.getName());
alert(petro.getSurname());

petro.setName('Иван');
alert(petro.getName());

petro.setSurname('Какашкин');
alert(petro.getSurname());

alert(petro.getFullName());
*/


let student = new Student('Яша', 'Абромовичиус', 2017);
alert(student.getFullName());
alert(student.getName());
alert(student.getSurname());
alert(student.getKours());


