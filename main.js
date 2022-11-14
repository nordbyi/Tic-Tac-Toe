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

console.log(player1Info.children[0].innerText)
typewriter(shallWe.innerText, shallWe, 0)

loadInputForm.addEventListener('submit', askUserName)
userNameForm.addEventListener('submit', askFriend)
friendForm.addEventListener('submit', nameFriend)

var player1Name
var player2Name // connect these
var game = new Game(player1Name, player2Name)
// create new game when last input is entered so that names are assigned

function typewriter(text, html, i) {
  if(i <= text.length) {
    // console.log(text.substring(0, i))
    html.innerText = text.substring(0, i)
    setTimeout(function() {
      typewriter(text, html, i + 1)
    }, 75)
  } else {console.log('done')}
}

function askUserName() {
  event.preventDefault()
  if(event.target.children[1].value === 'y') {
    userNameForm.classList.toggle('hidden')
    nameInput.focus()
    typewriter(greetings.innerText, greetings, 0)
  } else if (event.target.children[1].value === 'n') {
    loadInput.value = ''
    typewriter('THEN I SHALL PLAY: GLOBAL THERMONUCLEAR WAR BY MYSELF. GOODBYE.', shallWe, 0)
    setTimeout(function() {
      window.location.reload()
    }, 7000)
  }
  loadInputForm.disabled() 
  // hide inputs instead after form submission
}

function askFriend() {
  event.preventDefault()
  friendForm.classList.toggle('hidden')
  friendInput.focus()
  // dynamically add player 1 name to friend.innerText
  typewriter(friend.innerText, friend, 0)
}

function nameFriend() {
  event.preventDefault()
  if(event.target.children[1].value === 'y') {
    
  }
  // use name to instatiate player 1 class
  beginGame.classList.toggle('hidden')
  typewriter(beginGame.innerText, beginGame, 0)
  setTimeout(function() {
    startGame()
    console.log('got here')
  }, 3000)
}

function startGame() {
  loadScreen.classList.toggle('hidden')
  main.classList.toggle('hidden')
  // body.classList.toggle('hidden')
}

// play game then update DOM

function renderDOM() {
 updateGameInfoDOM()
}

function updateGameInfoDOM(player) {
  player1Info.children[0].innerText = game.player1.name
  player1Info.children[1].innerText = game.player1.wins
  player2Info.children[0].innerText = game.player2.name
  player2Info.children[1].innerText = game.player2.wins
  // switch block
  console.log(player1Info.children[0].innerText)
}

