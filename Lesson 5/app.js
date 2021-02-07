//first task

const data = 3
const valueToFill = 'a'

const fillArray = (length, content) => {
  return Array.from({ length: length }, (_, i) => i).fill(content)
}

console.log(fillArray(data, valueToFill))

//second task
const data = [0, 1, false, 2, undefined, '', 3, null]

const cleanTrash = (arr) => arr.filter((v) => v)

console.log(cleanTrash(data))

//third task

const usersAge = {
  ivanov: '19',
  petrov: '17',
  sidorov: '21',
}

const spread = (obj) => {
  const youngsters = []
  const adults = []
  Object.keys(obj).forEach((v) =>
    obj[v] >= 18
      ? adults.push({ name: v, age: obj[v] })
      : youngsters.push({ name: v, age: obj[v] })
  )

  return { youngsters, adults }
}

const { youngsters, adults } = spread(usersAge)
console.log(youngsters, adults)

//additional task
const usersGrades = {
  ivanov: '1',
  petrov: '20',
  sidorov: '15',
}

const grades = {
  10: 'Слабенький',
  15: 'Хорошист',
  20: 'Отличник',
}

const performance = (obj, grade) => {
  const gradesDefinition = Object.keys(grade)
  const output = []
  Object.keys(obj).forEach((v) => {
    if (obj[v] <= gradesDefinition[0])
      return output.push({
        name: v,
        grade: obj[v],
        performance: grade[gradesDefinition[0]],
      })
    if (obj[v] > gradesDefinition[0] && obj[v] < gradesDefinition[2])
      return output.push({
        name: v,
        grade: obj[v],
        performance: grade[gradesDefinition[1]],
      })
    if (obj[v] >= gradesDefinition[2])
      return output.push({
        name: v,
        grade: obj[v],
        performance: grade[gradesDefinition[2]],
      })
  })

  return output
}

console.log(performance(usersGrades, grades))
