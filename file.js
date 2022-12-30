"use strict";
let firstName = 'Ali';
let lastName = 'Bayat';
let age = 23;
let isMale = true;
function totalLength(x, y) {
    let total = x.length + y.length;
    if (x instanceof Array) {
        x.push('Ali');
    }
    if (x instanceof String) {
        x.substring(0);
    }
    return total;
}
var animal = {
    name: "dog"
};
totalLength([123], "mamad");
