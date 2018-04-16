// var person = new Object();
// // person.prototype.name = "lisongwei";
// person.prototype.sayHello = function (name) {
//     console.log("hello" + name)
// }
//
// person.sayHello("liangtao");

var person = new Object();
Object.prototype.name = this.name;
Object.prototype.sayHello = function (name) {
    console.log("hello" +" " + name)
};
person.name = "lisongwei";
person.sayHello(person.name);
