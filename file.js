"use strict";
// let firstName: string = 'Ali'
// let lastName: string = 'Bayat'
// let age: number = 23
// let isMale: boolean = true
Object.defineProperty(exports, "__esModule", { value: true });
function showPerson(person) {
    document.write(person.name + ' s');
}
let ali = {
    name: 'ali',
    family: 'bayat',
    age: 23,
};
showPerson(ali);
