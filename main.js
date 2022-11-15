var shallWe = document.querySelector('.shall-we')
var loadInputForm = document.querySelector('#loadInputForm')
var loadInput = document.querySelector('#loadInput')
var greetings = document.querySelector('.greetings')
var userNameForm = document.querySelector('#userNameForm')
var nameInput = document.querySelector('#nameInput')
var friendForm = document.querySelector('#friendForm')
var friend = document.querySelector('.friend')
var friendInput = document.querySelector('#friendInput')
var beginGame = document.querySelector('.begin')
var loadScreen = document.querySelector('.load')
var body = document.querySelector('body')
var main = document.querySelector('main')
var gameBoard = document.querySelector('.game-board')
var player1Info = document.querySelector('.player-1-info')
var player2Info = document.querySelector('.player-2-info')
var gameState = document.querySelector('.game-state')
var gameSquares = document.querySelectorAll('.game-square')
var comment = document.querySelector('.comment')

typewriter(shallWe.innerText, shallWe, 0)

loadInputForm.addEventListener('submit', askUserName)
userNameForm.addEventListener('submit', askFriend)
friendForm.addEventListener('submit', nameFriend)
gameBoard.addEventListener('click', playGame)

var player1Name
var player2Name 
var game
var comments = ['Anyone here', 'I\'m hungry', 'third option']
var nextComment = 'LET\'S HAVE SOME FUN!'

function typewriter(text, html, i) {
  if(i <= text.length) {
    html.innerText = text.substring(0, i)
    setTimeout(function() {
      typewriter(text, html, i + 1)
    }, 75)
  }
}

function askUserName() {
  event.preventDefault()
  if(event.target.children[1].value === 'y') {
    userNameForm.classList.toggle('hidden')
    nameInput.focus()
    typewriter(greetings.innerText, greetings, 0)
  } else if (event.target.children[1].value === 'n') {
    loadInput.classList.toggle('hidden')
    loadInput.value = ''
    typewriter('THEN I SHALL PLAY: GLOBAL THERMONUCLEAR WAR BY MYSELF. GOODBYE.', shallWe, 0)
    setTimeout(function() {
      window.location.reload()
    }, 7000)
  }
}

function askFriend() {
  event.preventDefault()
  player1Name = nameInput.value.toUpperCase()
  greetings.innerText += ` ${player1Name}`
  nameInput.classList.toggle('hidden')
  friendForm.classList.toggle('hidden')
  friendInput.focus()
  typewriter(friend.innerText, friend, 0)
}

function nameFriend() {
  event.preventDefault()
  friendInput.classList.toggle('hidden')
  player2Name = friendInput.value.toUpperCase()
  friend.innerText += ` ${player2Name}`
  game = new Game(player1Name, player2Name)
  renderDOM()
  beginGame.classList.toggle('hidden')
  typewriter(beginGame.innerText, beginGame, 0)
  setTimeout(function() {
    startGame()
    cycleComments()
  }, 3000)
}

function cycleComments() {
  typewriter(nextComment, comment, 0)
  setTimeout(cycleComments, 5000)
  nextComment = comments[Math.floor(Math.random() * comments.length)]
}

function startGame() {
  loadScreen.classList.toggle('hidden')
  main.classList.toggle('hidden')
}

function playGame() {
  var index = +event.target.closest('.game-square').dataset.index
  game.executeTurn(index)
  renderDOM()
  if (game.gameState !== 'ongoing') {
    setTimeout(function() {
    renderDOM()
    }, 3000)
  }
}

function renderDOM() {
  updateGameInfoDOM()
  updateGameBoardDOM()
}

function updateGameInfoDOM(player) {
  player1Info.children[0].innerText = game.player1.name
  player1Info.children[1].innerText = `${game.player1.wins} Win${game.player1.wins !== 1 ? 's' : ''}`
  player2Info.children[0].innerText = game.player2.name
  player2Info.children[1].innerText = `${game.player2.wins} Win${game.player2.wins !== 1 ? 's' : ''}`
  switch(game.gameState) {
    case 'ongoing':
      gameState.innerHTML = `<p>${game.currPlayer.name}'S TURN</p>`
      break
    case 'win':
      gameState.innerHTML = `<p>${game.currPlayer.name} WINS!</p>`
      break
    case 'tie':
      gameState.innerHTML = `<p>IT'S A TIE!</p>`
  }
}

function updateGameBoardDOM() {
  game.board.forEach((el, i) => {
    gameBoard.children[i].innerHTML = `<h1>${el.token ? el.token : ''}</h1>`
  })
}