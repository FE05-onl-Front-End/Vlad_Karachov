const tabsArea = document.querySelector('.tabs')
const tabs = document.querySelectorAll('.tab-item')
const tabArea = document.querySelectorAll('.tab-area')
const content = document.querySelectorAll('.tab-content')
const clsBtn = document.querySelectorAll('span')

//loading the first tab on load
window.onload = () => {
  tabs[0].classList.add('active')
  content[0].style.display = 'block'
}
//switching tabs
tabsArea.addEventListener('click', (e) => {
  tabs.forEach((v, i) => {
    const isButton = e.target.nodeName === 'BUTTON'
    if (isButton && e.target.innerText == v.innerText) {
      content[i].style.display = 'block'
      tabs[i].classList.add('active')
    }
    if (isButton && e.target.innerText !== v.innerText) {
      content[i].style.display = 'none'
      tabs[i].classList.remove('active')
    }
  })
})

//deleting tabs
tabsArea.addEventListener('click', (e) => {
  clsBtn.forEach((v, i) => {
    if (tabsArea.children.length == 1) return
    if (e.target.id == v.id) {
      tabArea[i].remove()
    }
  })
})

//content display handler
const abba = [...tabsArea.children]
document.addEventListener('click', (e) => {
  tabs.forEach((v, i) => {
    v.innerText == abba[i].innerText.slice(0, abba[i].innerText.length - 2)
      ? v
      : (content[i].style.display = 'none')
  })
})
