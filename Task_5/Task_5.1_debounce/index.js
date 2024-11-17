function debounce(func, delay) {
  let timeout = null

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

const debouncedFunction = debounce(() => {
  console.log('Вызвана функция с задержкой')
}, 2000)

debouncedFunction()
debouncedFunction() // Этот вызов должен сбросить таймер и предотвратить мгновенный вызов функции.
