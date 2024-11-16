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

// console.log(isPalindrome('Привет'))
// console.log(isPalindrome('А роза упала на лапу Азора'))
