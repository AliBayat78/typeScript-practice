class KeyValuePair<TKey, TValue> {
  constructor(public key: TKey, public value: TValue) {}
}

class KeyValuePairPrinter<T, U> {
  constructor(private pairs: KeyValuePair<T, U>[]) {}

  print() {
    for (let i of this.pairs) {
      console.log(`${i.key} : ${i.value}`)
    }
  }
}
