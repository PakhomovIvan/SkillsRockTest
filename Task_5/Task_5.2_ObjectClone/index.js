const deepClone = (obj) => {
  // return { ...obj } // При таком копировании, сохранятся ссылка на вложенные объекты. (Мутация объектов)
  // return Object.assign({}, obj) // При таком, аналогично.
  return JSON.parse(JSON.stringify(obj)) // Копирует в том числе вложенные объекты.
}

const original = {
  name: 'John',
  address: {
    city: 'New York',
    country: 'USA',
  },
}

const copy = deepClone(original)

copy.address.city = 'Los Angeles'

console.log(original.address.city) // New York (оригинальный объект не должен измениться)
console.log(copy.address.city) // Los Angeles
