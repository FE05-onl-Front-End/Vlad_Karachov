//slider for quotes
var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName('mySlides')
  var dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}
// mobile menu
function openMobMenu() {
  document.getElementById('mobile-menu').style.width = '100%'
}

function closeMobMenu() {
  document.getElementById('mobile-menu').style.width = '0%'
}

// slider for employees
var employeeIndex = 1
showEmployees(employeeIndex)
function plusEmployee(n) {
  showEmployees((employeeIndex += n))
}

function showEmployees(n) {
  var i
  var employees = document.getElementsByClassName('employees-card-slider')

  if (n > employees.length) {
    employeeIndex = 1
  }
  if (n < 1) {
    employeeIndex = employees.length
  }
  for (i = 0; i < employees.length; i++) {
    employees[i].style.display = 'none'
  }

  employees[employeeIndex - 1].style.display = 'block'
}

// slider for cards

var cardIndex = 1
showCards(cardIndex)

function plusCard(n) {
  showCards((cardIndex += n))
}

function currentCard(n) {
  showCards((cardIndex = n))
}

function showCards(n) {
  var i
  var cards = document.getElementsByClassName('cards-item-slider')
  var dots = document.getElementsByClassName('card-dots')
  if (n > cards.length) {
    cardIndex = 1
  }
  if (n < 1) {
    cardIndex = cards.length
  }
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }

  cards[cardIndex - 1].style.display = 'block'
  dots[cardIndex - 1].className += ' active'
}
