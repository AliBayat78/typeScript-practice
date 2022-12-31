"use strict";
// let firstName: string = 'Ali'
// let lastName: string = 'Bayat'
// let age: number = 23
// let isMale: boolean = true
// function totalLength(x: (string | any[]), y: (string | any[])) {
//   let total = x.length + y.length;
//   if (x instanceof Array) {
//     x.push('Ali')
//   }
//   if (x instanceof String) {
//     x.substring(0)
//   }
//   return total
// }
// var animal = {
//   name: "dog"
// }
// totalLength([123], "mamad")
// function add(a: string, b: string): string
// function add(a: number, b: number): number
// function add(a: any, b: any): any {
//   return a + b
// }
// let result = add('s', 'ya')
// let result2 = add(2, 5)
// console.log(result, result2)
// interface Person {
//   name: string
//   family: string
//   age: number
//   email?: string
//   color: Colors
// }
// enum Colors {
//   Red = '#2134',
//   Yellow = '#sd12312',
// }
// function showPerson(person: Person) {
//   document.write(person.name + ' s')
// }
// let ali: Person = {
//   name: 'ali',
//   family: 'bayat',
//   age: 23,
//   color: Colors.Red,
// }
// showPerson(ali)
// enum Days {
//   shanbe = 2,
//   yekshanbe = 22,
//   doshanbe = 0,
//   seshanbe = 'salam',
// }
// console.log(Days.shanbe)
// console.log(Days.seshanbe)
// console.log(Colors.Yellow)
// function Login(login: { username: string; password: string }) {
//   console.log(login.username + ' ' + login.password)
// }
// let information = {
//   username: 'Ali',
//   password: 'Bayat',
// }
// Login(information)
class Person {
    constructor(name, family) {
        this.name = name;
        this.family = family;
    }
    fullName() {
        return this.name + ' ' + this.family;
    }
}
Person.personId = 1;
let newPerson = new Person('Ali', 'Bayat');
newPerson.name = 'mehdi';
console.log(newPerson.fullName());
console.log(newPerson.name);
console.log(Person.personId);
