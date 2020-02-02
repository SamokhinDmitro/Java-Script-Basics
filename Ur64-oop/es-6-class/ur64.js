/*
1.Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

 Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
 var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.
 */

/*
class Worker{
    constructor(name, surname, rate, days=2){
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName(){
        return this._name;
    }

    setName(name){
        this._name = name;
    }

    getSurname(){
        return this._surname;
    }

    setSurname(surname){
        this._surname = surname;
    }

    getRate(){
        return this._rate;
    }

    setRate(rate){
        this._rate = rate;
    }

    getDays(){
        return this._days;
    }

    setDays(days){
        this._days = days;
    }

    getSalary(){
        return this._rate * this._days;
    }

}

let ivan = new Worker('Иван', 'кепк', 5, 20);
alert(ivan.getName());
alert(ivan.getSurname());
alert(ivan.getRate());
alert(ivan.getDays());
alert(ivan.getSalary());
//ivan.setName('Неиван');
//alert(ivan.getName());
*/

////////////

/*
НАСЛЕДОВАНИЕ
 */

/*
Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
 */

class User{
    constructor(name='**', surname){
        this._name = name;
        this._surname = surname;
    }

    getName(){
        return this._name;
    }

    setName(name){
        this._name = name;
    }

    getSurname(){
        return this._surname;
    }

    setSurname(surname){
        this._surname = surname;
    }

    getFullName(){
        return `${this._name} ${this._surname}`;
    }
}

class Student extends User{
    constructor(name, surname, year){
        super(name, surname);
        this._year = year;
    }

    getYear(){
        return this._year;
    }

    setYear(year){
        this._year = year;
    }

    /*
    Полиморфизм изменение родительского метода
     */

    getName() {
        return super.getName() + 'zzz';
    }



    getKours(){
        let date = new Date();
        let now = new Date().getTime();
        let old = date.setFullYear(this._year);
        //alert(now);
        //alert(old);

        let res = Math.round((now - old)/(1000*60*60*24)); //количество дней
        let kurs = res / 365;

        switch (kurs) {
            case 1: {
                alert('1 курс');
                break;
            }
            case 2: {
                alert('2 курс');
                break;
            }
            case 3: {
                alert('3 курс');
                break;
            }
            case 4: {
                alert('4 курс');
                break;
            }
            default:{
                alert('Не студент');
            }

        }
    }
}


/*
let ivan = new User('Иван','Ивченко');
alert(ivan.getName());
alert(ivan.getSurname());
alert(ivan.getFullName());
*/

let stud = new Student('Иван', 'Иванов', 2016);
alert(stud.getName());
alert(stud.getFullName());
alert(stud.getYear());
stud.getKours();
stud.setYear('2025');
alert(stud.getYear());
stud.getKours();
//stud.setName('неиван');
//alert(stud.getName());
//alert(stud.getFullName());
