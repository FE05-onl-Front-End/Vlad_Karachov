const popup = document.querySelector('.modal')
const btn = document.querySelector('.btn.add-user')
const xBtn = document.querySelector('.close')
const btnClose = document.querySelector('.btn.close')
const btnOk = document.querySelector('.btn.ok')
const input = document.querySelectorAll('input[type="text"]')
const validation = document.querySelectorAll('.validation')
const [input1, input2, input3] = validation
const [firstName, lastName, age] = input

document.addEventListener('click', function (event) {
  if (event.target.contains(popup)) {
    input.forEach((v) => (v.value = ''))
    validation.forEach((v) => (v.style.display = 'none'))
    popup.style.display = 'none'
  }
})
btn.addEventListener('click', () => {
  popup.style.display = 'block'
})

xBtn.addEventListener('click', () => {
  popup.style.display = 'none'
  input.forEach((v) => (v.value = ''))
  validation.forEach((v) => (v.style.display = 'none'))
})

btnClose.addEventListener('click', () => {
  popup.style.display = 'none'
  input.forEach((v) => (v.value = ''))
  validation.forEach((v) => (v.style.display = 'none'))
})

btnOk.addEventListener('click', () => {
  if (
    firstName.value === '' ||
    Number(firstName.value) ||
    firstName.value.length > 10
  ) {
    input1.style.display = 'block'
  } else if (
    lastName.value === '' ||
    Number(lastName.value) ||
    lastName.value.length > 10
  ) {
    input2.style.display = 'block'
  } else if (age.value > 135 || !Number(age.value)) {
    input3.style.display = 'block'
  } else {
    popup.style.display = 'none'
    data.push({
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
    })
    addNewUser(data)
    validation.forEach((v) => (v.style.display = 'none'))
    input.forEach((v) => (v.value = ''))
  }
})

// adding a new functionality

const data = [
  {
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40,
  },
  {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54,
  },
  {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24,
  },
]
const table = document.querySelector('.table')

const addAllUsers = (arr) => {
  arr.forEach((v) => {
    let newUser = document.createElement('tr')
    newUser.innerHTML = `<td>${v.firstName}</td>
    <td>${v.lastName}</td>
    <td>${v.age}</td>`

    table.append(newUser)
  })
}

const addNewUser = (arr) => {
  let newUser = document.createElement('tr')
  newUser.innerHTML = `<td>${arr[arr.length - 1].firstName}</td>
    <td>${arr[arr.length - 1].lastName}</td>
    <td>${arr[arr.length - 1].age}</td>`

  table.append(newUser)
}
addAllUsers(data)
