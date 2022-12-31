"use strict";
// let firstName: string = 'Ali'
// let lastName: string = 'Bayat'
// let age: number = 23
// let isMale: boolean = true
var Colors;
(function (Colors) {
    Colors["Red"] = "#2134";
    Colors["Yellow"] = "#sd12312";
})(Colors || (Colors = {}));
function showPerson(person) {
    document.write(person.name + ' s');
}
let ali = {
    name: 'ali',
    family: 'bayat',
    age: 23,
    color: Colors.Red,
};
showPerson(ali);
var Days;
(function (Days) {
    Days[Days["shanbe"] = 2] = "shanbe";
    Days[Days["yekshanbe"] = 22] = "yekshanbe";
    Days[Days["doshanbe"] = 0] = "doshanbe";
    Days["seshanbe"] = "salam";
})(Days || (Days = {}));
console.log(Days.shanbe);
console.log(Days.seshanbe);
console.log(Colors.Yellow);
