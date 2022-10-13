/* ES6 CLASS */

/* ES5 */
var ES5Person = {
    name: ""
} // obje
var ES5Person2 = function () { } // fonksiyon olarak class'lar oluşur.

// nesne -object
const ES5p = new ES5Person2();
console.log(ES5p)

/* ES6 */
class ES6Person {
    constructor(name = "Kamil", year = new Date().getFullYear()) {
        this.name = name;
        this.year = year;
        console.log("constructor çalıştı")
    }

    getAgeOfYear() {
        return new Date().getFullYear() - this.year;
    }

    greeting(text) {
        return `${text}, Benim adım ${this.name}`;
    }
}

// nesne - object
var es6p = new ES6Person();
var es6p2 = new ES6Person("Harun Reşit", 1996);
console.log(es6p);
console.log(es6p2.getAgeOfYear(), es6p2.greeting("selam"));

class ES6Person {
    constructor(name = "Kamil", year = new Date().getFullYear()) {
        this.name = name;
        this.year = year;
        console.log("constructor çalıştı")
    }

    getAgeOfYear() {
        return new Date().getFullYear() - this.year;
    }

    greeting(text) {
        return `${text}, Benim adım ${this.name}`;
    }
}

class Student extends ES6Person {
    constructor(name, year, lessons) {
        super(name, year);
        this.lessons = lessons;
    }

    teaching() {
        return "Öğreniyorum";
    }

    greeting(text) {
        return `${super.greeting(text)} Dersim : ${this.lessons}`;
    }
}

const ES6pStudent = new Student("Berkay Sivri", 1995, "React");
console.log(ES6pStudent.greeting("Selam"));

class Teacher extends ES6Person {
    constructor(name, year, departmant) {
        super(name, year);
        this.departmant = departmant;
    }

    teach() {
        return "Öğrentiyorum";
    }

    greeting(text) {
        return `${super.greeting(text)}. Departmanım : ${this.departmant}`;
    }
}
const ES6pTeacher = new Teacher("Berkay Sivri", 1995, "Software");
console.log(ES6pTeacher.greeting("Selam"));