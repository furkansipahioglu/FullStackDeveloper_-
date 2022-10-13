/* ES6 Const & Let */
var nameVar = "Kamil KAPLAN";
var nameVar = "Melih KAPLAN";
console.log(nameVar);

let nameLet = "Kamil KAPLAN";
//let nameLet = "Melih KAPLAN";
console.log(nameLet);

const nameConst = "Kamil KAPLAN";
//nameConst = "Kamil";
console.log(nameConst);

let age = 29;


function getAge() {
    let name = "Kamil";
    let age = 29;
    console.log("fuction scope : ", name, age);
}
getAge();

/* ES6 Arrow Functions */

//ES5
function merhabaES5() {
    console.log("merhabaES5");
}

var helloES5 = function () {
    console.log("helloES5");
}

var multiES5 = function (x, y) {
    return x + y;
}

/* id, name, surname */
var getUser = function (id, name, surname) {
    return {
        id, name, surname
    }
}

// ES6
let helloES6 = () => {
    console.log("helloES6");
}

let merhabaES6 = () => console.log("merhabaES6");
let multiES6 = (x, y) => x + y;
let multiCarpmaES6 = (x, y) => { return x * y };
let getUserES6 = (name, surname) => ({
    name: name,
    surname: surname
});

helloES5();
merhabaES5();
console.log(multiES5(5, 7));
var userObj = getUser(1, "Said", "Sertkaya");
console.log(`${userObj.id} : ${userObj.name} ${userObj.surname}`);

helloES6();
merhabaES6();
console.log(multiES6(5, 7));
console.log(multiCarpmaES6(5, 7));
var userObj2 = getUserES6("Said", "Sertkaya");
console.log(userObj2);

const phones = [
    { name: "General Mobile", price: 3000 },
    { name: "Iphone 14", price: 25000 },
    { name: "Redmi Note 8", price: 8000 },
    { name: "Iphone X", price: 5000 }
];

let priceES6 = phones.map(phone => phone.price)
console.log(priceES6);

let priceES5 = phones.map(function(phone){
    return phone.price;
})
console.log(priceES5);

let filterES5 = phones.filter(function(phone){
    return phone.price >= 5000;
})
console.log(filterES5);

let filterES6 = phones.filter(phone => phone.price >= 5000);
console.log(filterES6);

/* ES6 This */
const users = {
    fullName: "Ceyda Güleryüz",
    email: "ceydaguleryuz@gmail.com",
    city: "İstanbul",
    roles: ["A", "U"],

    getRoles: function () {
        console.log(this.fullName);
        console.log(this.roles);

        /* ES6 */
        this.roles.forEach((item) => {
            console.log(item);
            console.log(this.fullName);
        })

        /* ES5 */
        this.roles.forEach(function (item) {
            console.log(item);
        })
    }
};
users.getRoles();

let intArr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < intArr.length; i++) {
    sum += intArr[i];
}
console.log(sum);

const addES5 = function (arr) {
    console.log(arguments);
    let total = 0;
    arguments[0].map(function (e) {
        total += e;
    });
    return total;
}
console.log(addES5(intArr));