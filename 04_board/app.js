const board = document.getElementById('board')
const SQUARE_NUMBERS = 500
const colors = ['aqua', 'lime', 'silver', 'fuchsia', 'yellow', 'teal']

for (let i = 0; i < SQUARE_NUMBERS; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getColor()
  element.style.background = color
  element.style.boxShadow = `0 0 5px ${color}, 0 0 50px ${color}`
} 

function removeColor(event) {
  const element = event.target
  element.style.background = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
