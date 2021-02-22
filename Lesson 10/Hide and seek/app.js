const chaisingItem = document.querySelector('.bubble')

const moveBubble = (e) => {
  if (e.pageX % 2) {
    chaisingItem.style.backgroundColor = 'red'
  } else if (e.pageY % 2) {
    chaisingItem.style.backgroundColor = 'black'
  } else {
    chaisingItem.style.backgroundColor = 'aquamarine'
  }
  chaisingItem.style.top = e.pageY + 10 + 'px'
  chaisingItem.style.left = e.pageX + 20 + 'px'
}

window.addEventListener('mousemove', moveBubble)
