const animals = [
  {
    name: 'Timon',
    weight: 45,
    isHealthy: true,
    isHungry: false,
    warden: {
      name: 'Arcadii',
      age: 72,
    },
  },
  {
    name: 'Pumba',
    weight: 150,
    isHealthy: false,
    isHungry: true,
    warden: {
      name: 'Jora',
      age: 33,
    },
  },
  {
    name: 'Mufasa',
    weight: 120,
    isHealthy: true,
    isHungry: false,
    warden: {
      name: 'Tolik',
      age: 25,
    },
  },
]

const listOfWardens = [
  { name: 'Arcadii', age: 72 },
  { name: 'Jora', age: 33 },
  { name: 'Tolik', age: 25 },
]

const start = document.getElementById('myBtn').addEventListener('click', zoo)

function zoo() {
  const welcome = prompt(
    'Welcome to our Zoo. Enter the function you would like to perform: 1) Add, 2)Delete, 3)Find, 4)Change Warden, 5)Add color, 6)Show full list'.toLowerCase()
  )

  switch (welcome) {
    case 'add':
      addAnimal(animals)
      break
    case 'delete':
      deleteAnimal(animals)
      break
    case 'find':
      findAnimal(animals)
      break
    case 'change warden':
      changeWarden(animals)
      break
    case 'add color':
      addColor(animals)
      break
    case 'show full list':
      fullList(animals)
      break
    default:
      alert('Please enter valid function')
      break
  }
}

const addAnimal = (arr) => {
  const nameOfAnimal = prompt("Enter animal's name you would like to add")
  const weightOfAnimal = prompt("Enter animal's weight")
  const health = prompt(
    'Is the animal in good condition? Please answer: Yes/No'
  ).toLowerCase()
  alert('Your animal successfully added')
  return arr.push({
    name: nameOfAnimal,
    weight: weightOfAnimal,
    isHealthy: health === 'yes' ? true : false,
    isHungry: true,
    warden: listOfWardens[Math.floor(Math.random() * listOfWardens.length)],
  })
}

const findAnimal = (arr) => {
  const nameOfAnimal = prompt('Enter a name!')
  const validNameCheck = arr.filter(
    (v) => v.name.toLowerCase() === nameOfAnimal
  )[0]
  if (!validNameCheck) return alert('sorry, we got none')
  const {
    name,
    isHealthy,
    warden: { name: wardenName, age },
  } = validNameCheck
  alert(
    `Here's what we have according to your request: Name is ${name}, Health check: ${
      isHealthy ? 'healthy' : 'sick'
    }, warden: ${wardenName}, age: ${age}`
  )
}

const deleteAnimal = (arr) => {
  const whichToDelete = prompt(
    'Enter the name of the animal you would like to evict?'
  ).toLowerCase()
  arr.forEach((v, index) =>
    v.name.toLowerCase() === whichToDelete ? arr.splice(index, 1) : v
  )
  alert('The required animal has been evicted=(')
}

const fullList = (arr) => {
  arr.forEach((v, i) =>
    alert(
      `The details of the ${i + 1} animal: ${v.name}, ${
        v.isHealthy ? 'healty' : 'Sick'
      }, ${v.isHungry ? 'Not Hungry' : 'Hungry'}. His warden is ${
        v.warden.name
      } age: ${v.warden.age}`
    )
  )
}

const changeWarden = (arr) => {
  const animalName = prompt(
    'Which animal would you like to change his warden for?'
  ).toLowerCase()
  let {
    warden: { name: animalsWarden },
  } = arr.filter((v) => v.name.toLowerCase() === animalName)[0]
  const [firstWarden, secondWarden] = listOfWardens.filter(
    (v) => v.name !== animalsWarden
  )
  const newWarden = prompt(
    `His current warden is ${animalsWarden}. Who would you like to assign ${firstWarden.name} or ${secondWarden.name}? Please enter a name of your choice`
  ).toLowerCase()
  const newWardenDetails = listOfWardens.filter(
    (v) => v.name.toLowerCase() === newWarden
  )[0]
  alert('New warden has been assigned')
  arr.map((v) =>
    v.name.toLowerCase() === animalName ? (v.warden = newWardenDetails) : v
  )
}

const addColor = (arr) => {
  const animalName = prompt(
    'Which animal is going to change color?'
  ).toLowerCase()
  const color = prompt('What color is it going to have?')
  arr.map((v) => (v.name.toLowerCase() === animalName ? (v.color = color) : v))
}
