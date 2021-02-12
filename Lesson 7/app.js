const closure = () => {
  const output = []
  return (arrLength) => {
    while (output.length !== arrLength) {
      let rand = Math.round(Math.random() * (arrLength - 1) + 1)
      output.includes(rand) ? output : output.push(rand)
    }
    return output.sort((a, b) => a - b)
  }
}

const numberGenerator = closure()
console.log(numberGenerator(10))
