//first task
//approach 1
const arr = [1, 2, 3, 1, 2]

const unique = (arr) => Array.from(new Set(arr))

console.log(unique(arr))

//approach 2
const unique2 = (arr) => {
  const output = []
  for (let i of arr) {
    output.includes(i) ? i : output.push(i)
  }
  return output
}

console.log(unique2(arr))

//second task

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 4]
//approach 1
const compareArr = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) return false
  //фильтруем основываясь на контенте второго массива и сравниваем их длину, если длина одинаковая, значит массивы идентичны
  return (
    firstArr.filter((v) => secondArr.includes(v)).length === firstArr.length
  )
}

//approach 2
const compareArr2 = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) return false
  const sortedSecondArr = secondArr.sort((a, b) => a - b)
  return firstArr
    .sort((a, b) => a - b)
    .every((v, i) => v === sortedSecondArr[i])
}
console.log(compareArr(arr1, arr2))
console.log(compareArr2(arr1, arr2))

// third task

const arr1 = [10, 20, 30, 40, 50]

//approach 1
const reverseArr = (arr) => arr.sort((a, b) => b - a)

console.log(reverseArr(arr1))

//approach 2
const reverseArr2 = (arr) => {
  const output = []
  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i])
  }
  return output
}

console.log(reverseArr2(arr1))

//tasks from the presentation
let data = [
  {
    price: 324,
    type: 2,
    area: 375,
    presence: true,
    name: 'Aria',
    id: 41098,
  },
  {
    price: 660,
    type: 4,
    area: 451,
    presence: true,
    name: 'Bayard',
    id: 48467,
  },
  {
    price: 337,
    type: 4,
    area: 525,
    presence: true,
    name: 'Bellehurst',
    id: 49340,
  },
  {
    price: 343,
    type: 4,
    area: 538,
    presence: false,
    name: 'Brookview',
    id: 52504,
  },
  {
    price: 423,
    type: 2,
    area: 506,
    presence: true,
    name: 'Dumont Place',
    id: 41172,
  },
  {
    price: 257,
    type: 4,
    area: 379,
    presence: false,
    name: 'Halstead',
    id: 49952,
  },
  {
    price: 230,
    type: 2,
    area: 468,
    presence: true,
    name: 'Hillgrove',
    id: 41166,
  },
  {
    price: 183,
    type: 4,
    area: 451,
    presence: true,
    name: 'Kempston Place',
    id: 48471,
  },
  {
    price: 674,
    type: 2,
    area: 522,
    presence: true,
    name: 'Overlook at Queen Creek',
    id: 48470,
  },
  {
    price: 450,
    type: 2,
    area: 373,
    presence: true,
    name: 'Reserve at Wildwood',
    id: 50316,
  },
  {
    price: 795,
    type: 1,
    area: 366,
    presence: true,
    name: 'Reverie on Cumberland',
    id: 48465,
  },
  {
    price: 550,
    type: 4,
    area: 376,
    presence: true,
    name: 'Riverside',
    id: 41080,
  },
  {
    price: 190,
    type: 1,
    area: 367,
    presence: true,
    name: 'Serenade',
    id: 41168,
  },
  {
    price: 589,
    type: 4,
    area: 368,
    presence: false,
    name: 'The Grove',
    id: 40912,
  },
  {
    price: 330,
    type: 2,
    area: 368,
    presence: true,
    name: 'Woodwinds at New Providence',
    id: 41086,
  },
  {
    price: 299,
    type: 2,
    area: 455,
    presence: true,
    name: 'Canopy at Hudson Bend',
    id: 51105,
  },
  {
    price: 263,
    type: 3,
    area: 481,
    presence: true,
    name: 'Carmel',
    id: 41193,
  },
  {
    price: 169,
    type: 1,
    area: 454,
    presence: true,
    name: 'Estates of Flintrock',
    id: 41060,
  },
  {
    price: 222,
    type: 1,
    area: 483,
    presence: true,
    name: 'Fairview Heights',
    id: 41192,
  },
  {
    price: 385,
    type: 4,
    area: 448,
    presence: false,
    name: 'Headwaters',
    id: 53168,
  },
  {
    price: 180,
    type: 2,
    area: 447,
    presence: true,
    name: 'Highlands at Mayfield Ranch ',
    id: 50235,
  },
  {
    price: 570,
    type: 4,
    area: 448,
    presence: true,
    name: 'Highpointe',
    id: 41154,
  },
  {
    price: 690,
    type: 3,
    area: 480,
    presence: true,
    name: 'Lagos',
    id: 41198,
  },
  {
    price: 280,
    type: 3,
    area: 446,
    presence: false,
    name: 'Mockingbird Park',
    id: 51381,
  },
  {
    price: 133,
    type: 1,
    area: 446,
    presence: false,
    name: 'Mockingbird Park',
    id: 51381,
  },
  {
    price: 530,
    type: 1,
    area: 448,
    presence: true,
    name: 'Saratoga Hills',
    id: 41019,
  },
  {
    price: 577,
    type: 4,
    area: 455,
    presence: true,
    name: 'Summit at Lake Travis',
    id: 41061,
  },
  {
    price: 290,
    type: 4,
    area: 481,
    presence: false,
    name: 'Vine Creek',
    id: 51382,
  },
  {
    price: 150,
    type: 1,
    area: 443,
    presence: true,
    name: 'Vista Vera',
    id: 49408,
  },
  {
    price: 453,
    type: 3,
    area: 411,
    presence: true,
    name: 'Lake Castleberry',
    id: 49596,
  },
]
//first one

const getHighestPriceOfType = (arr, type) => {
  const specificType = arr.filter((v) => v.type === type)
  return specificType.reduce((acc, val) =>
    acc.price > val.price ? acc : (acc = val)
  )
}

console.log(getHighestPriceOfType(data, 4))

//second one

//узнаём сколько всего типов
const typesAmount = (arr) => {
  const amountOfTypes = []
  arr.forEach((val) =>
    amountOfTypes.includes(val.type) ? val : amountOfTypes.push(val.type)
  )
  return amountOfTypes.sort()
}

//вычисляем сумму самого дорогого типа
const landCost = (arr, typeAmount) => {
  const sum = typeAmount.map(
    (v) =>
      (v = arr.reduce(
        (acc, val) => (val.type === v ? (acc += val.price) : acc),
        0
      ))
  )
  const topPrice = Math.max(...sum)
  return `The most expensive type is ${
    sum.indexOf(topPrice) + 1
  } with the price of ${topPrice}`
}

console.log(landCost(data, typesAmount(data)))

//third one

const findLand = (minPrice, maxPrice, minArea, maxArea) => {
  const filteredLands = data.filter(
    (val) =>
      val.price >= minPrice &&
      val.price <= maxPrice &&
      val.area >= minArea &&
      val.area <= maxArea
  )
  return filteredLands.length
    ? filteredLands
    : "Sorry, didn't find anything according to your request"
}

console.log(findLand(150, 350, 300, 376))

// the task from the class

const arr = [43, 54, 12, 'text', 'TeXt', 54, '54', 0, false, 'car', 'CAR', 43]

const count = (arr) => {
  const output = []
  const lowerCase = arr.map((v) => {
    if (typeof v === 'string' && Number(v)) return Number(v)
    if (typeof v === 'string') return v.toLowerCase()
    else return v
  })
  const unique = Array.from(new Set(lowerCase))
  for (let p of unique) {
    let counter = 0
    for (let j of lowerCase) {
      j === p ? counter++ : counter
    }
    output.push({ value: p, counter: counter })
  }

  return output
}

const biggestCounter = (func) =>
  func.reduce((acc, val) => (acc.counter > val.counter ? acc : (acc = val)))

console.log(count(arr), biggestCounter(count(arr)))
