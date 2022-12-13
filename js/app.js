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
      tile.classList.add('tile')
      tile.innerText = ''
      document.getElementById('board').appendChild(tile)
    }
  }

  document.addEventListener('keyup', (e) => {
    if (gameOver) return
    if ('KeyA' <= e.code && e.code <= 'KeyZ'){
      if(col < width){
        let currTile = document.getElementById(row.toString() + '-' + col.toString())
        if (currTile.innerText == ""){
          currTile.innerText = e.code[3]
          col += 1
        }
      }
    }
    else if(e.code == 'Backspace'){
      if (0 < col && col <= width){
        col -= 1
      }
      let currTile = document.getElementById(row.toString() + '-' + col.toString())
      currTile.innerText = ''
    }

    else if (e.code = 'Enter'){
      update()
      row += 1 // start new row
      col = 0 // start at 0 for new row
    }

    if (!gameOver && row == height){
      gameOver = true
      document.getElementById('answer').innerText = word
    }
  })
}

function update(){
  let correct = 0
  let letterCount = {}
  for (let i = 0; i < word.length; i++){
    if (letterCount[letter]){
      letterCount[letter] += 1
    }
    else {
      letterCount[letter] = 1
    }
  }
  for (let c = 0; c < width; c++){
    let currTile = document.getElementById(row.toString() + '-' + c.toString())
    let letter = currTile.innerText
    if (word[c] == letter){
      currTile.classList.add('correct')
      correct += 1
    }
    else if (word.includes(letter)){
      currTile.classList.add('present')
    }
    else {
      currTile.classList.add('absent')
    }

    if (correct == width){
      gameOver = true
    }
  }
}