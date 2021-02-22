const resetBtn = document.querySelector('.reset')
const selectTag = document.getElementById('dropdown')
const palitra = document.querySelector('.colors')
const figures = [...document.querySelector('.figure').children]

//painting
const painting = () => {
  palitra.addEventListener('click', (e) => {
    figures.forEach((v) => {
      let currentColor = e.target.classList[1] // className consists of two names 'color' and 'actual color', selecting second to reflect the color

      if (v.style.display === 'block') v.style.backgroundColor = currentColor
    })
  })
}
//reset button
const resetFunc = () => {
  resetBtn.addEventListener('click', () => {
    figures.forEach((v) => {
      v.style.display === 'block' ? (v.style.backgroundColor = 'white') : v
    })
  })
}
//figure selection
const figureDisplay = () => {
  selectTag.addEventListener('change', () => {
    let current = selectTag.value

    figures.forEach((v) => {
      if (v.className == current) v.style.display = 'block'
      else {
        v.style.display = 'none'
        v.style.backgroundColor = 'white'
      }
    })
  })
}
figureDisplay()
painting()
resetFunc()
