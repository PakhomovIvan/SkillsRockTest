// Task 1:

const isPalindrome = (str) => {
  const strTrim = str.replace(/\s/g, '').toLowerCase()
  const strRev = str
    .replace(/\s/g, '')
    .split('')
    .reverse()
    .join('')
    .toLowerCase()
  return strTrim === strRev
}

console.log(isPalindrome('Привет'))
console.log(isPalindrome('А роза упала на лапу Азора'))

// Task 2:

const fizzBuzz = () => {
  let count = 0

  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      console.log('FizzBuzz')
    } else if (count % 3 === 0) {
      console.log('Fizz')
    } else if (count % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(count)
    }
    count += 1
  }
}

fizzBuzz()

// Task 3:

const chunkArray = (arr, size) => {
  const resArr = []

  for (let i = 0; i < Math.ceil(arr.length / size); i += 1) {
    resArr[i] = arr.slice(i * size, i * size + size)
  }

  return resArr
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
