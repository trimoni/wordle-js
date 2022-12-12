let height = 6
let width = 5

let row = 0
let col = 0

let gameOver = false
let word = 'SQUID'

window.onload = function(){
  initialize()
}

function initialize(){
  // create the game board
  for (let r = 0; r < height; r++){
    for (let c = 0; c < width; c++){
      // <span id='0-0' class='tile' ></span>
      let tile = document.createElement('span')
      tile.id = r.toString() + '-' + c.toString()
      tile.classList('tile')
      tile.innerText = 'p'
      document.getElementById('board').appendChild(tile)
    }
  }
}