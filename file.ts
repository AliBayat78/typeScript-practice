function clone<T>(value: T): T {
  let serialized = JSON.stringify(value)
  return JSON.parse(serialized)
}

clone(222)

let pair1 = new KeyValuePair<string, number>('salam', 23)
let pair2 = new KeyValuePair<number, Date>(22, new Date(Date.now()))
let pair3 = new KeyValuePair<string, number>('asd', 22)
