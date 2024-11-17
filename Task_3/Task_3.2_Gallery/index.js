const sliderImg = document.querySelector('.slider-img')
const nextBtn = document.querySelector('#next')
const backBtn = document.querySelector('#back')

let num = 0

nextBtn.addEventListener('click', () => {
  if (num >= 0 && num != 300) {
    num += 100
    sliderImg.style.transform = `translateX(-${num}%)`
    console.log(num)
  }
})

backBtn.addEventListener('click', () => {
  if (num != 0) {
    num -= 100
    sliderImg.style.transform = `translateX(-${num}%)`
    console.log(num)
  }
})

setInterval(() => {
  if (num != 300) {
    nextBtn.click()
  }
}, 2000)
