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
function add(a: string, b: string): string

function add(a: number, b: number): number
function add(a: any, b: any): any {
  return a + b
}

let result = add('s', 'ya')
let result2 = add(2, 5)
console.log(result, result2)
