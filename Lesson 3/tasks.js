const number1 = prompt('Enter a number between 5 - 10')
const number2 = prompt('Enter a number between 300-1000')
// first task

treeDown(number1)
treeUp(number1)
console.log(divisor(number2))
fullTree(number1)

function treeDown(num) {
  for (let i = 1; i <= num; i++) {
    console.log('*'.repeat(i))
  }
}

// second task

function treeUp(num) {
  for (let i = num; i > 0; i--) {
    console.log('*'.repeat(i))
  }
}

//third task
function fullTree(num) {
  for (let i = 1; i <= num; i += 2) {
    console.log(`${' '.repeat(num - i / 2)}${'*'.repeat(i)}`)
  }
}

//forth task

function divisor(num, counter = 0) {
  if (num < 50) return `Кол-во ${counter}, частное ${num}`
  return divisor(num / 2, (counter += 1))
}
