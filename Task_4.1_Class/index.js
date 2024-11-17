class Calculator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    return b != 0 ? a / b : console.log('Error! b = 0')
  }
}

const instance = new Calculator()

console.log(instance.add(10, 5)) // 15
console.log(instance.add(1000, 1000)) // 2000

console.log(instance.subtract(10, 5)) // 5
console.log(instance.subtract(100, 50)) // 50

console.log(instance.multiply(10, 5)) // 50
console.log(instance.multiply(100, 100)) // 10000

console.log(instance.divide(10, 5)) // 2
console.log(instance.divide(10, 0)) // Error! b = 0
