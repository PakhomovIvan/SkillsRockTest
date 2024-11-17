const fetchRandomUser = async () => {
  const USERS_COUNT = 10
  const API_URL = `https://randomuser.me/api/?results=${USERS_COUNT}`

  try {
    const res = await fetch(API_URL)
    const users = await res.json()
    renderList(users.results)
  } catch (error) {
    console.log(error.message)
    renderList(null, error.message)
  }
}

const renderList = (users, error) => {
  const loader = document.querySelector('#loader')
  const usersDiv = document.querySelector('.users')

  if (!error) {
    loader.remove()

    users.map((e) => {
      const user = document.createElement('div')
      user.className = 'user'
      user.innerHTML = `<img src=${e.picture.medium} alt="Photo" />
                      <p>${e.name.title} ${e.name.first} ${e.name.last}</p>
                      <a href="mailto:${e.email}">${e.email}</a>`
      usersDiv.appendChild(user)
    })
  } else {
    usersDiv.innerHTML = error
  }
}

fetchRandomUser()
